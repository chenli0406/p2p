<?php

      require('conn.php');//连接数据库


	$userid = $_SESSION['nickname'];	//昵称
	$borrowmoney = $_GET['borrowmoney'];	//借款金额
	$interest = $_GET['interest'];	//借款年利率
	$minbid = $_GET['minbid'];		//最小投标
	$days = $_GET['days'];			//招标天数（在网站上挂多少天）
	$title = $_GET['title'];		//借款标题
	$info = $_GET['info'];			//借款描述
	$borrowtime = $_GET['borrowtime'];	//借款期限 单位：月
	$repaytype = $_GET['repaytype'];	//还款方式 0：按月分期 1：按月到期

	//拼接sql语句
	$sql = "INSERT INTO borrow(userid,borrowmoney,interest,minbid,days,title,info,borrowtime,repaytype) VALUES('$userid','$borrowmoney','$interest','$minbid','$days','$title','$info','$borrowtime','$repaytype')";
	//执行sql语句
	$data = mysqli_query($conn,$sql );
	if($data){
		//语句执行成功，重定向到投资页面
		header("Location: http://localhost:3000/#/invest");  
	}


?>

