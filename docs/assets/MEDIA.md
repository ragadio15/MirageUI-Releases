# MirageUI web media inventory

- `logo.png`: existing official public MirageUI logo; original 64×64 PNG preserved without modification.
- `icons/*.svg`: seven new website-only vector pictograms. These are not replacements for in-game addon icons.
- `showcase/*.svg`: editable 1440×810 original vector studies (six suite areas, two comparison studies, and an installer workflow).
- `showcase/*.webp`: optimized 1440×810 presentation exports of the SVGs.
- `media/intro.mp4`: 5-second 960×540 silent animated branding sequence using the public logo.
- `media/*-study.mp4`: five 5-second 960×540 silent motion studies. These are animated original illustrations; no in-game footage is used.
- `media/intro-poster.webp`: offline video poster.

To replace a concept visual with an approved real capture, save the new asset under `showcase/` and update the relevant image source, alternative text, enlarge-dialog title, and caption in `docs/index.html`. Review the media for player names, chat, server details, sensitive content, or unreleased features. Retain an explicit distinction between an actual capture, a prototype, and a design illustration. Update the README showcase image and its caption if appropriate. Any approved video can use the same `data-motion` button and local media path. No external video hosting or trackers are required.

Release updates are read from the public repository only. Site content, compatibility details, and the packaged snapshot should be updated when the suite changes significantly. Keep the Microsoft Store product ID and installer identity unchanged unless Microsoft assigns a new one.
