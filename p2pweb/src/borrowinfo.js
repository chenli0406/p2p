var str
var id

$(function () {
    str = location.search
    //获取当前点击数据的ID
    id = str.substring(str.indexOf('=') + 1)

    initdata();
    $('#borrowinfo_invest').on('click', clickInvest);
})

function clickInvest() {
 
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:81/borrowinfo.php',
        data: {
            chargemoney: $('#borrowinfo_input').val(),   //充值的金額
            borrowid: id          //訂單ID
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (res) {
            if(res == 'ok'){
                //成功
                alert('投资成功!')
                //刷新當前訂單信息
                initdata();
            }else{
                //進行錯誤提示
                switch(res){
                    case '10001': alert('用户扣款失败，请重新操作!');break;
                }

            }
        }
    })
}

//初始化页面数据
function initdata() {

    //发起ajax拿到当前数据详情，填充到页面！
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:81/getborrowinfo.php',
        data: {
            borrowid: id    //传参
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (res) {
            var obj = JSON.parse(res)

            for (var key in obj) {
                $('#borrowinfo_' + key).html(obj[key]);
            }
             var porr = ((obj.hasmoney / obj.borrowmoney * 100).toFixed(2))/2 + '%';
             console.log(porr);
             
            $('#borrowinfo_cd').html(porr);
            $('#borrowinfo_cd').css({"width":porr})
        }
    })
}