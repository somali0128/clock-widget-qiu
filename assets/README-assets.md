# Assets 说明

## 字体

当前项目内置字体：

- `fonts/HollyBerryPop-PVxdZ.otf`
- 字体名称：Holly Berry Pop
- 来源：用户提供
- 用途：时间数字字体
- 授权：请以用户获取该字体时的授权条款为准

- `fonts/Fredoka-Variable.ttf`
- 字体名称：Fredoka
- 来源：Google Fonts / google/fonts
- 授权：SIL Open Font License 1.1，可免费商用、修改和再分发
- 官方页面：https://fonts.google.com/specimen/Fredoka
- 源码仓库：https://github.com/google/fonts/tree/main/ofl/fredoka

- `fonts/Baloo2-Variable.ttf`
- 字体名称：Baloo 2
- 来源：Google Fonts / google/fonts
- 授权：SIL Open Font License 1.1，可免费商用、修改和再分发
- 官方页面：https://fonts.google.com/specimen/Baloo+2
- 源码仓库：https://github.com/google/fonts/tree/main/ofl/baloo2

CSS 已通过 `@font-face` 引入以上字体，项目离线打开即可使用。其中 Holly Berry Pop 用于时间数字，Baloo 2 用作数字 fallback，Fredoka 用于日期和通用 fallback。

## 视觉资产

当前版本使用用户提供的拆分 PNG 素材进行分层组合：

- `images/background.png`：无数字、无狐狸耳朵、无前景狐狸的纯背景。
- `images/background (2).png`：半透明边框层，用于压住画面结构和增强边缘装饰。
- `images/ear_left.png`：左狐狸耳朵。
- `images/ear_right.png`：右狐狸耳朵。
- `images/fox_front.png`：前景蓝色睡觉狐狸。

时间、日期、轻微闪烁星光、耳朵浮动和狐狸呼吸动画仍由 HTML/CSS/JavaScript 实现，适合浏览器源透明叠加。
