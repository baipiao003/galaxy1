const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>测试页面</title></head>
    <body>
      <h1>✅ 服务正常运行！</h1>
      <p>端口：${PORT}</p>
      <p>时间：${new Date().toLocaleString()}</p>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
================================
测试服务器在端口 ${PORT} 启动
================================
访问地址：http://0.0.0.0:${PORT}
  `);
});
