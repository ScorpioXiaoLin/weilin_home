# 演示工作台

一个可扩展的静态演示门户：左侧功能导航、右侧内容区加载各 demo、右上角明/暗主题切换（主题会联动到右侧 iframe 内的 demo）。

## 在线使用

启用 GitHub Pages 后访问：

- 工作台首页：https://scorpioxiaolin.github.io/weilin_home/
- 直达佣金计算器：https://scorpioxiaolin.github.io/weilin_home/#calculator

## 文件说明

- `index.html`：工作台外壳（导航 / 主题切换 / iframe 加载）
- `calculator.html`：用户关系链佣金计算器
- `json.html`：JSON 解析 / 格式化 / 压缩 / 折叠展开 / 搜索高亮
- `timestamp.html`：时间戳与日期互转（时区、单位、批量）
- `imagegen.html`：编号图片生成器（Canvas 绘制、预设字号、文字位置预设/坐标、越界提示、序列批量生成、打包 ZIP / 导出 PNG）
- `regex.html`：正则提取（提取 / 高亮 / 替换、表达式校验、常用表达式库、由示例反向生成正则）
- `random.html`：随机字符串生成（字符类型、长度、排除相似字符、自动生成、最近生成记录）

## 如何新增一个 demo

1. 把新的静态页放到本目录（如 `relation.html`）。
2. 在 `index.html` 顶部的 `DEMOS` 数组里加一项：

   ```js
   { id:'relation', title:'分销辅助测试工具', desc:'...', icon:'🔗', file:'relation.html', ready:true }
   ```

3. （可选，支持主题联动）在新页面加：
   - 一个亮色覆盖：`html[data-theme="light"]{ ... }`
   - 接收脚本：

     ```html
     <script>
     window.addEventListener('message', function(e){
       if (e.data && e.data.type === 'yb-theme') {
         document.documentElement.setAttribute('data-theme', e.data.theme === 'light' ? 'light' : 'dark');
       }
     });
     </script>
     ```

登记后会自动出现导航项与首页卡片。
