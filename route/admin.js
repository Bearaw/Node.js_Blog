// 管理后台页面路由
const express = require('express');
const admin = express.Router();
admin.get('/',(req,res)=>{
    res.send('欢迎来到管理后台首页')
});
// 将路由对象作为模块成员导出
module.exports = admin;