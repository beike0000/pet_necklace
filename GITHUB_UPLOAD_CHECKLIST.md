# GitHub 上传清单

## 必须上传

- `index.html`
- `pet-collar-3d.html`
- `wearing-demo.html`
- `README.md`
- `.gitignore`
- `.nojekyll`
- `modules/`
- `vendor/`
- `3D_eg_/`
- `ref_internal.png`
- `ref_small.jpg`

## 不要上传

- `tmp_*.png`
- `tmp_*.jpg`
- `tmp_*.glb`
- `*.log`
- `node_modules/`
- `__pycache__/`

## 推荐发布方式

优先用 Git 命令或 GitHub Desktop 上传。这样 `.gitignore` 会自动过滤临时文件。

如果使用 GitHub 网页拖拽上传，请手动不要选择 `tmp_*.png` 和日志文件。

## 队友访问方式

GitHub Pages 开启后，把这个格式的链接发给队友：

```text
https://你的GitHub用户名.github.io/仓库名/
```

队友点开后会先进入 `index.html`，然后自动跳转到 `pet-collar-3d.html` 主展示页。
