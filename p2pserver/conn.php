<?php

    // 连接数据库,mysqli_connect('主机', '用户', '密码','数据库',端口)
    $conn = mysqli_connect('127.0.0.1','root','123456789','p2p',3306) or die('Error');
    //mysql_query("set names 'utf8'");
    mysqli_set_charset($conn,"utf8");

    // 设置响应头
    header('Content-Type:text/html;charset=utf-8;');