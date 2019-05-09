<?php
	// 1. 连接数据库
	// 2. 执行sql
	// 3. 拿到数据，响应

	require('conn.php');//连接数据库


	$nickname = $_GET['nickname'];
	$sex = $_GET['sex'];
	$email = $_GET['email'];
	$phone = $_GET['phone'];
	$education = $_GET['education'];
	$id = $_SESSION['id'];


	//2. 执行sql语句
	$sql = "UPDATE user_table SET nickname='$nickname',sex='$sex',email='$email',phone=$phone,education='$education' WHERE id=$id";
	$data = mysqli_query($conn, $sql);
	if($data){
		//3. 语句执行成功！进行页面跳转（服务器重定向）
		header("Location: http://localhost:3000/#/myself");  
	}