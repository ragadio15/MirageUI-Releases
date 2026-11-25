# MirageUI Suite v1.0.46 Stable

For World of Warcraft: Forever 1.60.1, build 71091, interface 16001.

## Changes since v1.0.43

- MirageUI Maps reveals unexplored terrain with distinct shading for travel planning. Custom city and point-of-interest icons are restored on supported zone and continent maps.
- Customize UI includes options for opening the quest tracker and meters minimized.
- New profiles and default resets use the reconciled MirageUI layouts and display settings. Cursor Companion uses the curated ring and menu defaults. The defaults are class-neutral and exclude personal spells, abilities, and macros. Existing saved profiles retain their preferences during an ordinary update.
- Selecting a friendly player or NPC now requests the nameplate immediately and displays the selected card at full opacity as soon as the client supplies it. A next-frame retry handles the case where the plate arrives just after the click.

## Installation

Fully exit WoW. Download `MirageUI_Suite_v1.0.46_Forever.zip` and use **Choose ZIP** in MirageUI Installer, or extract the ten addon folders into the Forever client's `Interface/AddOns` folder. Keep your existing `WTF` folder and SavedVariables.

## Verification

Archive integrity, addon load paths, Lua compilation, default profile behavior, and simulated nameplate selection were checked before publication. Formal native verification on build 71091 remains pending.

SHA-256 for the Suite ZIP: `2405cfdd9922afcad0ddeb37dbbf89f94091ced5ac5e283264a4aa201de07a33`.
