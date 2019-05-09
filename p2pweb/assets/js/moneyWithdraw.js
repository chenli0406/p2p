$(function () {
    $('form').bootstrapValidator({
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      // 字段（输入框验证配置）
      fields: {
        bankType: { 
          validators: {// 输入框验证规则
            notEmpty: {// 非空验证
              message: '银行不能为空'
            }
          }
        },
        bankName: {
          validators: {
            notEmpty: {
              message: '开户行不能为空'
            },
            stringLength: {
                min: 6,
                max: 18,
                message: '密码长度必须在6到18位之间'
            },
          }
        },
        accountNumber:{
          validators: {
            notEmpty: {
              message: '银行卡号不能为空'
            },
            stringLength: {
                max: 18,
                message: '银行卡号18位'
            },
          }
        },
        realName:{
          validators: {
            notEmpty: {
              message: '户主姓名不能为空'
            }
          }
        },
        moneyAmount:{
          validators: {
            notEmpty: {
              message: '提现金额不能为空'
            },
            stringLength: {
                min: 100,
                max: 1000,
                message: '最低提现100,最高1000'
            },
          }
        },
        mobilePhone:{
          validators: {
            notEmpty: {
              message: '通知电话不能为空'
            },
          }
        }
      },
      submitHandler: function (validator, form, submitButton) {
        alert("submit");
      }
    });
  });