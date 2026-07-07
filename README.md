# Clock Widget Qiu

一个透明背景的直播数字时钟挂件，可作为 OBS、直播姬、VTube Studio 的浏览器源使用。

## 项目介绍（它解决什么问题）

直播画面里经常需要一个好看的时间挂件，但很多时钟要么不够可爱，要么不能透明叠加，要么改素材很麻烦。

Clock Widget Qiu 的思路是：用图片素材负责整体风格，用 HTML 文本负责实时显示时间。你可以替换背景、字体、小狐狸和颜色，把它改成自己的直播间主题。

特点：

- 透明背景，适合直播叠加。
- 纯前端实现，下载后可离线使用。
- 支持通过 `setting.json` 调整时间、日期、周几显示。
- 默认是梦幻星空 + 蓝白小狐狸风格。

## 截图 / GIF 演示

![Clock Widget Qiu Preview](./preview.png)

推荐浏览器源尺寸：

```text
900 x 600
```

## 安装方式

下载 ZIP：

1. 打开 GitHub 项目页。
2. 点击 `Code`。
3. 选择 `Download ZIP`。
4. 解压整个文件夹。
5. 在直播软件里选择 `index.html` 作为浏览器源。

使用 Git：

```bash
git clone https://github.com/somali0128/clock-widget-qiu.git
cd clock-widget-qiu
```

新手导入步骤可以看：

```text
使用说明.txt
```

## 使用示例

配置文件：

```text
setting.json
```

常用修改：

```json
{
  "time": {
    "showHour": true,
    "showMinute": true,
    "showSecond": false
  },
  "date": {
    "showDate": true,
    "showYear": false,
    "showWeekday": true
  }
}
```

想显示秒，把 `showSecond` 改成 `true`。

想隐藏日期，把 `showDate` 改成 `false`。

改完后刷新浏览器源即可。

## Roadmap

- 增加更多主题模板。
- 增加可视化设置面板。
- 增加 12 小时制 / 24 小时制切换。
- 增加更多日期格式和字体搭配。
- 增加动画强度选项。

## FAQ

### 需要联网吗？

不需要。完整下载项目后可以离线运行。

### 为什么直播里有黑底或白底？

页面本身是透明背景。请检查直播软件的浏览器源背景设置，确保没有额外填充颜色。

### 可以换成自己的素材吗？

可以。主要替换 `assets/images/` 里的图片，再根据需要调整 `css/style.css`。

### 可以只发 `index.html` 给别人吗？

不建议。图片、字体、脚本和设置文件都在其他文件夹里，请把整个项目文件夹一起打包。

## ⭐ 如果喜欢，请 Star

如果这个小挂件帮到了你，欢迎给项目点一个 Star。它会让我知道这个项目值得继续更新。

## ☕ Buy Me a Coffee

<a href="https://www.buymeacoffee.com/somayue" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

代码部分可以作为直播数字时钟挂件模板继续修改和二次创作。

图片素材和 `HollyBerryPop-PVxdZ.otf` 字体来自用户提供，请按照你获取素材时的授权范围使用。
