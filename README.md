# 演示工作台

一个可扩展的静态演示门户：左侧功能导航、右侧内容区加载各 demo、右上角明/暗主题切换（主题会联动到右侧 iframe 内的 demo）。

## 在线使用

启用 GitHub Pages 后访问：

- 工作台首页：https://scorpioxiaolin.github.io/weilin_home/
- 直达佣金计算器：https://scorpioxiaolin.github.io/weilin_home/#calculator

## 文件说明

- `index.html`：工作台外壳（导航 / 主题切换 / iframe 加载）
- `calculator.html`：用户关系链佣金计算器

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
