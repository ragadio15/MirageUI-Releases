# MirageUI Suite v1.0.43 · P40.6 Stable

P40.6 is the stable MirageUI Suite for World of Warcraft: Forever. The archive is the exact build approved after playtesting on client 1.60.1, build 71091, interface 16001. The in-game core version reads `1.0.43-rc.12`.

## What changed

- Friendly players use Blizzard’s overhead name and guild text. MirageUI no longer runs a distance check for each nearby friendly unit. Friendly targets can show a full nameplate when the client supplies one, and attackable units keep their own nameplate distance settings.
- WealthCraft can resume background scans after eight seconds while preserving the current Shop results and Sell inputs. Item details stay visible between selections.
- This build includes the revised settings banners and Help panel, Cursor Companion’s smoother ring rotation, and Insight’s restored tooltip behavior.

## Installation

Fully exit WoW. Download `MirageUI_Suite_P40_6_Forever.zip` and select **Choose ZIP** in MirageUI Installer, or extract the ten included addon folders into the Forever client’s `Interface/AddOns` directory. Keep your existing `WTF` folder and SavedVariables.

## Verification and known limitation

The packaged ZIP passed the archive, load-order and Lua checks, including compilation of 437 Lua files and a simulated crowd of 80 friendly units. Formal native verification recorded in the package is `NOT_RUN`. Forever build 71091 does not expose a supported control for an exact 50-yard cutoff on native overhead names. Some names may remain visible farther away.

`SHA-256  9fc01368f74b7c13b2a34f4fcba71fe7bdd8026de2e0bd9a265587dfc96d468c`
