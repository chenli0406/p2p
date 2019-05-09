<?php
	//引入跨域文件
	include 'cross.php';

	if(count($_SESSION) != 0){
		echo $_SESSION['username'];
	}else{
		echo '';
	}


	//当没有值时是[]   有值时是{}

	// echo  json_encode($_SESSION);

?>