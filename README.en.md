# Hongguo TV | Free Android TV Short Drama Player — No Login or Membership

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · [English](README.en.md)

<img src="screenshots/hongguo-logo.png" width="220" height="64" alt="Hongguo TV logo">

**Short dramas and comics on your TV. Free to download, no app account or paid membership required.**

Hongguo TV is a free client for Android TVs, TV boxes and compatible streaming devices. Browse full-screen recommendations, explore rankings, search live-action short dramas and comics, save favorites and resume watching with a remote control.

**[Download the APK](https://hongguotv-egb.pages.dev/)** · [GitHub Releases mirror](https://github.com/ljl215186/hongguoTV-updates/releases/latest) · [Report a problem](https://github.com/ljl215186/hongguoTV-updates/issues)

Android 8.0+ · Public release: **0.9.37** · Package: `com.hongguo.tv`

This is an unofficial client for personal research, learning and technical exchange. Third-party works and marks belong to their owners. Use only within your legal authorization; a research purpose does not grant content rights. See the [full disclaimer, in Chinese](DISCLAIMER.md).

## Free to use and easy to navigate

| Feature | What you get |
|---|---|
| Free app | No app subscription or paid episode-unlock flow. |
| No login | Browse and watch without creating an app account or scanning a login code. |
| Made for TV | Large posters, visible focus and transparent playback overlays. |
| Continuous viewing | Next-episode preparation, autoplay, resume, playback speed and quality settings. |
| Discover more | Recommended, trending, new release, upcoming and other rankings, plus filters. |
| Local library | Favorites, watch later and viewing progress saved on your device. |
| Search across libraries | Search live-action dramas and comics together, with pagination and duplicate filtering. |

Playback quality and buffering depend on your device, connection and the content source. If playback stalls, check the network, lower the quality or retry.

## Interface languages

Releases from **0.9.35** offer **Settings → Language** with **简体中文 (Simplified Chinese), 繁體中文 (Traditional Chinese) and English**. Selecting a language reloads the interface and returns to language settings. Your choice is remembered on this device and does not change the TV system language.

Navigation, common ranking and filter labels, search prompts, playback controls, settings, backup prompts and update dialogs are translated. Show titles, synopses, subtitles, search input and release notes from the server remain in their original language. Language selection does not change favorites, viewing progress or content-library preferences, and is not overwritten by a library backup.

**Availability:** 0.9.37 is published on GitHub Releases and CF / R2. Download the APK or check for updates in the app. This release adds local library snapshots, recovery and saved-record checks before future in-app upgrades. The screenshots below show the older Chinese interface and do not represent device testing of this release.

## Four main sections

- **For You:** full-screen previews with sound. Up and down change recommendations; OK opens the full show.
- **Discover:** rankings, live-action/comic filters and search across both libraries.
- **Library:** continue watching, favorites and watch later.
- **Settings:** default quality, speed, picture mode, autoplay, backup/restore and updates; language selection from 0.9.35.

Search results support Previous page and Next page. At the end, the app shows a message and stays on the current page. A failed request also keeps your current results. Voice input uses compatible system speech services, with the TV keyboard as a fallback.

## Remote control guide

| Where you are | Controls |
|---|---|
| Top navigation | Left/right switches sections; OK or Down enters the content. |
| Recommendation preview | Up/down changes titles; OK watches the full show; left/right or Menu opens actions. |
| Full episode | Up/down selects the previous/next episode; OK pauses/resumes; left/right or Menu opens controls. |
| Playback controls | The first left/right press opens controls. On the timeline, left/right seeks and up/down selects actions. On a button, left/right moves focus and OK activates it. |
| Menus | Back closes the current menu or overlay before returning to the previous page. Returning from a show to recommendations reveals the top navigation. |
| Pagination | Focus Previous page or Next page and press OK. Focus remains on the selected paging button. |

## Screenshots

These are actual **0.9.23** screenshots, provided as interface references. The tested environment was Android 9 / x86_64 at 1080p, with 720p and larger text also checked. This does not certify every TV brand or the later language build.

| Discover | Search |
|---|---|
| ![Ranking posters and separate search entry](screenshots/discovery.png) | ![Search results across live-action dramas and comics](screenshots/search-results.png) |

| Recommendations | Filters |
|---|---|
| ![Full-screen preview with transparent actions](screenshots/recommendation-panel.png) | ![Comic category and art-style filters](screenshots/filters-comic.png) |

| Playback | Library |
|---|---|
| ![Full-screen short drama playback](screenshots/playback-fullscreen.png) | ![Local favorites and viewing progress](screenshots/library.png) |

## Supported TVs and streaming boxes

The APK requires **Android 8.0 / API 26 or newer**, local APK installation support and compatible playback hardware. Check the actual Android version, not just a brand or launcher version. Support varies by model, region and firmware; these are installation conditions, not brand-wide device certifications.

Android models from Xiaomi/Redmi, Hisense/Vidda, TCL/FFALCON, Skyworth/Coocaa, Changhong/CHiQ, Konka, Haier/Casarte, Sony BRAVIA, Philips and Sharp may meet these conditions. See the [brand-by-brand TV guide, in Chinese](INSTALL.md#brand-guides). Huawei/Honor screens still require model-specific compatibility checks.

Samsung Tizen, LG webOS, VIDAA, Roku, Titan OS, Apple TV/tvOS and Vega OS cannot directly run this Android APK. A compatible external Android box can be connected to the TV over HDMI.

### Install on a TV box

Connect the box to your TV, select its HDMI input and use the **box remote**. Install the APK on the box, rather than in the TV's separate operating system.

1. Open the [download page](https://hongguotv-egb.pages.dev/) on your computer or phone and download the release `.apk` file. Do not download or extract Source code archives.
2. Copy the APK to a USB drive and insert it into the box. Open it with a file manager that supports APK files; choose All files or Installation packages if needed.
3. When Android asks, allow **that file manager or download tool** to install unknown apps. Return to the installer and confirm installation.
4. Open Hongguo TV from the box's Apps list. No app login or membership is required.

![Illustrated USB installation steps: download, copy, insert, open, authorize and install](screenshots/install-usb-steps.png)

The image is a generic illustration, not a screenshot of every brand's firmware.

| Box / device | Installation approach |
|---|---|
| **Xiaomi Box / Xiaomi TV Box S / Mi Box S** | Domestic firmware may provide TV Manager → USB installation packages or an HD player. Overseas models may need a file manager from their store. Wireless transfer is another option. [Xiaomi official instructions](https://www.mi.com/tw/support/article/KA-17660/) |
| **Dangbei** | Put the APK on USB, browse the installation file and confirm. Existing Dangbei tools may offer Remote push/Remote install over your local network. [Official USB guide](https://sp.dangbei.com/cn/117.html) |
| **Tencent Aurora / Skyworth boxes** | On models with installation enabled, use the local file tool to open the APK from USB and follow the installer. Menu names vary; check model support if APKs cannot be opened. |
| **Tmall Magic Box** | First verify the actual Android API and APK support; a YunOS version alone does not establish compatibility. Eligible models can use their local file tool or an existing APK-transfer tool. |
| **ZIDOO / HiMedia** | Verify Android 8.0+, then open the USB APK with the built-in file manager. Many older players do not meet the minimum. See [ZIDOO support](https://www.zidoo.tv/Support/faq.html?l=zh-cn) and [HiMedia support](https://www.himedia.cn/support). |
| **NVIDIA SHIELD TV / Pro** | Use wireless APK transfer, or USB on a Pro model with USB ports. Pro also offers local-network file transfer in its storage settings. [Official Pro guide](https://www.nvidia.com/en-us/shield/support/shield-tv-pro/) |
| **Google TV Streamer / Chromecast with Google TV / onn. Google TV** | Use Send Files to TV or an available Downloader app. This applies to devices with their own Android/Google TV app interface, not old casting-only Chromecasts. |
| **Amazon Fire TV Stick / Cube** | Use only APK-compatible Fire OS models meeting API 26, such as Fire OS 7/8. Fire OS 5/6 are too old; Vega OS is not supported. Use Downloader, authorize installation and open the APK. [Amazon system list](https://developer.amazon.com/docs/fire-tv/fire-os-overview.html) |
| **Generic Android / operator-provided boxes** | Verify Android 8.0+ and an already open APK installation path. Chip names do not establish the OS version. Closed IPTV firmware may prevent installation. |

For more model notes, see the [detailed TV box guide, in Chinese](README.md#tv-box-install). The guide does not require flashing firmware or bypassing device restrictions.

### Install without a USB drive

- **Android phone → Android TV:** install **Send Files to TV** on both devices. Keep them on the same local network. Select Receive on TV, Send on the phone, choose the APK and the TV, then open the received APK and confirm installation. [Developer's store page](https://play.google.com/store/apps/details?id=com.yablio.sendfilestotv&hl=en)
- **Computer or iPhone → box:** if the box already has a browser-upload/file-transfer tool, open its receiving screen. Enter the displayed local address in your browser, upload the APK, then confirm installation on the box.
- **Download on the box:** where available, use a browser or **Downloader by AFTVnews**, enter `https://hongguotv-egb.pages.dev/`, download the APK and follow the system installer. [Downloader developer](https://www.aftvnews.com/downloader/)

![Wireless installation choices for phones and computers](screenshots/install-wireless-options.png)

Ordinary screen mirroring or video casting does not install APKs. The receiving tool must support transferring files and must already be available on the box. See the [illustrated wireless guide, in Chinese](WIRELESS-INSTALL.md).

## Updates and local records

Use **Settings → Version and updates** to check, download and install a compatible release. Android may ask for installation permission and always requires system confirmation. Later official releases with the same package and signing certificate can upgrade the app while keeping records.

From 0.9.33, including public release 0.9.37, updates are checked at each launch and foreground return. Optional updates include Later. A required update cannot be dismissed; an episode already underway may finish before the dialog appears.

Favorites, watch-later titles and progress are local. Use **Settings → Phone backup and restore** to export/import a JSON backup when moving to another device. Language choice is specific to each device.

## Troubleshooting and feedback

- **APK not visible:** use an APK-capable file manager, show All files and check that the name still ends in `.apk`.
- **Cannot parse/install:** verify Android 8.0+, available storage and a complete download. The APK is not a ZIP archive.
- **Installation restricted:** follow your model's documented installation path or ask the manufacturer/operator.
- **No app icon:** look in the system's installed-apps list.
- **Playback buffers:** check the connection, lower quality, retry or choose another show.

See the [full troubleshooting table, in Chinese](INSTALL.md#troubleshooting). When opening an [issue](https://github.com/ljl215186/hongguoTV-updates/issues), include the app version, model, Android version and steps to reproduce. Do not share passwords or private backups.

**[Download Hongguo TV](https://hongguotv-egb.pages.dev/)** · [Release history](https://github.com/ljl215186/hongguoTV-updates/releases)
