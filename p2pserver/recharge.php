<?php
    require('conn.php');
    header('Content-Type:text/html;charset=utf-8;');

   //获取用户ID
	$id = $_SESSION["id"];
	$chargemoney = $_GET["amount"];//用户本次充值的金额
	$sql = "UPDATE user_table SET totalmoney=totalmoney+$chargemoney WHERE id=$id";
	$data = mysqli_query($conn, $sql);

	if($data){
        header("Location:http://localhost:3000/#/myself/personal");  
	}
  
?>