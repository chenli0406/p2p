$(function () {
    $('form')
      .bootstrapValidator({
      // 全局错误提示 
    //   message: 'This value is not valid',
      // 验证反馈图标
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
            identical: { // 验证确认密码和密码值的匹配
                field: 'confirmPwd', // 参照字段
                message: '两次密码不一致'
            },
          }
        },
        confirmPwd: {
          validators: {
            notEmpty: {
              message: '密码不能为空'
            },
            stringLength: {
                min: 6,
                max: 18,
                message: '密码长度必须在6到18位之间'
            },
            identical: { // 验证确认密码和密码值的匹配
                field: 'password', // 参照字段
                message: '两次密码不一致'
            },
          }
        }
      },
      submitHandler: function (validator, form, submitButton) {
        alert("submit");
      }
      })
    //   .on('success.form.bv', function(e) {
    //     // 阻止传统form提交事件
    //     e.preventDefault();
    //     debugger
    //     // Get the form instance
    //     var $form = $(e.target);

    //     // Get the BootstrapValidator instance
    //     var bv = $form.data('bootstrapValidator');

    //     // Use Ajax to submit form data
    //     $.get($form.attr('action'), $form.serialize(), function(result) {
    //         // console.log(result);
    //         if(result.success){
    //           alert(result.message);
    //           location.href="/login.html"
    //         }else{
    //           alert(result.message);
    //         }
    //     }, 'json');
    // });
  });