/* Public release snapshot and exact-tag metadata. Update only from published release evidence. */
window.MirageReleaseData = {
  "checked": "2026-11-25",
  "snapshot": {
    "stable": {
      "tag_name": "v1.0.43",
      "name": "MirageUI Suite v1.0.43 (P40.6 Stable)",
      "prerelease": false,
      "draft": false,
      "published_at": "2026-11-25T05:52:08Z",
      "html_url": "https://github.com/ragadio15/MirageUI-Releases/releases/tag/v1.0.43",
      "body": "# MirageUI Suite v1.0.43 · P40.6 Stable\n\nP40.6 is the stable MirageUI Suite for World of Warcraft: Forever. The archive is the exact build approved after playtesting on client 1.60.1, build 71091, interface 16001. The in-game core version reads `1.0.43-rc.12`.\n\n## What changed\n\n- Friendly players use Blizzard’s overhead name and guild text. MirageUI no longer runs a distance check for each nearby friendly unit. Friendly targets can show a full nameplate when the client supplies one, and attackable units keep their own nameplate distance settings.\n- WealthCraft can resume background scans after eight seconds while preserving the current Shop results and Sell inputs. Item details stay visible between selections.\n- This build includes the revised settings banners and Help panel, Cursor Companion’s smoother ring rotation, and Insight’s restored tooltip behavior.\n\n## Installation\n\nFully exit WoW. Download `MirageUI_Suite_P40_6_Forever.zip` and select **Choose ZIP** in MirageUI Installer, or extract the ten included addon folders into the Forever client’s `Interface/AddOns` directory. Keep your existing `WTF` folder and SavedVariables.\n\n## Verification and known limitation\n\nThe packaged ZIP passed the archive, load-order and Lua checks, including compilation of 437 Lua files and a simulated crowd of 80 friendly units. Formal native verification recorded in the package is `NOT_RUN`. Forever build 71091 does not expose a supported control for an exact 50-yard cutoff on native overhead names. Some names may remain visible farther away.\n\n`SHA-256  9fc01368f74b7c13b2a34f4fcba71fe7bdd8026de2e0bd9a265587dfc96d468c`\n",
      "assets": [
        {
          "name": "MirageUI_Suite_P40_6_Forever.zip",
          "browser_download_url": "https://github.com/ragadio15/MirageUI-Releases/releases/download/v1.0.43/MirageUI_Suite_P40_6_Forever.zip",
          "size": 39166900,
          "digest": "sha256:9fc01368f74b7c13b2a34f4fcba71fe7bdd8026de2e0bd9a265587dfc96d468c"
        },
        {
          "name": "SHA256SUMS.txt",
          "browser_download_url": "https://github.com/ragadio15/MirageUI-Releases/releases/download/v1.0.43/SHA256SUMS.txt",
          "size": 99,
          "digest": "sha256:401205ef45eef5c822b6eab6f0123c7396bbe3e1d43644c2fd1a577595543836"
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
    }
  }
};
