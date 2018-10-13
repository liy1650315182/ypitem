define(['jquery','jquery.cookie'], function ($) {
    return {
        login: ! function () {
            $('.login-reg-h').load('login-reg-h.html');
            $('.login-reg-f').load('login-reg-f.html');

            $('#submit').on('click', function () {
                var $username = $('#username').val();
                var $password = $('#password').val();
                $.ajax({
                    type: "post",
                    url: "http://10.31.162.37/js/ypitem/php/login.php",
                    data: {
                        name: $username,
                        pass: $password
                    },
                    success: function (data) {
                        if (!data) {
                            $('#password').val('');
                            alert('用户名或者密码错误')
                            location.reload();
                        } else {
                            addCookie('username', $username, 30);
                            location.href = 'http://10.31.162.37/js/ypitem/src/index.html';
                        }
                    }
                });
            })
        }()
    }
});