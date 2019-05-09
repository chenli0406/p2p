<?php 
	
	require('conn.php');//连接数据库
	include 'cross.php';	//跨域


	// 2. 获取前端数据，拼接sql，执行sql语句
	$id = $_SESSION['id'];
	$sql = "SELECT nickname,totalmoney,username,usablemoney,lastlogintime,blockedmoney FROM user_table WHERE id='$id'";
	$data = mysqli_query($conn, $sql);

	//3. 获取返回结果中的第一条数据
	$obj = mysqli_fetch_assoc($data);
	echo json_encode($obj);
	
?>