<?php
   require('conn.php');
   header('Content-Type:text/html;charset=utf-8;');

   // 进行数据的增删改查
   $username = $_POST['username'];
   $password = $_POST['password'];

  //sql语句
   $sql = "select * from user_table where username='$username' && password='$password'";
   //执行SQL语句
   $data = mysqli_query($conn, $sql);
   if(mysqli_num_rows($data) > 0){

    //使用mysqli_fetch_assoc 获取一条$data返回的数据
		 $user = mysqli_fetch_assoc($data);
    
     //保存用户登录状态
     $_SESSION['username'] = $username;
     $_SESSION['id'] = $user['id'];
     $_SESSION['nickname'] = $user['nickname'];	//昵称
    ///登录成功，跳转到首页
    //重定向跳转页面
    header("Location: http://localhost:3000");  
    }else{
    //登录失败
    header("Location: http://localhost:3000/login.html?iserror=iserror");  
}
?>