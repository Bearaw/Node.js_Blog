// 前台页面路由
const express = require('express');
const home = express.Router();
home.get('/',(req,res)=>{
    res.send('欢迎来到博客首页')
});
// 将路由对象作为模块成员导出
module.exports=home;