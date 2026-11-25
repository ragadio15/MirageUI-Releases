# MirageUI Suite v1.0.49

Public test build for World of Warcraft: Forever 1.60.1, interface 16001. This build addresses reports from client build 71139.

## Changes since v1.0.46

- The square minimap recognizes the native mask used by build 71139 and restores the original mask when disabled.
- Insight restores tooltip styling for existing profiles once during the upgrade. To turn it off again, use `/minsight tooltip off`. The preference persists across reloads. Map pins have revised tooltip layout, and the Zone Wayfinder coordinate controls can be collapsed.
- Action bars do less repeated input checking and setup work. Combat exit, native vehicle-button recovery, and compact combat nameplates received fixes.
- The objective tracker can show available content while styling finishes. Chat history loads and saves in smaller batches.

## Installation and verification

Exit WoW and extract the ten add-on folders from the ZIP into the Forever client's `Interface/AddOns` directory. Keep the existing `WTF` folder.

All 441 Lua files compiled. Regression tests covered minimap restoration, tooltips, map pins, nameplates, and combat exit. Rendering, protected input, and frame times still need in-game testing on build 71139.

[Download the Suite ZIP](https://github.com/ragadio15/MirageUI-Releases/raw/refs/heads/main/releases/v1.0.49/MirageUI_Suite_v1.0.49_Forever.zip) · [SHA-256 checksum](SHA256SUMS.txt)
