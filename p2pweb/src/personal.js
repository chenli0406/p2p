$(function(){

    //初始化时，发起ajax请求，调用获取个人信息接口
    init();

})
 //初始化请求
 function init(){

    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:81/getuserinfo.php',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success(res) {
            var obj = JSON.parse(res);
            console.log(obj)

            //循环进行数据填充
            for(var key in obj){
                $('#personal_' + key).html(obj[key])
            }
            
        }
    });
  
}