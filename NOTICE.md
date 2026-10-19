# 第三方许可与署名

本发行版由独立维护者提供。发行方声明已取得额外闭源分发授权；原项目及第三方组件的原始许可和署名仍保留。本文件不授予任何第三方内容版权。

原项目：N3urda/hongguoTV。内容协议与加密实现参考 [drpys，提交 22261ad](https://github.com/woshishiq1/drpys/tree/22261adfa31435e3b3ef5a730b8a2a75bcaf1715)，原始许可 GPL-3.0。衍生实现增加 Kotlin 移植、边界校验与本机流式解码。

| 组件 | 许可 |
|---|---|
| Kotlin、AndroidX Core、AndroidX Media3、ZXing、OkHttp / Okio | Apache-2.0 |
| Bouncy Castle、jsoup | MIT |
| Android desugar_jdk_libs | GPL-2.0 with Classpath Exception |

许可证与上游署名全文在 `licenses/`。本公开仓库不包含源码、发布私钥、后台口令或构建上传凭据。

默认正式包包含 Google IMA 3.40.0 适配及其运行依赖，使用须遵循 [IMA SDK 条款](https://developers.google.com/interactive-media-ads/terms) 和 [Google 隐私政策](https://policies.google.com/privacy)。广告总开关默认关闭，IMA 尚未开放生产展示。口袋、AdSet、芒果及百益按实际 SDK 与电视验收状态分别管理。
