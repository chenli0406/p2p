$(function () {
    $('form').bootstrapValidator({
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      // 字段（输入框验证配置）
      fields: {
        username: { // key： 与name有关！
        //   message: '用户名验证失败',
          validators: {// 输入框验证规则
            notEmpty: {// 非空验证
              message: '用户名不能为空'
            },
            stringLength: {// 内容长度
                min: 6,
                max: 18,
                message: '用户名长度必须在6到18位之间'
            },
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: '密码不能为空'
            },
            stringLength: {
                min: 6,
                max: 18,
                message: '密码长度必须在6到18位之间'
            },
          }
        }
      },
      submitHandler: function (validator, form, submitButton) {
        alert("submit");
      }
    });
     // 初始化判断用户是否登录失败
  if (location.search != '') {
    // 登录失败，显示错误提示
    $('.error').css('display', 'block')
  };

  var SlideVerifyPlug = window.slideVerifyPlug;
  var slideVerify = new SlideVerifyPlug('#verify-wrap',{
    wrapWidth:'300',//设置 容器的宽度 ,不设置的话，会设置成100%，需要自己在外层包层div,设置宽度，这是为了适应方便点；
          initText:'请按住滑块',  //设置  初始的 显示文字
          sucessText:'验证通过',//设置 验证通过 显示的文字
          getSuccessState:function(res){
             //当验证完成的时候 会 返回 res 值 true，只留了这个应该够用了 
             console.log(res);
           }
  });
  $("#resetBtn").on('click',function(){
    slideVerify.resetVerify();//可以重置 插件 回到初始状态 
  })
  $("#getState").on('click',function(){
    alert(slideVerify.slideFinishState);   //这个可以拿到 当前验证状态  是否完成
  })
  
  });

	
			
	