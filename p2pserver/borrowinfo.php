<?php
	//获取借款列表
	include 'conn.php';
	include 'cross.php'; 


	//拼接sql语句
	$chargemoney = $_GET["chargemoney"];	//投资金额
	$borrowid = $_GET["borrowid"];	//借款订单ID
	$id = $_SESSION["id"];	//当前用户ID


	//真正后台还需要判断钱是否够
    //1. 先扣除用户身上的余额
    
	$sql = "UPDATE user_table SET totalmoney=totalmoney-$chargemoney WHERE id=$id";
	$data = mysqli_query($conn, $sql);


	if($data){
		//扣钱成功
		//2. 把钱加到借款订单中 ，注意！！！此处的id是借款订单的ID！！！！！！！
		$sql2 = "UPDATE borrow SET hasmoney=hasmoney+$chargemoney WHERE id=$borrowid";
		$data2 = mysqli_query($conn, $sql2);

		if($data2){
			//订单投资成功！！！！
			echo 'ok';

		}else{
			//订单投资失败！！！！
			echo '10002';
		}

	}else{
		//扣钱失败

		echo '10001';
	}


	

?>