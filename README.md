# 梦幻星空小狐狸时钟挂件

这是一个适合直播间叠加使用的小狐狸星空时钟。它可以显示北京时间，背景透明，可以放进直播姬、OBS 或 VTube Studio 里当浏览器源使用。

画面由星空云朵、狐狸耳朵和睡觉小狐狸组成，时间和日期会自动更新。整体偏可爱、梦幻、蓝紫色系。

## 你会用到哪些文件

- `index.html`：时钟本体，导入直播软件时选它。
- `setting.json`：改时间和日期显示方式。
- `使用说明.txt`：给新手看的导入步骤。
- `preview.png`：当前效果预览。

## 推荐尺寸

直播软件里的浏览器源建议设置为：

```text
900 x 600
```

如果你想缩小，可以在直播软件里直接缩放这个浏览器源。

## 怎么改显示内容

打开 `setting.json` 就能改。保存后，刷新浏览器源即可生效。

常用开关：

- `showSecond`：是否显示秒。
- `showDate`：是否显示日期。
- `showYear`：是否显示年份。
- `showWeekday`：是否显示周几。
- `weekdayStyle`：`short` 是“周一”，`long` 是“星期一”。

例子：想显示 `04:30:08`，把 `showSecond` 改成 `true`。

例子：不想显示日期，把 `showDate` 和 `showWeekday` 都改成 `false`。

## 字体和素材

数字字体使用 `HollyBerryPop-PVxdZ.otf`。图片素材在 `assets/images` 文件夹里。

`Baloo 2` 和 `Fredoka` 是备用字体，来自 Google Fonts，授权为 SIL Open Font License 1.1。`HollyBerryPop-PVxdZ.otf` 是用户提供字体，授权请以你获取该字体时的说明为准。

## 透明背景

页面本身是透明背景。放进直播画面后，时钟外面的空白区域会透出下面的画面。

如果你看到黑底或白底，通常是直播软件的浏览器源背景设置造成的，可以检查是否开启了背景填充。

## 项目地址

GitHub：

```text
https://github.com/somali0128/clock-widget-qiu
```
