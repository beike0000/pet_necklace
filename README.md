# 智能宠物健康项圈 3D 演示

这是一个纯静态的 Three.js 交互展示项目，用于演示一体式智能宠物健康项圈的外观、C 型滑动开合、尺寸调节、内部结构分层和佩戴示例。

## 在线访问

本项目仓库：

```text
https://github.com/beike0000/pet_necklace
```

开启 GitHub Pages 后，队友直接打开下面这个链接即可查看 3D 演示：

```text
https://beike0000.github.io/pet_necklace/
```

如果链接暂时显示 404，通常是 Pages 还没有开启或还在部署，按下方“发布到 GitHub Pages”设置即可。

## 项目入口

- `index.html`：GitHub Pages 默认入口，会自动跳转到主 3D 页面。
- `pet-collar-3d.html`：主 3D 交互演示页面。
- `wearing-demo.html`：佩戴方式示例页面。
- `modules/internals.html`：内部结构分层查看页面。
- `modules/detail.html`：传感器/功能件详情页。
- `modules/data.js`：外观风格、传感器参数、尺寸逻辑等共享数据。
- `vendor/three/`：本地 Three.js 依赖，保证没有 CDN 网络时也能加载。
- `3D_eg_/`：产品调研、设计方案和工程尺寸文档。

## 本地预览

因为页面使用 ES modules，不建议直接双击 HTML。请在项目根目录启动本地服务：

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:5173/
```

## 发布到 GitHub Pages

1. 打开仓库 `https://github.com/beike0000/pet_necklace`。
2. 进入 `Settings` -> `Pages`。
3. `Build and deployment` 选择 `Deploy from a branch`。
4. `Branch` 选择 `main`，目录选择 `/ (root)`，点击 `Save`。
5. 等待 1-3 分钟，GitHub 会生成 Pages 链接：

```text
https://beike0000.github.io/pet_necklace/
```

如果之后继续更新项目，在本地项目目录执行：

```powershell
git add .
git commit -m "Update pet collar 3D demo"
git branch -M main
git push -u origin main
```

如果 GitHub 仓库里已有旧内容，并且确认要用当前项目覆盖远端内容，可以执行：

```powershell
git push --force-with-lease origin main
```

## 功能

- 一体式智能项圈 3D 展示。
- 52/54/56/58/60cm 快捷尺寸方案，默认 56cm / 60% 带宽。
- 底部 C 型滑动开合，闭合时只显示范围线和滑动标志。
- 触控按钮、充电触点、传感器均做成内置结构，表面只显示齐平位置图案。
- 内部结构分层查看：外层、结构层、开合层、适配层、FPC、芯片电池、贴肤传感。
- 截图导出和 GLB 模型导出。

## 上传前注意

`.gitignore` 已排除 `tmp_*.png`、日志和本地临时文件。上传时建议只提交源码、文档、参考图和 `vendor/three/` 依赖，不要提交验证截图。
