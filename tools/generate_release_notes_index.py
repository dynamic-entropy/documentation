#!/usr/bin/env python3
import os
import re
from collections import defaultdict
from functools import cmp_to_key, partial
from pathlib import Path

import jinja2

ONEMINOR = re.compile(r"\d+\.\d+\.(\d+)")
SEMANTICMINOR = re.compile(r"\d+\.(\d+).+")
POST = re.compile(r".+post(\d+)")
RC = re.compile(r".+0rc(\d+)")
BIGNUM = 999


def get_release_title(version: str) -> str:
    """
    Returns the title for a minor release. If this title does not exist it
    returns the version string itself.

    :param version: A major and minor version of a release. (e.g. "1.27")
    :returns: The coresponsing release title. This is just the version string in
        case no title exist.

    Note that due to the switch to a new versioning scheme between version
    1.31 and 32, we need to handle version strings beginning with "1."
    differently.
    """
    # We hardcode the minor release titles for now, since there is no easy
    # way to automatically get them.
    HARD_CODED_RELEASE_NOTE_TITLE = {
        "33": "Eternal Sunshine of the Donkey's Mind",
        "32": "The Good, The Bad and the Donkey",
        "1.31": "Donkeys of the Caribbean",
        "1.30": "The Donkeynator",
        "1.29": "Into the Donkeyverse",
        "1.28": "Teenage Mutant Ninja Donkeys",
        "1.27": "Batdonkey v Superdonkey",
        "1.26": "Donkey League of La Mancha",
        "1.25": "Rat-Donkey",
        "1.24": "Aquadonkey",
        "1.23": "The incredible Donkey",
        "1.22": "Green Donkey",
        "1.21": "Donkeys of the Galaxy",
        "1.20": "Wonder Donkey",
        "1.19": "Fantastic Donkeys",
        "1.18": "Invisible Donkey",
        "1.17": "Donkey Surfer",
        "1.16": "Doctor Donkey",
        "1.15": "Daredonkey",
        "1.14": "Professor D",
        "1.13": "Donkerine",
        "1.12": "Captain Donkey",
        "1.11": "Batdonkey",
        "1.10": "Irondonkey",
        "1.9": "Superdonkey",
        "1.8": "Spiderdonkey",
        "1.7": "Donkey One",
        "1.6": "The Donkey awakens",
        "1.5": "Return of the Donkey",
        "1.4": "The Donkey strikes back",
    }
    try:
        if version[:2] == "1.":
            return version + " " + HARD_CODED_RELEASE_NOTE_TITLE[version]
        else:
            return f"{version} {HARD_CODED_RELEASE_NOTE_TITLE[version.split('.')[0]]}"
    except KeyError:
        raise Exception(
            f"Version {version} is not present in the hardcoded"
            "list of minor release titles!"
        )


def index_func(path: Path) -> dict[str, list[str]]:
    """
    Takes a path to a folder containing release notes and returns a sorted
    dictionary mapping major versions to a sorted list of minor versions
    """
    mapped_items = defaultdict(list)
    for i in map(lambda x: x.name, path.iterdir()):
        if i.startswith("1."):
            mapped_items[f"1.{i.split('.')[1]}"].append(i[:-3])
        else:
            mapped_items[i.split(".")[0]].append(i[:-3])
    sorted_major = {
        k: mapped_items[k] for k in sorted(mapped_items.keys(), key=float, reverse=True)
    }
    sorted_minor = {
        k: sorted(v, key=cmp_to_key(sort_func), reverse=True)
        for k, v in sorted_major.items()
    }
    return sorted_minor


def sort_func(a: str, b: str) -> int:
    """
    negative for a < b
    zero for a == b
    positive for a > b
    assumes that either both start in '1.' or neither
    """

    class Version:
        def __init__(self, s: str) -> None:
            if s.startswith("1."):
                self.major = int(s.split(".")[1])
                self.minor = int(ONEMINOR.match(s).group(1))  # type: ignore
                self.post = int(POST.search(s).group(1)) if POST.search(s) else -BIGNUM  # type: ignore
                self.rc = int(RC.search(s).group(1)) if RC.search(s) else BIGNUM  # type: ignore
            else:
                self.major = int(s.split(".")[0])
                self.minor = int(SEMANTICMINOR.match(s).group(1))  # type: ignore
                self.post = int(POST.search(s).group(1)) if POST.search(s) else -BIGNUM  # type: ignore
                self.rc = int(RC.search(s).group(1)) if RC.search(s) else BIGNUM  # type: ignore

    A, B = Version(a), Version(b)

    if A.major == B.major:
        if A.minor == B.minor:
            if A.minor == 0:
                return A.rc - B.rc
            else:
                return A.post - B.post
        else:
            return A.minor - B.minor
    else:
        return A.major - B.major


def get_release_link(path: Path, version: str) -> str:
    return f"{path}/{version}.md"


def render_templates(template_file: Path, output_path: Path) -> None:
    jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_file.parent))
    jinja_env.globals["index"] = partial(index_func, output_path / "release-notes")
    jinja_env.globals["get_release_title"] = get_release_title
    jinja_env.globals["get_release_link"] = partial(get_release_link, "release-notes")

    jinja_template = jinja_env.get_template(template_file.name)
    tpl_out_path = (
        output_path / template_file.name[: template_file.name.find(".md") + 3]
    )
    tpl_out_path.write_text(jinja_template.render())


if __name__ == "__main__":
    template_file = Path(
        os.path.dirname(__file__), "templates/release-notes.md.j2"
    ).resolve()
    render_templates(
        template_file,
        Path(os.path.dirname(__file__), "../docs").resolve(),
    )
