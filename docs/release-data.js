/* Public release snapshot and exact-tag metadata. Update only from published release evidence. */
window.MirageReleaseData = {
  "checked": "2026-11-25",
  "snapshot": {
    "stable": {
      "tag_name": "v1.0.46",
      "name": "MirageUI Suite v1.0.46 (Stable)",
      "prerelease": false,
      "draft": false,
      "published_at": "2026-11-25T18:29:40Z",
      "html_url": "https://github.com/ragadio15/MirageUI-Releases/releases/tag/v1.0.46",
      "body": "# MirageUI Suite v1.0.46 Stable\n\nFor World of Warcraft: Forever 1.60.1, build 71091, interface 16001.\n\n## Changes since v1.0.43\n\n- MirageUI Maps reveals unexplored terrain with distinct shading for travel planning. Custom city and point-of-interest icons are restored on supported zone and continent maps.\n- Customize UI includes options for opening the quest tracker and meters minimized.\n- New profiles and default resets use the reconciled MirageUI layouts and display settings. Cursor Companion uses the curated ring and menu defaults. The defaults are class-neutral and exclude personal spells, abilities, and macros. Existing saved profiles retain their preferences during an ordinary update.\n- Selecting a friendly player or NPC now requests the nameplate immediately and displays the selected card at full opacity as soon as the client supplies it. A next-frame retry handles the case where the plate arrives just after the click.\n\n## Installation\n\nFully exit WoW. Download `MirageUI_Suite_v1.0.46_Forever.zip` and use **Choose ZIP** in MirageUI Installer, or extract the ten addon folders into the Forever client's `Interface/AddOns` folder. Keep your existing `WTF` folder and SavedVariables.\n\n## Verification\n\nArchive integrity, addon load paths, Lua compilation, default profile behavior, and simulated nameplate selection were checked before publication. Formal native verification on build 71091 remains pending.\n\nSHA-256 for the Suite ZIP: `2405cfdd9922afcad0ddeb37dbbf89f94091ced5ac5e283264a4aa201de07a33`.\n",
      "assets": [
        {
          "name": "MirageUI_Suite_v1.0.46_Forever.zip",
          "browser_download_url": "https://github.com/ragadio15/MirageUI-Releases/releases/download/v1.0.46/MirageUI_Suite_v1.0.46_Forever.zip",
          "size": 39180733,
          "digest": "sha256:2405cfdd9922afcad0ddeb37dbbf89f94091ced5ac5e283264a4aa201de07a33"
        },
        {
          "name": "SHA256SUMS.txt",
          "browser_download_url": "https://github.com/ragadio15/MirageUI-Releases/releases/download/v1.0.46/SHA256SUMS.txt",
          "size": 101,
          "digest": "sha256:43226d2739b115a88159d4183d236ec9fdad3748f548b8d7613ca546e52f7158"
        }
      ]
    },
    "test": {
      "tag_name": "v1.0.13-rc.1",
      "name": "MirageUI Suite v1.0.13-rc.1 (P18 Test Release)",
      "prerelease": true,
      "draft": false,
      "published_at": "2026-11-22T08:47:35Z",
      "html_url": "https://github.com/ragadio15/MirageUI-Releases/releases/tag/v1.0.13-rc.1",
      "body": "X-MirageUI-Native-Verification: NOT_RUN",
      "assets": [
        {
          "name": "MirageUIInstaller.exe",
          "browser_download_url": "https://github.com/ragadio15/MirageUI-Releases/releases/download/v1.0.13-rc.1/MirageUIInstaller.exe",
          "size": 8967168,
          "digest": "sha256:d94a05ec637a124ca8899bcb35415bd49abc44f82c4fe55ebd23706989147ec1"
        },
        {
          "name": "MirageUI_Suite_v1.0.13-rc.1_P18_Forever.zip",
          "browser_download_url": "https://github.com/ragadio15/MirageUI-Releases/releases/download/v1.0.13-rc.1/MirageUI_Suite_v1.0.13-rc.1_P18_Forever.zip",
          "size": 33669395,
          "digest": "sha256:eb3ca3ac87ba54f166ea4b6d421834df6a630f77cb7ecabc14b146bf211b3b78"
        },
        {
          "name": "SHA256SUMS.txt",
          "browser_download_url": "https://github.com/ragadio15/MirageUI-Releases/releases/download/v1.0.13-rc.1/SHA256SUMS.txt",
          "size": 198,
          "digest": "sha256:ccaf865bb425ead5e249a2c5df385bc1e0dfc6c19cab3b97d23c9a2e06f91096"
        }
      ]
    }
  },
  "metadata": {
    "v1.0.13-rc.1": {
      "client": "Forever 1.60.1",
      "interface": "16001",
      "native": "NOT_RUN",
      "installer": "v0.3.0 (portable installer in release notes)",
      "notice": "Stress-testing candidate. Back up settings and review release notes before installation."
    },
    "v1.0.43": {
      "client": "Forever 1.60.1 (build 71091)",
      "interface": "16001",
      "native": "NOT_RUN",
      "installer": "MirageUI Installer · Choose ZIP",
      "notice": "P40.6 is approved for stable use. The installed core reports 1.0.43-rc.12."
    },
    "v1.0.46": {
      "client": "Forever 1.60.1 (build 71091)",
      "interface": "16001",
      "native": "NOT_RUN",
      "installer": "MirageUI Installer · Choose ZIP",
      "notice": "This Stable release includes the revised Maps overlays, class-neutral defaults, and faster friendly target nameplate selection."
    }
  }
};
