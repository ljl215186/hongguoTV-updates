# 紅果 TV｜免費、免登入、免會員的 Android 電視短劇播放器

[简体中文](README.md) · [繁體中文](README.zh-TW.md) · [English](README.en.md)

<img src="screenshots/hongguo-logo.png" width="220" height="64" alt="紅果 TV 標識">

**免費追短劇，大屏看漫劇。無需登入，無需會員，拿起遙控器就能看。**

紅果 TV 是面向 Android 電視、電視盒子的免費短劇客戶端，支援真人短劇、漫劇、熱門排行榜和全庫搜尋。下載安裝後即可使用，無需註冊賬號、掃碼登入或開通 App 會員。大字海報、清晰焦點與全屏播放，讓大屏回到故事本身。

**[免費下載電視版 APK](https://hongguotv-egb.pages.dev/)** · [GitHub Releases 備用下載](https://github.com/ljl215186/hongguoTV-updates/releases/latest) · [反饋問題](https://github.com/ljl215186/hongguoTV-updates/issues)

Android 8.0+ · 當前正式版 0.9.40 · 遙控器操作 · 真人劇 / 漫劇

0.9.40 修復全庫搜尋失效，支援繼續翻頁；修復熱播榜、新劇榜每頁多出內容及跨頁名次錯位。保留本機片庫快照、異常還原、升級前儲存校驗及簡體中文、繁體中文、English 介面。已在 Android 9 指定裝置完成覆蓋安裝、搜尋三頁與榜單分頁檢查；這不代表所有電視型號均已驗收。請求自有服務時攜帶應用範圍裝置 ID、裝置型號、系統與 App 版本，裝置資訊不會傳送到第三方內容源。下方截圖來自 0.9.23，僅供介面參考。

**安裝導航：** [支援的電視品牌](#支援哪些電視品牌和電視盒子) · [各種電視盒子安裝教程](#tv-box-install) · [U 盤安裝圖解](INSTALL.md#usb-install) · [手機 / 電腦無線安裝](WIRELESS-INSTALL.md) · [按電視品牌檢視教程](INSTALL.md#brand-guides) · [安裝失敗排查](INSTALL.md#troubleshooting)

本專案僅供個人研究、學習與技術交流，為非官方客戶端；第三方作品和標識歸相應權利人所有。請在合法授權範圍內使用，“僅供學習研究”不表示取得內容授權。詳見 [免責宣告](DISCLAIMER.md)。

![紅果 TV 免費電視版：排行榜海報、四個頂部欄目與獨立搜尋入口](screenshots/discovery.png)

## 免費、免登入、免會員，開啟就能追劇

| 你關心的體驗 | 紅果 TV 的做法 |
|---|---|
| **免費使用** | 免費下載 APK，App 不設定付費解鎖和訂閱購買流程。 |
| **無需登入** | 不必註冊賬號，不用掃碼登入，開啟即可瀏覽和播放。 |
| **無需會員** | 不需要購買 App 會員，選中作品即可進入觀看。 |
| **專注大屏觀看** | 全屏播放，控制層按需出現，常用操作透過透明浮層完成。 |
| **操作人性化** | 大字海報、清晰焦點、透明浮層，只用方向鍵、OK 和返回鍵就能完成常用操作。 |
| **連貫看劇** | 下一集預載入、自動連播、斷點續播，讓選劇、播放和繼續觀看更順手。 |

## 為電視遙控器設計的四個入口

- **推薦**：全屏有聲預覽，上下切換作品，OK 看全集；返回可喚出透明導航。
- **找劇**：推薦榜、熱播榜、臻果榜、預約榜、新劇榜、熱搜榜、追更榜、必看榜、收藏榜，配合真人劇 / 漫劇及題材篩選。
- **我的**：接著看、收藏、稍後看集中管理，觀看進度儲存在本機。
- **設定**：清晰度、倍速、畫面模式、自動連播、備份恢復和應用更新，按自己的習慣調整。

搜尋同時查詢真人劇和漫劇，支援透過下方“上一頁 / 下一頁”繼續瀏覽，跨頁排除重複作品。到達末頁會提示並留在當前頁，載入失敗也不會跳到空白頁。支援電視輸入法；裝置具備系統語音能力時，也可以使用語音輸入。

## 簡體中文、繁體中文與 English

**0.9.35 起的正式版**在 **設定 → 語言 / Language** 提供 **簡體中文、繁體中文、English**。選擇後介面重新載入並回到語言設定，重開 App 保留選擇；不改變電視系統的語言。

導航、榜單和常用篩選標籤、搜尋提示、播放控制、設定、備份提示及更新彈窗均提供三種語言。劇名、作品簡介、字幕、使用者輸入和服務端釋出說明保留原文；切換語言不會翻譯影片內容，也不會改變收藏、觀看進度、搜尋範圍或片庫型別。語言選擇儲存在當前裝置，不隨片單備份覆蓋。

**釋出狀態：** 0.9.40 已透過 GitHub Releases 與 CF / R2 正式釋出，可直接下載或在應用內檢查更新。下方舊版截圖不代表新版介面的實機驗收。

## 介面實拍：從找劇到播放

以下 **12 張截圖來自 0.9.23 的實際執行**，展示推薦、找劇、搜尋、播放、選集與收藏。主要截圖為 1080p，大字型示例為 720p；片單和觀看記錄來自當時的測試。

| 全屏推薦與底部浮窗 | 推薦頁的透明導航 |
|---|---|
| ![紅果 TV 全屏推薦：有聲預覽、上下換劇、OK 看全集](screenshots/recommendation-panel.png) | ![紅果 TV 透明頂部導航：推薦、找劇、我的、設定](screenshots/recommendation.png) |

| 真人劇與漫劇分類篩選 | 全庫搜尋與麥克風入口 |
|---|---|
| ![紅果 TV 漫劇篩選：題材、時代背景、角色設定和畫風](screenshots/filters-comic.png) | ![紅果 TV 搜尋修仙關鍵詞：同時查詢真人劇與漫劇](screenshots/search-results.png) |

| 全屏播放 | 播放進度與遙控器提示 |
|---|---|
| ![紅果 TV 短劇全屏播放介面，控制層按需顯示](screenshots/playback-fullscreen.png) | ![紅果 TV 播放控制：暫停、快進快退、選集和返回](screenshots/playback-controls.png) |

| 分組快速選集 | 播放設定浮層 |
|---|---|
| ![紅果 TV 遙控器選集：集數分組與跳轉集數](screenshots/episodes.png) | ![紅果 TV 播放設定：倍速、清晰度、畫面模式和定時停止](screenshots/playback-settings.png) |

| 接著看與收藏狀態 | 更多播放操作 |
|---|---|
| ![紅果 TV 我的頁面：儲存第 2 集觀看位置，並顯示已收藏狀態](screenshots/library.png) | ![紅果 TV 更多操作：收藏本劇、上一集、下一集與播放設定](screenshots/playback-options.png) |

### 大字型自動切換四列海報

![紅果 TV 720p 大字型介面：四列完整豎版海報、藍色獨立搜尋入口和緊湊導航](screenshots/discovery-large-font.png)

0.9.23 已在指定的 Android 9 / x86_64 測試環境重新安裝並檢查，覆蓋 1080p、720p 和 1.3 倍字型；核心測試 187 項、後臺測試 24 項透過。實際完成了推薦切換、漫劇播放、暫停快進、選集、收藏、全庫搜尋和版本檢查；這些結果不代表每個品牌電視均已實機驗收，真實電視語音能力仍需按裝置確認。

## 播放順手，連播更流暢

紅果 TV 使用原生介面和播放器，提供下一集預載入、自動連播與斷點續播。開啟作品後直接觀看，控制層按需顯示；想調整清晰度、倍速或選集時，再用遙控器喚出浮層。

| 場景 | 遙控器操作 |
|---|---|
| 頂部欄目 | ← / → 移動即切換頁面，OK 或 ↓ 進入內容。 |
| 推薦全屏觀看 | ↑ / ↓ 上一部 / 下一部推薦，OK 看全集；← / → 或選單鍵顯示底部控制層。 |
| 正劇全屏觀看 | ↑ / ↓ 本劇上一集 / 下一集，OK 暫停 / 繼續；← / → 或選單鍵顯示底部控制層。 |
| 播放控制層 | 首次左右只顯示，不改變進度。App 圖示滑塊放大表示進度條聚焦，此時左右快退 / 快進，上下選擇操作；按鈕上左右移動焦點、OK 執行。 |
| 選單與浮層 | 在選單內方向鍵只操作當前選單。返回依次收起子選單、控制層，再返回來源頁面；從正劇回到推薦時自動顯示頂部透明導航並聚焦“推薦”。 |
| 搜尋與榜單分頁 | 選擇“上一頁 / 下一頁”並按 OK；翻頁後焦點保留在原按鈕，末頁繼續點選只提示，不空翻頁。 |

流暢度會受電視效能、家庭網路和內容源狀態影響。若遇到緩衝，可降低清晰度、檢查 Wi-Fi 或重試播放。

## 支援哪些電視品牌和電視盒子

適用於 **Android 8.0（API 26）及以上、允許安裝本地 APK** 的電視和電視盒子。可按下表查詢小米、海信、TCL、創維等品牌的安裝方法；品牌名稱不等於全系相容，具體還取決於型號、地區、系統版本與安裝許可權。

| 電視品牌 / 裝置 | 適用範圍與安裝教程 |
|---|---|
| **小米 / Redmi 電視、小米盒子** | 符合系統要求的機型，可透過電視管家或高畫質播放器安裝。[檢視教程](INSTALL.md#xiaomi) |
| **海信 / Vidda** | 僅適用於符合要求且允許 APK 安裝的 Android 機型；VIDAA / Roku 系統不適用。[檢視教程](INSTALL.md#hisense) |
| **TCL / 雷鳥** | Android / Google TV 或相容 Android APK 的機型；TCL 海外說明不能直接套用全部國內韌體。[檢視教程](INSTALL.md#tcl) |
| **創維 / 酷開** | 需確認 Android 版本及本地安裝許可權；部分韌體限制第三方安裝。[檢視教程](INSTALL.md#skyworth) |
| **長虹 / CHiQ** | 符合要求的 Android 機型，按本機檔案工具與安裝器操作。[檢視教程](INSTALL.md#changhong) |
| **康佳** | 符合要求且開放本地 APK 安裝的 Android 機型。[檢視教程](INSTALL.md#konka) |
| **海爾 / 卡薩帝** | 需核對具體型號的系統版本、USB 檔案瀏覽和安裝許可權。[檢視教程](INSTALL.md#haier) |
| **索尼 BRAVIA** | Android TV / Google TV 機型；非 Android 老機型不適用。[檢視教程](INSTALL.md#sony) |
| **飛利浦 / 夏普** | 僅適用於符合要求的 Android TV / Google TV 機型。[檢視教程](INSTALL.md#philips-sharp) |
| **榮耀智慧屏 / 華為智慧屏** | 部分型號提供第三方安裝入口，但本 App 相容性仍需核驗，暫不列為已驗證支援。[檢視說明](INSTALL.md#smart-screen) |
| **Android 電視盒子 / 電視棒** | 小米、當貝、騰訊極光、天貓魔盒、芝杜、海美迪及海外 Android TV 裝置，逐型號核對系統與安裝許可權。[盒子分品牌教程](#tv-box-install) |
| **Android 投影儀** | 符合 Android 8.0+、APK 安裝及遙控器要求時可嘗試。[檢視教程](INSTALL.md#android-box) |

上述為**安裝條件與教程索引，不是逐品牌實機認證名單**。目前完成 Android 9 指定測試裝置驗證，尚未完成這些品牌全部機型的實機驗收。三星 Tizen、LG webOS、VIDAA、Roku、Titan OS 等非 Android 系統不能直接執行本 APK，可在外接相容 Android 盒子上安裝。系統差異與廠商來源見 [完整安裝指南](INSTALL.md#compatibility)。

<a id="tv-box-install"></a>
## 電視盒子安裝教程：小米、當貝、騰訊極光、天貓魔盒等

**盒子接在哪個 HDMI 介面，就把電視切到對應訊號源，再使用盒子遙控器安裝。** 軟體裝在盒子內，與電視品牌無關；電視僅需能顯示盒子的 HDMI 畫面。先在盒子的 **設定 → 關於 / 裝置資訊** 核對實際 Android 版本，需 **Android 8.0（API 26）及以上**，並允許安裝本地 APK。

| 裝置 | 優先方法 | 教程 |
|---|---|---|
| 小米盒子、Xiaomi TV Box S / Mi Box S | U 盤；海外版可無線傳輸 | [小米盒子](#box-xiaomi) |
| 當貝盒子 | U 盤；已有工具遠端推送 | [當貝盒子](#box-dangbei) |
| 騰訊極光 / 創維盒子 | 本機檔案工具開啟 U 盤 APK | [騰訊極光 / 創維](#box-tencent) |
| 天貓魔盒 | 先核對系統，再用本機安裝入口 | [天貓魔盒](#box-tmall) |
| 芝杜、海美迪 | 檔案管理開啟 U 盤 APK | [芝杜 / 海美迪](#box-zidoo-himedia) |
| NVIDIA SHIELD TV / Pro | 無線傳輸；Pro 可用 U 盤 | [SHIELD](#box-shield) |
| Google TV Streamer、Chromecast with Google TV、onn. Google TV | Send Files to TV / Downloader | [Google TV 裝置](#box-google-tv) |
| Amazon Fire TV Stick / Cube | 支援安裝 APK 的 Fire OS 機型用 Downloader | [Fire TV](#box-fire-tv) |
| 通用 Android 盒子、運營商盒子 | 開放安裝的 Android 8.0+ 韌體按通用步驟 | [其他盒子](#box-generic) |

### 安裝前準備：只下載 APK，不解壓

1. 開啟 **[紅果 TV 免費下載頁](https://hongguotv-egb.pages.dev/)**，儲存正式版 `.apk` 檔案；GitHub 下載時選擇 APK 附件，不選 Source code。
2. 有 USB 介面：把 APK 複製到 U 盤根目錄，插入**盒子**的 USB 介面，再使用盒子的檔案工具開啟。檔案工具只顯示影片時，切到“全部檔案 / 安裝包”。
3. 沒有 USB 介面：盒子與手機 / 電腦連線同一區域網，按下方品牌教程選擇檔案傳輸或直接下載。
4. 開啟 APK 後，若系統詢問許可權，允許**當前檔案工具 / 下載工具**安裝未知應用，再返回安裝器確認安裝。許可權入口隨韌體不同，以本機提示為準；詳見 [Android TV 官方應用安全說明](https://support.google.com/androidtv/answer/12188351?hl=zh-Hans)。
5. 安裝完成，從盒子的“我的應用 / 全部應用”開啟 **紅果 TV**，無需登入或購買會員。

![電視盒子 U 盤安裝六步示意：下載 APK、複製、插入盒子、開啟檔案工具、授權與安裝](screenshots/install-usb-steps.png)

圖為通用操作示意，不是各品牌系統實拍。沒有 U 盤可檢視 [無線安裝方式圖解](WIRELESS-INSTALL.md#choose)。

<a id="box-xiaomi"></a>
### 小米盒子、Xiaomi TV Box S / Mi Box S

**國內小米盒子，有 U 盤時：**

1. 插入裝有 APK 的 U 盤；出現提示時開啟 U 盤。
2. 沒有彈窗時，在應用列表找 **電視管家 / 電視管理器 → U 盤安裝包**，或進入 **高畫質播放器** 瀏覽 U 盤。
3. 選中紅果 TV 的 APK，按 OK，按系統提示授權並安裝；選單名稱以型號與韌體為準。[小米官方電視與盒子安裝說明](https://www.mi.com/tw/support/article/KA-17660/)、[小米官方高畫質播放器圖文說明](https://www.mi.com/service/mitv/player)

**海外 Xiaomi TV Box S / Mi Box S：** 若沒有預裝 APK 檔案工具，先從本機應用商店獲取支援 APK 的檔案管理器，再開啟 U 盤安裝；也可在盒子與 Android 手機安裝 Send Files to TV，盒子選 **Receive**、手機選 **Send**，傳送 APK 後開啟安裝。詳細步驟見 [Send Files to TV 圖文教程](WIRELESS-INSTALL.md#sfttv)。國內外韌體入口不同，不直接套用選單；較老小米盒子需先確認系統達到 Android 8.0。[小米盒子官方常見問題](https://www.mi.com/tw/mibox/)

<a id="box-dangbei"></a>
### 當貝盒子

1. 下載正式 APK 放入 U 盤，插入當貝盒子。
2. 在 U 盤提示或檔案管理中瀏覽安裝檔案，選中 APK，按 OK 確認安裝；若有安裝許可權提示，按提示為當前工具授權。[當貝官方 U 盤安裝說明](https://sp.dangbei.com/cn/117.html)
3. 無 U 盤且盒子已有**當貝市場 / 電視應用管家**時，可找“遠端推送 / 遠端安裝”，在同網手機或電腦瀏覽器輸入盒子顯示的地址，上傳 APK，再在盒子確認安裝。僅在工具實際提供該入口時使用，見 [當貝遠端安裝圖文教程](WIRELESS-INSTALL.md#dangbei) 與 [當貝官方工具說明](https://www.dangbei.com/apps/)。

當貝不同代際盒子的系統版本不相同，按本機 Android 版本判斷；不需要為了安裝紅果 TV 更換預設桌面。

<a id="box-tencent"></a>
### 騰訊極光盒子 / 創維盒子

以下為**開放 APK 安裝機型的通用流程**；尚未找到可覆蓋各型號的當前廠商統一安裝選單說明。

1. 在盒子設定檢視型號和 Android 版本，符合要求後，把 APK 放入 U 盤並插入盒子。
2. 進入本機“檔案管理 / 媒體中心 / U 盤”等實際提供的檔案入口，切到全部檔案或安裝包，選擇 APK。
3. 按系統提示為當前檔案工具授權並安裝；如果已有支援傳 APK 的區域網工具，也可使用 [無線檔案傳輸](WIRELESS-INSTALL.md)。

極光與創維盒子存在不同型號和定製韌體；如只能瀏覽影音檔案或提示禁止安裝，先向型號售後確認開放安裝方式，不把系統升級入口當成 APK 安裝入口。

<a id="box-tmall"></a>
### 天貓魔盒

1. 先在設定中確認**實際 Android 版本**及本地 APK 安裝能力；僅顯示 YunOS 等系統名稱時，不能據此判斷滿足 Android 8.0。
2. 對符合條件的機型，把 APK 放到 U 盤根目錄，插入魔盒；在本機提供的檔案工具中找到 APK，按系統安裝器提示安裝。
3. 沒有可用 U 盤入口、但已有遠端推送工具時，可按 [瀏覽器上傳流程](WIRELESS-INSTALL.md#builtin-transfer) 傳送；工具需先能在盒子使用。

本段為條件式通用流程，未核實天貓魔盒各型號的統一選單路徑。舊款和限制本地安裝的韌體不列為已支援，不透過修改 APK 字尾嘗試繞過限制。

<a id="box-zidoo-himedia"></a>
### 芝杜 ZIDOO、海美迪播放器 / 盒子

1. 先在裝置設定核對 Android 8.0+，再把 APK 放入 U 盤插入播放器。
2. 開啟本機檔案管理器，選擇 U 盤及 APK，呼叫系統安裝器安裝；應用安裝完成後到全部應用中啟動紅果 TV。
3. 芝杜的按型號圖文可從 [芝杜官方支援中心](https://www.zidoo.tv/Support/faq.html?l=zh-cn) 找“**芝杜安裝第三方軟體教程**”；海美迪可從 [官方服務中心](https://www.himedia.cn/support) 找“**海美迪電視盒怎樣安裝第三方軟體**”。具體介面以對應型號教程為準。

**舊款播放器尤其要先查系統。** 例如海美迪官方列出的 Q5 四代 Android 5.1 / 7.0 均未達到本 App 的最低要求，不能僅因能安裝其他 APK 就認定支援紅果 TV。[海美迪官方舊型號系統說明](https://www.himedia.cn/newsinfo/2078172.html)

<a id="box-shield"></a>
### NVIDIA SHIELD TV / SHIELD TV Pro

1. 在系統設定確認 Android 版本，使用本機商店中可用的 APK 檔案工具，或透過 [Send Files to TV](WIRELESS-INSTALL.md#sfttv) 從 Android 手機傳送安裝包。
2. **SHIELD TV Pro 有 USB 介面的機型**可插 U 盤，再從檔案工具開啟 APK；不要把有無 USB 的不同型號混用教程。
3. Pro 還可按官方手冊進入 **Settings → Device Preferences → Storage → Transfer files over local network**，使用盒子顯示的地址與憑據從電腦複製 APK，再由盒子上的檔案工具開啟安裝。只傳檔案不會自動安裝。[NVIDIA 官方 SHIELD TV Pro 使用者指南](https://www.nvidia.com/en-us/shield/support/shield-tv-pro/)

<a id="box-google-tv"></a>
### Google TV Streamer、Chromecast with Google TV、onn. Google TV

以下針對**有獨立應用介面、可安裝應用的 Android TV / Google TV 裝置**，按本機 Android 版本和安裝許可權判斷。

1. **Android 手機傳輸：** 兩端從各自商店安裝 Send Files to TV；電視端選 **Receive**，手機端選 **Send**，選擇 APK 和目標裝置，接收後開啟 APK 安裝。[工具開發者的 Google Play 頁面](https://play.google.com/store/apps/details?id=com.yablio.sendfilestotv&hl=zh)
2. **直接下載：** 本機商店提供 Downloader 時，安裝後輸入完整地址 **`https://hongguotv-egb.pages.dev/`**，進入頁面下載 APK，再按提示允許該工具安裝應用。[Downloader 開發者說明](https://www.aftvnews.com/downloader/)
3. 安裝後從應用列表開啟；未出現圖示時，可在系統設定的已安裝應用中查詢並啟動。

無線傳輸不需要另買 U 盤轉接裝置。Google TV Streamer 的 USB-C 為電源 / 資料介面，並非普通 USB-A 插口；舊款**僅投屏的 Chromecast**不適用本安裝教程。[Google TV Streamer 官方規格](https://store.google.com/product/google_tv_streamer_specs?hl=en-US)

<a id="box-fire-tv"></a>
### Amazon Fire TV Stick / Fire TV Cube

**先核對作業系統。** 僅適用於支援 Android APK 且達到 API 26 的 Fire OS 裝置，例如 Fire OS 7（Android 9）和 Fire OS 8；Fire OS 5 / 6 低於最低要求。採用 **Vega OS** 的 Fire TV 不適用 Android APK，不能僅憑“Fire TV”名稱判斷。[Amazon 官方系統與機型對照](https://developer.amazon.com/docs/fire-tv/fire-os-overview.html)

1. 從本機 Amazon Appstore 獲取 **Downloader by AFTVnews**，開啟後輸入 **`https://hongguotv-egb.pages.dev/`**，下載正式 APK。[Downloader 開發者說明](https://www.aftvnews.com/downloader/)
2. 系統提示時，在 **Settings → My Fire TV → Developer Options → Install unknown apps** 為 Downloader 允許安裝，再返回開啟 APK。若當前 Fire OS 隱藏開發者選項，可進入 **My Fire TV → About**，在裝置名稱上連續按 OK 約 7 次，返回上一層檢視；路徑隨韌體變化。[Downloader 開發者的設定圖文](https://www.aftvnews.com/how-to-find-show-unhide-reveal-developer-options-on-an-amazon-fire-tv-stick-fire-tv-cube-or-fire-tv-smart-tv/)
3. 安裝後在應用列表啟動。列表暫未顯示時，進入 **Settings → Applications → Manage Installed Applications → 紅果 TV → Launch application**。[Amazon 官方側載應用啟動說明](https://www.developer.amazon.com/docs/fire-tv/installing-and-running-your-app.html)

<a id="box-generic"></a>
### 通用 Android 盒子與運營商定製盒子

**通用 Android 盒子：** 包括採用 Amlogic / Rockchip 等晶片的產品，晶片名稱不代表系統版本。確認 Android 8.0+ 後，U 盤插入盒子 → 檔案管理 → 全部檔案 / APK → 開啟安裝包 → 按提示授權安裝；無 USB 時使用 [同網無線安裝](WIRELESS-INSTALL.md)。

**中國移動魔百和 / 咪咕、中國電信天翼高畫質、中國聯通 IPTV 等：** 僅在當前韌體已開放 Android APK 安裝、系統版本達標時採用上述步驟。運營商定製盒子可能限制安裝；沒有入口時先問運營商，不提供刷機、工廠模式或繞過限制教程。

Apple TV（tvOS）、Roku、Vega OS 等非 Android 裝置不能直接裝本 APK。安裝失敗先看 [排查表](INSTALL.md#troubleshooting)，不要反覆下載不匹配系統的安裝包。

盒子教程資料補充核對日期：**2026-10-22**。上述為安裝方法與相容條件，尚未完成逐品牌實機驗收。安裝後應用內更新方式見 [設定 → 版本與更新](INSTALL.md#updates)。

## 免費下載與安裝 Android TV APK

![紅果 TV 電視 APK 安裝圖解：下載、複製到 U 盤、選擇安裝包、授權、安裝及啟動](screenshots/install-usb-steps.png)

上圖為操作示意，不是各品牌系統實拍。詳細步驟與官方說明見 **[安卓電視安裝圖文教程](INSTALL.md)**。

**沒有 U 盤也能安裝：** 電視自帶傳檔案、品牌手機助手、當貝遠端安裝、Send Files to TV、電視直接下載等方法，見 [無線安裝圖文教程](WIRELESS-INSTALL.md)。iPhone 使用者可優先檢視 [瀏覽器上傳方案](WIRELESS-INSTALL.md#iphone)；普通映象 / 影片投屏不等於傳 APK 安裝。

1. 開啟 **[紅果 TV 下載頁](https://hongguotv-egb.pages.dev/)**，下載帶版本號的正式 APK；也可從 [GitHub Releases](https://github.com/ljl215186/hongguoTV-updates/releases/latest) 下載。
2. 將 APK 放入 U 盤根目錄，插入電視 / 盒子 USB 介面；沒有 USB 介面時，可使用裝置支援的區域網檔案傳輸工具。
3. 使用支援 APK 的檔案工具開啟安裝包，在系統安裝器確認安裝；首次安裝按提示允許**當前檔案工具**安裝未知來源應用。
4. 開啟紅果 TV，無需登入或購買會員，進入推薦或找劇即可開始觀看。

檔名示例：`hongguotv-0.9.40-release.apk`。下載 Release 的 APK 附件，不下載 `Source code (zip)` 或 `Source code (tar.gz)`；APK 不需要解壓。首次下載直接安裝，安裝後可在 **設定 → 版本與更新** 獲取後續同包名正式版。

## 常見問題

### 紅果 TV 真的免費嗎？需要登入或會員嗎？

App 免費提供，不設定賬號註冊、會員購買和付費解鎖流程。收藏及觀看進度存放在本機；作品是否可播放取決於內容源的實際狀態。

### 支援短劇、漫劇和全庫搜尋嗎？

支援真人短劇與漫劇，可透過排行榜、分類篩選或關鍵詞查詢。漫劇還可按畫風篩選。搜尋不受當前榜單型別限制。

### 可以在應用內更新嗎？

可以從 **設定 → 版本與更新** 檢查、下載新版，再由 Android 系統確認安裝。也會在前臺空閒時檢查更新；播放中不打擾。關閉自動下載仍可收到升級提示。

### 收藏和觀看進度如何儲存？

正式包名為 `com.hongguo.tv`。收藏、觀看進度與設定儲存在本應用的獨立目錄，不需要賬號。以後同包名、同正式簽名的版本可覆蓋升級並保留記錄；需要換裝置時，可在 **設定 → 手機備份與恢復** 匯出和匯入 JSON。

### 如何反饋使用問題？

請透過本倉庫 Issues 反饋，並附版本、裝置型號、Android 版本與復現步驟，請勿公開口令或私人記錄。

## 專案說明

此倉庫提供紅果 TV 正式安裝包、版本更新、使用說明和介面截圖。

**[立即免費下載紅果 TV](https://hongguotv-egb.pages.dev/)** · [檢視版本更新](https://github.com/ljl215186/hongguoTV-updates/releases) · [提交使用反饋](https://github.com/ljl215186/hongguoTV-updates/issues)
