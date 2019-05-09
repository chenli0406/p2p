$(function(){
    //初始化
    initdata();
})

function initdata(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:81/getborrow.php',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function(res){
           // console.log(res);
            
            var list = JSON.parse(res);
            //console.log(list);
            var str = ``;

            for(var i = 0;i<list.length;i++){
                var obj =list[i];
                str += `
                <tr>
                <td>${obj.userid}</td>
                <td>${obj.title}</td>
                <td class="text-info">${obj.interest}.00%
                </td>
                <td class="text-info">${obj.borrowmoney}.00</td>
                <td>
                   ${obj.repaytype == 0 ? '按月分期' : '按月到期'}
                </td>
                <td>
                    <div class="">
                    ${((obj.hasmoney / obj.borrowmoney * 100).toFixed(2))/2}%
                    </div>
                </td>
                <td><a class="btn btn-danger btn-sm" href="?id=${obj.id}#/borrow_info">查看</a></td>
             </tr>
                `
            }
              //拼接字符串，并且写入到页面中
              $('#invest_gridBody').html(str);
        }

    })
}