# 红果TV｜免费电视短剧，支持账号同步与彩色弹幕

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · [English](README.en.md)

<img src="screenshots/hongguo-logo.png" width="220" height="64" alt="红果TV 标识">

**免费追短剧，大屏看漫剧。可选登录同步，收藏点赞随手操作，彩色弹幕一起看。**

红果TV 是面向 Android 电视、电视盒子的免费短剧客户端，集真人短剧、漫剧、热门排行榜、全库搜索与大屏播放于一体。游客可直接观看；手机号登录本人红果账号后，自动读取收藏、观看历史与点赞片单，播放时可点赞、收藏，也能按需合并本机记录。带圆形头像的彩色弹幕、评论列表、分组选集、倍速与断点续播，让遥控器操作更顺手。

**[免费下载电视版 APK](https://hongguotv-egb.pages.dev/)** · [GitHub Releases 备用下载](https://github.com/ljl215186/hongguoTV-updates/releases/latest) · [反馈问题](https://github.com/ljl215186/hongguoTV-updates/issues)

Android 8.0+ · 当前版本 **0.9.101** · 可选账号同步 · 真人剧 / 漫剧 · 三语界面

**Telegram：** [发布频道 · 版本动态](https://t.me/HongGuoTVPublish) · [交流群 · 使用反馈](https://t.me/HongGuoTVJiaoLiu)

| 发布频道 | 交流群 |
|---|---|
| <img src="screenshots/tg-publish.png" width="220" alt="红果TV Telegram 发布频道二维码"> | <img src="screenshots/tg-community.png" width="220" alt="红果TV Telegram 交流群二维码"> |

在片单中选中作品后按菜单键，选择“查看剧集详情”；播放时也可通过“更多”查看作品介绍。

**本次更新：** 优化登录后的账号推荐，逐次保存浏览进度，切回首页与重启时延续推荐上下文；改善连续换剧、选集与继续观看的稳定性。正剧返回推荐保留当前集数和播放位置。彩色弹幕支持头像、评论赞数，以及范围、密度、透明度和速度调整。**[查看完整功能截图](SCREENSHOTS.md)**。

**安装导航：** [支持的电视品牌](#支持哪些电视品牌和电视盒子) · [各种电视盒子安装教程](#tv-box-install) · [U 盘安装图解](INSTALL.md#usb-install) · [手机 / 电脑无线安装](WIRELESS-INSTALL.md) · [按电视品牌查看教程](INSTALL.md#brand-guides) · [安装失败排查](INSTALL.md#troubleshooting)

本项目仅供个人研究、学习与技术交流，为非官方客户端；第三方作品和标识归相应权利人所有。请在合法授权范围内使用，完整说明见 [免责声明](DISCLAIMER.md)。

![红果TV 新版排行榜、顶部栏目与搜索入口](screenshots/v0.9.74/discovery.png)

## 观看、同步与互动，都为大屏准备

| 你关心的体验 | 红果TV 的做法 |
|---|---|
| 免费使用 | 免费下载，App 不设置付费解锁和会员购买流程。 |
| 可选登录 | 游客直接观看，也可用手机号登录本人红果账号。 |
| 账号同步与记录合并 | 登录后自动读取账号收藏、历史与点赞片单；按需合并本机记录。 |
| 点赞与收藏 | 登录后在正剧播放菜单中直接点赞、收藏，按钮显示状态与数量。 |
| 遥控器友好 | 大字海报、清晰焦点，方向键、OK 和返回键完成常用操作。 |
| 连贯看剧 | 下一集预加载、自动连播、断点续播，可调整清晰度、倍速和画面模式。 |
| 彩色弹幕与评论 | 默认多彩半屏、圆形头像；支持全屏、关闭、透明度、速度和色彩，评论可向下浏览更多。 |
| 简体、繁体与英语 | 设置 → 语言 / Language 切换，记住本机选择，不改变视频内容。 |

## 四个入口，找剧和继续观看都顺手

- **推荐**：全屏预览，↑ / ↓ 切换作品，OK 看全集；返回唤出透明导航。
- **找剧**：多个排行榜、真人剧 / 漫剧筛选与全库搜索；搜索和榜单支持分页，末页不空翻，失败可以重试。
- **我的**：游客显示登录、接着看、收藏、稍后看；登录后显示账号和点赞片单，账号资料直接在下方展示。
- **设置**：默认清晰度、倍速、画面模式、自动连播、语言、手机备份恢复和版本更新。

手机号登录为可选功能，验证码只在本人设备输入。登录后自动读取账号片单，也可在“我的 → 账号”手动同步或合并本机记录。片单按账号独立保存；点赞、收藏以账号服务返回成功为准。扫码登录尚未开放，历史与合并记录不自动上传。

## 新版界面：推荐、搜索、播放与互动

以下为 Android 9 测试设备、1920×1080 的实际画面。彩色弹幕与播放互动图已按 0.9.75 重新采集，其余页面沿用 0.9.73 / 0.9.74 图集。点击图片查看原图，**[完整功能截图集](SCREENSHOTS.md)** 包含其余菜单和设置。

| 透明推荐导航 | 推荐播放控制 |
|---|---|
| ![红果TV 透明推荐导航](screenshots/v0.9.73/recommendation.png) | ![红果TV 推荐控制层与互动数量](screenshots/v0.9.73/recommendation-controls.png) |

| 漫剧分类筛选 | 全库搜索真实结果 |
|---|---|
| ![红果TV 漫剧题材和画风筛选](screenshots/v0.9.74/filters-comic.png) | ![红果TV 全库搜索结果](screenshots/v0.9.74/search-results.png) |

| 正剧播放控制 | 评论列表向下浏览 |
|---|---|
| ![红果TV 正剧进度条及操作按钮](screenshots/v0.9.75/playback-controls.png) | ![红果TV 评论列表侧栏](screenshots/v0.9.75/comments.png) |

| 分组快速选集 | 可选手机号登录 |
|---|---|
| ![红果TV 分组选集](screenshots/v0.9.75/episodes.png) | ![红果TV 游客手机号登录页](screenshots/v0.9.75/login.png) |

### 彩色弹幕，默认半屏，也能自由调整

| 全屏：上下区域均可显示 | 半屏：只显示在上半屏 |
|---|---|
| ![红果TV 修复后的全屏弹幕](screenshots/v0.9.75/danmaku-full.png) | ![红果TV 半屏弹幕范围](screenshots/v0.9.75/danmaku-half.png) |

两张彩色弹幕图来自同一集、同一播放位置。默认半屏只在上半部显示，全屏可使用完整区域；弹幕左侧显示圆形用户头像，无法取得时使用默认图。更多显示选项见 **[弹幕设置截图](SCREENSHOTS.md#danmaku)**。

## 遥控器怎么操作

| 场景 | 遥控器操作 |
|---|---|
| 顶部栏目 | ← / → 切换，OK 或 ↓ 进入内容。 |
| 推荐全屏 | ↑ / ↓ 上一部 / 下一部，OK 看全集；← / → 或菜单键显示控制层。 |
| 正剧全屏 | ↑ / ↓ 上一集 / 下一集，OK 暂停 / 继续；← / → 或菜单键显示控制层。 |
| 进度条聚焦 | 图标滑块提示焦点；← / → 快退 / 快进，↑ / ↓ 选择操作。首次左右只显示控制层。 |
| 菜单与评论 | 方向键操作当前面板，返回逐层收起；从正剧返回推荐时显示顶部导航。 |
| 分页与分组选集 | 选择上一页 / 下一页或上一组 / 下一组；翻页保持按钮焦点，末页只提示。 |

原生界面、预加载与断点续播让追剧更连贯；实际流畅度仍取决于设备、网络与内容源。缓冲时可降低清晰度、检查 Wi-Fi 或重试。截图和测试设备不代表所有电视品牌实机认证。

## 支持哪些电视品牌和电视盒子

适用于 **Android 8.0（API 26）及以上、允许安装本地 APK** 的电视和电视盒子。可按下表查找小米、海信、TCL、创维等品牌的安装方法；品牌名称不等于全系兼容，具体还取决于型号、地区、系统版本与安装权限。

| 电视品牌 / 设备 | 适用范围与安装教程 |
|---|---|
| **小米 / Redmi 电视、小米盒子** | 符合系统要求的机型，可通过电视管家或高清播放器安装。[查看教程](INSTALL.md#xiaomi) |
| **海信 / Vidda** | 仅适用于符合要求且允许 APK 安装的 Android 机型；VIDAA / Roku 系统不适用。[查看教程](INSTALL.md#hisense) |
| **TCL / 雷鸟** | Android / Google TV 或兼容 Android APK 的机型；TCL 海外说明不能直接套用全部国内固件。[查看教程](INSTALL.md#tcl) |
| **创维 / 酷开** | 需确认 Android 版本及本地安装权限；部分固件限制第三方安装。[查看教程](INSTALL.md#skyworth) |
| **长虹 / CHiQ** | 符合要求的 Android 机型，按本机文件工具与安装器操作。[查看教程](INSTALL.md#changhong) |
| **康佳** | 符合要求且开放本地 APK 安装的 Android 机型。[查看教程](INSTALL.md#konka) |
| **海尔 / 卡萨帝** | 需核对具体型号的系统版本、USB 文件浏览和安装权限。[查看教程](INSTALL.md#haier) |
| **索尼 BRAVIA** | Android TV / Google TV 机型；非 Android 老机型不适用。[查看教程](INSTALL.md#sony) |
| **飞利浦 / 夏普** | 仅适用于符合要求的 Android TV / Google TV 机型。[查看教程](INSTALL.md#philips-sharp) |
| **荣耀智慧屏 / 华为智慧屏** | 部分型号提供第三方安装入口，但本 App 兼容性仍需核验，暂不列为已验证支持。[查看说明](INSTALL.md#smart-screen) |
| **Android 电视盒子 / 电视棒** | 小米、当贝、腾讯极光、天猫魔盒、芝杜、海美迪及海外 Android TV 设备，逐型号核对系统与安装权限。[盒子分品牌教程](#tv-box-install) |
| **Android 投影仪** | 符合 Android 8.0+、APK 安装及遥控器要求时可尝试。[查看教程](INSTALL.md#android-box) |

上述为**安装条件与教程索引，不是逐品牌实机认证名单**。目前完成 Android 9 指定测试设备验证，尚未完成这些品牌全部机型的实机验收。三星 Tizen、LG webOS、VIDAA、Roku、Titan OS 等非 Android 系统不能直接运行本 APK，可在外接兼容 Android 盒子上安装。系统差异与厂商来源见 [完整安装指南](INSTALL.md#compatibility)。

<a id="tv-box-install"></a>
## 电视盒子安装教程：小米、当贝、腾讯极光、天猫魔盒等

**盒子接在哪个 HDMI 接口，就把电视切到对应信号源，再使用盒子遥控器安装。** 软件装在盒子内，与电视品牌无关；电视仅需能显示盒子的 HDMI 画面。先在盒子的 **设置 → 关于 / 设备信息** 核对实际 Android 版本，需 **Android 8.0（API 26）及以上**，并允许安装本地 APK。

| 设备 | 优先方法 | 教程 |
|---|---|---|
| 小米盒子、Xiaomi TV Box S / Mi Box S | U 盘；海外版可无线传输 | [小米盒子](#box-xiaomi) |
| 当贝盒子 | U 盘；已有工具远程推送 | [当贝盒子](#box-dangbei) |
| 腾讯极光 / 创维盒子 | 本机文件工具打开 U 盘 APK | [腾讯极光 / 创维](#box-tencent) |
| 天猫魔盒 | 先核对系统，再用本机安装入口 | [天猫魔盒](#box-tmall) |
| 芝杜、海美迪 | 文件管理打开 U 盘 APK | [芝杜 / 海美迪](#box-zidoo-himedia) |
| NVIDIA SHIELD TV / Pro | 无线传输；Pro 可用 U 盘 | [SHIELD](#box-shield) |
| Google TV Streamer、Chromecast with Google TV、onn. Google TV | Send Files to TV / Downloader | [Google TV 设备](#box-google-tv) |
| Amazon Fire TV Stick / Cube | 支持安装 APK 的 Fire OS 机型用 Downloader | [Fire TV](#box-fire-tv) |
| 通用 Android 盒子、运营商盒子 | 开放安装的 Android 8.0+ 固件按通用步骤 | [其他盒子](#box-generic) |

### 安装前准备：只下载 APK，不解压

1. 打开 **[红果 TV 免费下载页](https://hongguotv-egb.pages.dev/)**，保存正式版 `.apk` 文件；GitHub 下载时选择 APK 附件，不选 Source code。
2. 有 USB 接口：把 APK 复制到 U 盘根目录，插入**盒子**的 USB 接口，再使用盒子的文件工具打开。文件工具只显示影片时，切到“全部文件 / 安装包”。
3. 没有 USB 接口：盒子与手机 / 电脑连接同一局域网，按下方品牌教程选择文件传输或直接下载。
4. 打开 APK 后，若系统询问权限，允许**当前文件工具 / 下载工具**安装未知应用，再返回安装器确认安装。权限入口随固件不同，以本机提示为准；详见 [Android TV 官方应用安全说明](https://support.google.com/androidtv/answer/12188351?hl=zh-Hans)。
5. 安装完成，从盒子的“我的应用 / 全部应用”打开 **红果 TV**，无需登录或购买会员。

![电视盒子 U 盘安装六步示意：下载 APK、复制、插入盒子、打开文件工具、授权与安装](screenshots/install-usb-steps.png)

图为通用操作示意，不是各品牌系统实拍。没有 U 盘可查看 [无线安装方式图解](WIRELESS-INSTALL.md#choose)。

<a id="box-xiaomi"></a>
### 小米盒子、Xiaomi TV Box S / Mi Box S

**国内小米盒子，有 U 盘时：**

1. 插入装有 APK 的 U 盘；出现提示时打开 U 盘。
2. 没有弹窗时，在应用列表找 **电视管家 / 电视管理器 → U 盘安装包**，或进入 **高清播放器** 浏览 U 盘。
3. 选中红果 TV 的 APK，按 OK，按系统提示授权并安装；菜单名称以型号与固件为准。[小米官方电视与盒子安装说明](https://www.mi.com/tw/support/article/KA-17660/)、[小米官方高清播放器图文说明](https://www.mi.com/service/mitv/player)

**海外 Xiaomi TV Box S / Mi Box S：** 若没有预装 APK 文件工具，先从本机应用商店获取支持 APK 的文件管理器，再打开 U 盘安装；也可在盒子与 Android 手机安装 Send Files to TV，盒子选 **Receive**、手机选 **Send**，发送 APK 后打开安装。详细步骤见 [Send Files to TV 图文教程](WIRELESS-INSTALL.md#sfttv)。国内外固件入口不同，不直接套用菜单；较老小米盒子需先确认系统达到 Android 8.0。[小米盒子官方常见问题](https://www.mi.com/tw/mibox/)

<a id="box-dangbei"></a>
### 当贝盒子

1. 下载正式 APK 放入 U 盘，插入当贝盒子。
2. 在 U 盘提示或文件管理中浏览安装文件，选中 APK，按 OK 确认安装；若有安装权限提示，按提示为当前工具授权。[当贝官方 U 盘安装说明](https://sp.dangbei.com/cn/117.html)
3. 无 U 盘且盒子已有**当贝市场 / 电视应用管家**时，可找“远程推送 / 远程安装”，在同网手机或电脑浏览器输入盒子显示的地址，上传 APK，再在盒子确认安装。仅在工具实际提供该入口时使用，见 [当贝远程安装图文教程](WIRELESS-INSTALL.md#dangbei) 与 [当贝官方工具说明](https://www.dangbei.com/apps/)。

当贝不同代际盒子的系统版本不相同，按本机 Android 版本判断；不需要为了安装红果 TV 更换默认桌面。

<a id="box-tencent"></a>
### 腾讯极光盒子 / 创维盒子

以下为**开放 APK 安装机型的通用流程**；尚未找到可覆盖各型号的当前厂商统一安装菜单说明。

1. 在盒子设置查看型号和 Android 版本，符合要求后，把 APK 放入 U 盘并插入盒子。
2. 进入本机“文件管理 / 媒体中心 / U 盘”等实际提供的文件入口，切到全部文件或安装包，选择 APK。
3. 按系统提示为当前文件工具授权并安装；如果已有支持传 APK 的局域网工具，也可使用 [无线文件传输](WIRELESS-INSTALL.md)。

极光与创维盒子存在不同型号和定制固件；如只能浏览影音文件或提示禁止安装，先向型号售后确认开放安装方式，不把系统升级入口当成 APK 安装入口。

<a id="box-tmall"></a>
### 天猫魔盒

1. 先在设置中确认**实际 Android 版本**及本地 APK 安装能力；仅显示 YunOS 等系统名称时，不能据此判断满足 Android 8.0。
2. 对符合条件的机型，把 APK 放到 U 盘根目录，插入魔盒；在本机提供的文件工具中找到 APK，按系统安装器提示安装。
3. 没有可用 U 盘入口、但已有远程推送工具时，可按 [浏览器上传流程](WIRELESS-INSTALL.md#builtin-transfer) 发送；工具需先能在盒子使用。

本段为条件式通用流程，未核实天猫魔盒各型号的统一菜单路径。旧款和限制本地安装的固件不列为已支持，不通过修改 APK 后缀尝试绕过限制。

<a id="box-zidoo-himedia"></a>
### 芝杜 ZIDOO、海美迪播放器 / 盒子

1. 先在设备设置核对 Android 8.0+，再把 APK 放入 U 盘插入播放器。
2. 打开本机文件管理器，选择 U 盘及 APK，调用系统安装器安装；应用安装完成后到全部应用中启动红果 TV。
3. 芝杜的按型号图文可从 [芝杜官方支持中心](https://www.zidoo.tv/Support/faq.html?l=zh-cn) 找“**芝杜安装第三方软件教程**”；海美迪可从 [官方服务中心](https://www.himedia.cn/support) 找“**海美迪电视盒怎样安装第三方软件**”。具体界面以对应型号教程为准。

**旧款播放器尤其要先查系统。** 例如海美迪官方列出的 Q5 四代 Android 5.1 / 7.0 均未达到本 App 的最低要求，不能仅因能安装其他 APK 就认定支持红果 TV。[海美迪官方旧型号系统说明](https://www.himedia.cn/newsinfo/2078172.html)

<a id="box-shield"></a>
### NVIDIA SHIELD TV / SHIELD TV Pro

1. 在系统设置确认 Android 版本，使用本机商店中可用的 APK 文件工具，或通过 [Send Files to TV](WIRELESS-INSTALL.md#sfttv) 从 Android 手机发送安装包。
2. **SHIELD TV Pro 有 USB 接口的机型**可插 U 盘，再从文件工具打开 APK；不要把有无 USB 的不同型号混用教程。
3. Pro 还可按官方手册进入 **Settings → Device Preferences → Storage → Transfer files over local network**，使用盒子显示的地址与凭据从电脑复制 APK，再由盒子上的文件工具打开安装。只传文件不会自动安装。[NVIDIA 官方 SHIELD TV Pro 用户指南](https://www.nvidia.com/en-us/shield/support/shield-tv-pro/)

<a id="box-google-tv"></a>
### Google TV Streamer、Chromecast with Google TV、onn. Google TV

以下针对**有独立应用界面、可安装应用的 Android TV / Google TV 设备**，按本机 Android 版本和安装权限判断。

1. **Android 手机传输：** 两端从各自商店安装 Send Files to TV；电视端选 **Receive**，手机端选 **Send**，选择 APK 和目标设备，接收后打开 APK 安装。[工具开发者的 Google Play 页面](https://play.google.com/store/apps/details?id=com.yablio.sendfilestotv&hl=zh)
2. **直接下载：** 本机商店提供 Downloader 时，安装后输入完整地址 **`https://hongguotv-egb.pages.dev/`**，进入页面下载 APK，再按提示允许该工具安装应用。[Downloader 开发者说明](https://www.aftvnews.com/downloader/)
3. 安装后从应用列表打开；未出现图标时，可在系统设置的已安装应用中查找并启动。

无线传输不需要另买 U 盘转接设备。Google TV Streamer 的 USB-C 为电源 / 数据接口，并非普通 USB-A 插口；旧款**仅投屏的 Chromecast**不适用本安装教程。[Google TV Streamer 官方规格](https://store.google.com/product/google_tv_streamer_specs?hl=en-US)

<a id="box-fire-tv"></a>
### Amazon Fire TV Stick / Fire TV Cube

**先核对操作系统。** 仅适用于支持 Android APK 且达到 API 26 的 Fire OS 设备，例如 Fire OS 7（Android 9）和 Fire OS 8；Fire OS 5 / 6 低于最低要求。采用 **Vega OS** 的 Fire TV 不适用 Android APK，不能仅凭“Fire TV”名称判断。[Amazon 官方系统与机型对照](https://developer.amazon.com/docs/fire-tv/fire-os-overview.html)

1. 从本机 Amazon Appstore 获取 **Downloader by AFTVnews**，打开后输入 **`https://hongguotv-egb.pages.dev/`**，下载正式 APK。[Downloader 开发者说明](https://www.aftvnews.com/downloader/)
2. 系统提示时，在 **Settings → My Fire TV → Developer Options → Install unknown apps** 为 Downloader 允许安装，再返回打开 APK。若当前 Fire OS 隐藏开发者选项，可进入 **My Fire TV → About**，在设备名称上连续按 OK 约 7 次，返回上一层查看；路径随固件变化。[Downloader 开发者的设置图文](https://www.aftvnews.com/how-to-find-show-unhide-reveal-developer-options-on-an-amazon-fire-tv-stick-fire-tv-cube-or-fire-tv-smart-tv/)
3. 安装后在应用列表启动。列表暂未显示时，进入 **Settings → Applications → Manage Installed Applications → 红果 TV → Launch application**。[Amazon 官方侧载应用启动说明](https://www.developer.amazon.com/docs/fire-tv/installing-and-running-your-app.html)

<a id="box-generic"></a>
### 通用 Android 盒子与运营商定制盒子

**通用 Android 盒子：** 包括采用 Amlogic / Rockchip 等芯片的产品，芯片名称不代表系统版本。确认 Android 8.0+ 后，U 盘插入盒子 → 文件管理 → 全部文件 / APK → 打开安装包 → 按提示授权安装；无 USB 时使用 [同网无线安装](WIRELESS-INSTALL.md)。

**中国移动魔百和 / 咪咕、中国电信天翼高清、中国联通 IPTV 等：** 仅在当前固件已开放 Android APK 安装、系统版本达标时采用上述步骤。运营商定制盒子可能限制安装；没有入口时先问运营商，不提供刷机、工厂模式或绕过限制教程。

Apple TV（tvOS）、Roku、Vega OS 等非 Android 设备不能直接装本 APK。安装失败先看 [排查表](INSTALL.md#troubleshooting)，不要反复下载不匹配系统的安装包。

盒子教程资料补充核对日期：**2026-10-22**。上述为安装方法与兼容条件，尚未完成逐品牌实机验收。安装后应用内更新方式见 [设置 → 版本与更新](INSTALL.md#updates)。

## 免费下载与安装 Android TV APK

![红果 TV 电视 APK 安装图解：下载、复制到 U 盘、选择安装包、授权、安装及启动](screenshots/install-usb-steps.png)

上图为操作示意，不是各品牌系统实拍。详细步骤与官方说明见 **[安卓电视安装图文教程](INSTALL.md)**。

**没有 U 盘也能安装：** 电视自带传文件、品牌手机助手、当贝远程安装、Send Files to TV、电视直接下载等方法，见 [无线安装图文教程](WIRELESS-INSTALL.md)。iPhone 用户可优先查看 [浏览器上传方案](WIRELESS-INSTALL.md#iphone)；普通镜像 / 视频投屏不等于传 APK 安装。

1. 打开 **[红果 TV 下载页](https://hongguotv-egb.pages.dev/)**，下载带版本号的正式 APK；也可从 [GitHub Releases](https://github.com/ljl215186/hongguoTV-updates/releases/latest) 下载。
2. 将 APK 放入 U 盘根目录，插入电视 / 盒子 USB 接口；没有 USB 接口时，可使用设备支持的局域网文件传输工具。
3. 使用支持 APK 的文件工具打开安装包，在系统安装器确认安装；首次安装按提示允许**当前文件工具**安装未知来源应用。
4. 打开红果 TV，无需登录或购买会员，进入推荐或找剧即可开始观看。

文件名示例：`hongguotv-0.9.101-release.apk`。下载 Release 的 APK 附件，不下载 `Source code (zip)` 或 `Source code (tar.gz)`；APK 不需要解压。首次下载直接安装，安装后可在 **设置 → 版本与更新** 获取后续同包名正式版。

## 常见问题

### 红果 TV 真的免费吗？需要登录或会员吗？

App 免费提供，不设置会员购买和付费解锁流程。游客可以直接观看；手机号登录为可选功能，用于读取本人账号片单。作品是否可播放取决于内容源的实际状态。

### 支持短剧、漫剧和全库搜索吗？

支持真人短剧与漫剧，可通过排行榜、分类筛选或关键词查找。漫剧还可按画风筛选。搜索不受当前榜单类型限制。

### 可以在应用内更新吗？

可以从 **设置 → 版本与更新** 检查、下载新版，再由 Android 系统确认安装。也会在前台空闲时检查更新；播放中不打扰。关闭自动下载仍可收到升级提示。

### 收藏和观看进度如何保存？

正式包名为 `com.hongguo.tv`。游客片单与进度保存在本机，账号片单按账号独立保存；合并本机记录需手动选择，不自动上传历史或合并内容。以后同包名、同正式签名的版本可覆盖升级并保留记录；换设备前可在 **设置 → 手机备份与恢复** 导出 JSON。

### 如何反馈使用问题？

请通过本仓库 Issues 反馈，并附版本、设备型号、Android 版本与复现步骤，请勿公开口令或私人记录。

## 项目说明

此仓库提供红果 TV 正式安装包、版本更新、使用说明和界面截图。

**[立即免费下载红果 TV](https://hongguotv-egb.pages.dev/)** · [查看版本更新](https://github.com/ljl215186/hongguoTV-updates/releases) · [提交使用反馈](https://github.com/ljl215186/hongguoTV-updates/issues)
