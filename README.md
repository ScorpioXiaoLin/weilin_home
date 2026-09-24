# 演示工作台

一个可扩展的静态演示门户：左侧功能导航、右侧内容区加载各 demo、右上角明/暗主题切换（主题会联动到右侧 iframe 内的 demo）。

## 在线使用

启用 GitHub Pages 后访问：

- 工作台首页：https://scorpioxiaolin.github.io/weilin_home/

## 目录结构

```
weilin_home/
├─ index.html        # 工作台外壳（导航 / 主题切换 / iframe 加载）
├─ common.css        # 公共主题变量 + 基础样式（所有工具共享）
├─ common.js         # 公共主题联动脚本（接收外壳广播的明/暗主题）
└─ tools/            # 各工具页
   ├─ json.html      # JSON 解析 / 格式化 / 压缩 / 折叠展开 / 搜索高亮
   ├─ timestamp.html # 时间戳与日期互转（时区、单位、批量）
   ├─ imagegen.html  # 图片生成（画布尺寸/字号/位置预设与坐标、越界提示、批量打包 ZIP）
   ├─ regex.html     # 正则提取（提取/高亮/替换、表达式校验与生成、代码生成、速查表）
   ├─ random.html    # 随机字符串生成（字符类型、长度、排除相似字符、最近记录）
   └─ calculator.html# 用户关系链佣金计算器（自成一套样式，未接入 common.css）
```

## 如何新增一个 demo

比以前更省事：新工具无需再复制主题变量与主题脚本，只要引入两个公共文件即可。

1. 在 `tools/` 下新建页面（如 `tools/foo.html`），`<head>` 里引入公共样式，`</body>` 前引入公共脚本：

   ```html
   <!DOCTYPE html>
   <html lang="zh-CN" data-theme="dark">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Foo 工具</title>
     <link rel="stylesheet" href="../common.css" />
     <style>
       /* 只写本工具特有的样式；如需额外变量可再补一小段 :root 覆盖 */
     </style>
   </head>
   <body>
     <!-- 页面内容 -->
     <script>/* 工具逻辑 */</script>
     <script src="../common.js"></script>
   </body>
   </html>
   ```

2. 在 `index.html` 顶部的 `DEMOS` 数组里加一行（`file` 指向 `tools/` 下的文件）：

   ```js
   { id:'foo', title:'Foo 工具', desc:'...', icon:'🔧', file:'tools/foo.html', ready:true }
   ```

登记后会自动出现导航项与首页卡片，主题也会自动联动。可直接用 `common.css` 里定义的 CSS 变量（`--bg`/`--text`/`--accent`/`--border` 等）来写样式，保持视觉统一。
