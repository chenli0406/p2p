<?php
    require('conn.php');
    header('Content-Type:text/html;charset=utf-8;');
   //设置时区
	date_default_timezone_set("Asia/Shanghai");
 
    $regtime= date("Y-m-d H:i:s");
	//获取当前时间
    echo $regtime;

    
   // 进行数据的增删改查
   $username = $_POST['username'];
   $password = $_POST['password'];

   //sql语句
   
   $sql="INSERT INTO user_table(username,password,regtime) VALUES( '$username','$password','$regtime')";
   $data = mysqli_query($conn, $sql);
  
    if($data){
        //重定向跳转页面
        header("Location: http://localhost:3000/login.html");  
    //     }else{
    //     //登录失败
    //     header("Location: http://localhost:3000/register.html?iserror=iserror");  
     }
   
  
?>