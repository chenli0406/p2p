<?php
	//获取借款列表
	include 'conn.php';
	include 'cross.php'; 

	//获取借款ID
	$borrowid = $_GET["borrowid"];

	//拼接sql语句
	$sql = "SELECT * FROM borrow WHERE id=$borrowid";
	//执行sql语句
	$data = mysqli_query($conn,$sql);

	//获取一条数据返回
	$row=mysqli_fetch_assoc($data);

	echo json_encode($row);
?>