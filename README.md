# 梦幻星空小狐狸时钟挂件

一个可本地运行、可作为 OBS / 直播姬 / VTube Studio 浏览器源导入的透明背景 HTML 时钟挂件。风格为浅蓝、薰衣草紫、深夜蓝星空、金色星星、云朵、气球字体数字和冰蓝白色睡觉小狐狸。

## 如何本地打开

直接双击 `index.html`，或在浏览器中打开：

```text
clock-widget/index.html
```

项目不需要后端、不依赖 CDN，打包成 zip 后也可以直接发送给别人使用。

## 如何导入 OBS / 直播姬 / VTube Studio

OBS：

1. 添加来源，选择“浏览器”。
2. 勾选“本地文件”。
3. 选择本项目的 `index.html`。
4. 宽度设置为 `900`，高度设置为 `600`。
5. 如需保持透明，请不要给浏览器源添加背景色滤镜。

直播姬：

1. 添加浏览器源或网页源。
2. 选择本地 HTML 文件，路径指向 `index.html`。
3. 尺寸设置为 `900 x 600`。
4. 确认背景透明选项开启，或不要启用网页背景填充。

VTube Studio：

1. 使用支持网页/浏览器叠加的方式导入本地 HTML。
2. 选择 `index.html`。
3. 推荐画布尺寸为 `900 x 600`。

## 推荐浏览器源尺寸

```text
900 x 600
```

默认设计尺寸是 `900 x 600px`，对应素材原始比例 `1536 x 1024`。如果必须使用较矮的直播区域，可以在 `css/style.css` 中调整 `--widget-scale`，或在 OBS 中等比缩放来源。

## 如何修改颜色、尺寸、字体

主题变量集中在 `css/style.css` 顶部的 `:root` 中：

```css
:root {
  --widget-width: 900px;
  --widget-height: 600px;
  --widget-scale: 1;
  --ice-blue: #dff8ff;
  --clear-blue: #8ddcff;
  --lavender: #c9abff;
  --violet: #7a55ff;
  --night-blue: #161064;
  --deep-blue: #080833;
  --gold: #ffd86f;
  --time-size: 104px;
  --date-size: 27px;
}
```

常用修改：

- 改整体大小：调整 `--widget-width`、`--widget-height` 或 `--widget-scale`。
- 改数字大小：调整 `--time-size`。
- 改日期大小：调整 `--date-size`。
- 改主题色：调整 `--ice-blue`、`--lavender`、`--violet`、`--night-blue`、`--gold` 等变量。
- 改动画速度：调整 `--float-speed`、`--sparkle-speed`、`--breath-speed`。

图片素材位于 `assets/images`，包括：

- `background.png`
- `ear_left.png`
- `ear_right.png`
- `fox_front.png`

四张图会按同一画布坐标叠放。字体文件位于 `assets/fonts`。当前使用用户提供的 `HollyBerryPop-PVxdZ.otf` 作为数字时钟字体，`Baloo2-Variable.ttf` 作为数字 fallback，`Fredoka-Variable.ttf` 作为日期和通用 fallback 字体。CSS 中已用 `@font-face` 引入。如需替换字体，把新的可用字体文件放入 `assets/fonts`，再修改 `css/style.css` 中的 `@font-face` 路径和字体名。

## 如何确认透明背景

项目的 `html` 和 `body` 都设置为：

```css
background: transparent;
```

确认方式：

1. 在 OBS 中把浏览器源放到其他画面上方。
2. 如果能看到下层画面，说明透明背景生效。
3. 如果出现黑底或白底，检查浏览器源是否开启了背景色、滤镜或平台自带网页背景填充。

## 时间显示说明

- 显示北京时间。
- 使用 `Asia/Shanghai` 时区。
- 时间格式：`HH:mm:ss`，24 小时制。
- 日期格式：`YYYY年MM月DD日 星期X`。
- 页面不会显示“北京时间”四个字。

## 字体来源和授权

本项目内置和使用以下字体：

Holly Berry Pop：

- 用途：时间数字字体
- 文件：`assets/fonts/HollyBerryPop-PVxdZ.otf`
- 来源：用户提供
- 授权：请以用户获取该字体时的授权条款为准

Google Fonts fallback：

Baloo 2：

- 用途：时间数字的圆润气球字体
- 来源：Google Fonts
- 授权：SIL Open Font License 1.1
- 可免费商用
- 官方页面：https://fonts.google.com/specimen/Baloo+2
- 源码仓库：https://github.com/google/fonts/tree/main/ofl/baloo2

Fredoka：

- 来源：Google Fonts
- 授权：SIL Open Font License 1.1
- 可免费商用
- 官方页面：https://fonts.google.com/specimen/Fredoka
- 源码仓库：https://github.com/google/fonts/tree/main/ofl/fredoka

授权细节可参考 Google Fonts 仓库中的 OFL 许可证说明。

## GitHub version control 建议

初始化 git：

```bash
git init
git add .
git commit -m "Initial star fox clock widget"
```

后续 commit message 示例：

```bash
git commit -m "Tune balloon number animation"
git commit -m "Add theme color variables"
git commit -m "Improve OBS transparent source notes"
```

后续版本规划：

- `v1.1.0`：增加更多配色主题，例如冰蓝、月紫、深夜蓝。
- `v1.2.0`：增加 12/24 小时制切换变量。
- `v1.3.0`：增加日期显示开关和秒数显示开关。
- `v1.4.0`：增加更多小狐狸睡姿或云朵装饰版本。
