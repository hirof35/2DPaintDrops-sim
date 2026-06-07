// app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// publicフォルダ内の静的ファイル（HTML, JS, 画像）を自動で配信する設定
app.use(express.static(path.join(__dirname, 'public')));

// サーバーの起動
app.listen(PORT, () => {
    console.log(`サーバーが起動しました！ http://localhost:${PORT} にアクセスしてください。`);
});