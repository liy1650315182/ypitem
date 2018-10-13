!function ($) {
    $('.login-reg-h').load('login-reg-h.html');
    $('.login-reg-f').load('login-reg-f.html');

    $(function () {
        $('#form1').validate({
            rules: {
                username: {
                    required: true,
                    minlength: 3,
                    maxlength: 15,
                    remote: { //将前端的name给后端
                        url: "http://10.31.162.37/js/ypitem/php/registor.php", //后台处理程序
                        type: "post" //数据发送方式
                    }
                },
                password: {
                    required: true,
                    minlength: 6
                },
                repass: {
                    required: true,
                    equalTo: '#password'
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                username: {
                    required: '用户名不能为空',
                    minlength: '用户名不能小于3',
                    maxlength: '用户名不能大于15',
                    remote: '用户名已存在'
                },
                password: {
                    required: '密码不能为空',
                    rangelength: "密码长度必须介于6 到 20位之间"
                },
                repass: {
                    required: '密码重复不能为空',
                    equalTo: "两次密码输入不一致"
                },
                email: {
                    required: '电子邮箱不能为空',
                    email: '你输入的格式有误'
                }
            }
        });
    });

    $.validator.setDefaults({
        /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
        success: function (label) {
            label.text('√').css('color', 'green').addClass('valid');
        }
    });
}(jQuery);