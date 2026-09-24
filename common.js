/* 工具站公共脚本：接收工作台外壳(index.html)通过 postMessage 广播的主题，
   实现明/暗主题联动。所有 tools/ 下的工具页引入 <script src="../common.js"></script> 即可。 */
window.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'yb-theme') {
    document.documentElement.setAttribute('data-theme', e.data.theme === 'light' ? 'light' : 'dark');
  }
});
