// 项目入口主文件，app.js
// 引用express框架、创建网站服务器、监听端口
const express = require('express');
const app = express();
// 导入路由
const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home',home);
app.use('/admin',admin);
app.listen(80)
console.log('网站服务启动成功，当前端口是默认的80，请访问localhost');