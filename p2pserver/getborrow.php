<?php
	//获取借款列表
	include 'conn.php';
	include 'cross.php';
	header('Content-Type: text/html;charset=utf-8'); 


	//拼接sql语句
	$sql = "SELECT * FROM borrow";
	//执行sql语句
	$data = mysqli_query($conn,$sql);

	//不要使用mysqli_fetch_all因为格式不对！！需要手动循环获取数据
	$arr = [];
	while($row=mysqli_fetch_assoc($data)){
		array_push($arr, $row);
	}

	echo json_encode($arr);
?>