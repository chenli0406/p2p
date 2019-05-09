$(function(){
    var str = location.search;
     console.log(str);
     
     switch(str.substring(str.indexOf('=')+1)){
         case 'xingyong':$('#borrw_title').html('信用');break;
         case 'car':$('#borrw_title').html('车子信用');break;
         case 'house':$('#borrw_title').html('房子信用');break;
     }
     //右侧面板的计算
     //金额
     $("#borrw_borrowmoney").on('change',change);
     //利息  
     $("#borrw_interest").on('change',change);
     //借款期限 
     $("#borrw_borrowtime").on('change',change);
    
})
function change(){
     //金额
     var  borrowmoney=$("#borrw_borrowmoney").val();
     //利息
     var interest=$("#borrw_interest").val();
     //借款期限
     var borrowtime=$("#borrw_borrowtime").val();

     //console.log(borrowmoney,interest,borrowtime);
     //利息
    
     var imoney = (borrowmoney * interest/100 / 12) * borrowtime;
     console.log(imoney);
     
     $("#borrw_cost01").html(imoney.toFixed(2));
     //管理费
     $("#borrw_cost02").html(borrowmoney * .02);
     
}