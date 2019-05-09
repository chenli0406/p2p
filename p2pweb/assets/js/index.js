$(function(){
   function loadview(){
   
        //    获取最新的HASH 地址
           var hash=location.hash;
        //    console.log(hash); //   #/a
                // 截取第2位后的字符串
           var path=hash.substr(2);
           console.log(path);   
           var routerObj={
               'main':"/views/main/main.html",
               'invest':"/views/invest/invest.html",
               'borrow':"/views/borrow/borrow.html",
               'myself':'/views/myself/myself.html',
               'borrow_info':"/views/borrow_info/borrow_info.html",
               'recharge':"/views/recharge/recharge.html",//账户充值
               'moneyWithdraw_apply':"/views/moneyWith_apply/moneyWithdraw_apply.html",//提现记录
            //    'login1':"/views/login/login1.html",//登录
            //    'register1':"/views/register/register1.html",//注册
               'borrow_apply':"/views/borrow_apply/borrow_apply.html"//信用借
           }
           //    二级路由
           var personalRouter={
              'myself/bid_list':"/views/bid_list/bid_request_list.html",//借款项目
              'myself/personal':"/views/personal/personal.html",//账户信息
              'myself/realAuth':"/views/realAuth/realAuth.html",//实名认证
              'myself/userInfo':"/views/userInfo/userInfo.html",//个人资料
              'myself/accountflow':"/views/accountflow_list/accountflow_list.html",//账户流水
              'myself/recharge_list':"/views/recharge_list/recharge_list.html",//充值明细
           
              'myself/moneyWithdraw':"/views/money_withdraw/money_withdraw_list.html",//提现记录
             
           }


           switch(path){
               case 'invest':
                  $('#root').load(routerObj['invest']);
                  break;  
               case 'borrow':
                  $('#root').load(routerObj['borrow']);
                  break;
                  case 'myself':
                  //1. 先把个人中心加载root中
                  $('#root').load(routerObj['myself'],function(){
                       //此函数会在页面加载完成时触发！

                    //2. 把账户信息加载到个人中心中（设置默认页面）
                    $("#personal").load(personalRouter['myself/personal']);
                  });
                  break;
                 
                  
                  case 'borrow_info':
                  $('#root').load(routerObj['borrow_info']);
                  break;

                  case 'recharge':
                  $("#root").load(routerObj['recharge']);
                  break;
                 

                  case 'moneyWithdraw_apply':
                  $('#root').load(routerObj['moneyWithdraw_apply']);
                  break;

                  case '':
                  $('#root').load(routerObj['main']);
                  break;

                  // 我要借款   
                  case 'borrow_apply':
                  $('#root').load(routerObj['borrow_apply']);
                  break;
                //   //登录
                //   case 'login1':
                //   $('#root').load(routerObj['login1']);
                //   break;

                //  //注册
                //   case 'register1':
                //   $('#root').load(routerObj['register1']);
                //   break;

                  default:
                  $('#root').load(routerObj['main']);
                  break;
                //   二级路由 
                case 'myself/bid_list':
                $("#personal").load(personalRouter['myself/bid_list']);
                break;
                // 个人中心
               
                case 'myself/personal':
                if($("#personal").length !=0){
                    //节点已存在
                    $("#personal").load(personalRouter['myself/personal']);
                }else{
                   //节点不存在，则先加载personal大的页面，在加载小的二级页面
                 $('#root').load(routerObj['myself'],function(){
                 $("#personal").load(personalRouter['myself/personal']);
               });
                }

                break;

                case 'myself/realAuth':
                $("#personal").load(personalRouter['myself/realAuth']);
                break;

                case 'myself/userInfo':
                $("#personal").load(personalRouter['myself/userInfo']);
                break;

                case 'myself/accountflow':
                $("#personal").load(personalRouter['myself/accountflow']);
                break;

                case 'myself/recharge_list':
                $("#personal").load(personalRouter['myself/recharge_list']);
                break;


                
                case 'myself/moneyWithdraw':
                $("#personal").load(personalRouter['myself/moneyWithdraw']);
                break;

    }
        // //先清空所有选中的标签class
        // $('#first_title_ul li').removeClass();
        // // // //根据path选中当前选中的标签
        // $('#first_title_' + path).addClass("active1")
    
}

    window.addEventListener('hashchange',loadview);
    loadview();
     //切换选中样式
    $("nav li").click(function(){
        $(this).addClass("active1").siblings().removeClass();
    });
    

    //初始化拿到session的值
    initSession();
   })
    // 发送ajax调用获取session接口
   function initSession(){
       $.ajax({
           url:'http://127.0.0.1:81/getsession.php',
           type:'get',
           xhrFields: {
            withCredentials: true   //是否携带cookie
           },
           crossDomain: true,  //是否跨域
           success:function(res){
               console.log(res);
               $("#index_user").html(res !='' ? res: '未登录');
           }
       })
   }


    
