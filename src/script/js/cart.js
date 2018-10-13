define(['jquery', 'jquery.cookie'], function ($) {
    return {
        cart: ! function () {
            $('.cart_h').load('header.html .header_nav');
            $('.cart_f').load('footer.html .f_info');
            $('.aside').load('sidebar.html');

            //获取cookie创建购物车
            if (getCookie('cartsid') && getCookie('cartnum')) {
                var $s = getCookie('cartsid').split(','); //编号
                var $n = getCookie('cartnum').split(','); //数量
                // console.log($s);
                // console.log($n);
                $.each($s, function (index, value) {
                    createcart(value, $n[index]);
                });

            }

            function createcart(sid, num) {
                $.ajax({
                    url: 'http://10.31.162.37/js/ypitem/php/middle_pic.php',
                    dataType: 'json'
                }).done(function (data) {
                    // console.log(data);
                    $.each(data, function (index, value) {
                        if (sid == data[index].sid) { //id匹配
                            var $clone = $('.goods-item:hidden').clone(true); //克隆隐藏的模块
                            //克隆不相同的值
                            $clone.find('.imgwrap').find('img').attr('src', data[index].url.split(',')[0]);
                            $clone.find('.imgwrap').find('img').attr('sid', data[index].sid);
                            $clone.find('.txtwrap').find('a').html(data[index].title.split(',')[2]);
                            $clone.find('.newprice').html(data[index].price);
                            $clone.find('#goods_num').val(num);
                            var $one_goods = parseFloat($clone.find('.newprice').html()); //单价
                            $clone.find('.sum_price').html(($one_goods * num).toFixed(2)); //总价
                            $clone.css('display', 'block'); //克隆的模块显示。
                            $('.cart_box_main ul').append($clone); //追加
                            kong();
                            // totalprice(); //总价和总数
                        }
                    })
                });
            }

            //购物车是否为空
            kong();

            function kong() {
                if (getCookie('cartsid')) {
                    $('.m_nocart').hide();
                } else {
                    $('.m_nocart').show();
                }
            }

            function totalprice() { //计算总价
                var total = 0; //总的价格
                var countnum = 0; //总的数量
                $('.goods-item:visible').each(function () { //可视的商品列表进行遍历，循环叠加
                    if ($(this).find('input:checkbox').is(':checked')) { //商品的复选框是选中的
                        total += parseFloat($(this).find('.b-sum strong').html());
                        countnum += parseInt($(this).find('.quantity-form').find('input').val());
                    }
                });
                //赋值
                $('.totalprice').html('￥' + total.toFixed(2));
                $('.amount-sum em').html(countnum);
            }


            //改变商品数量++
            $('#num_add').on('click', function () {
                var $count = $(this).parents('.goods-item').find('.goods_count input').val();
                $count++;
                if ($count >= 99) {
                    $count = 99;
                }
                $(this).parents('.goods-item').find('.goods_count input').val($count);
                $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this))); //改变后的价格
                totalprice();
                setcookie($(this));

            });


            //改变商品数量--
            $('.quantity-down').on('click', function () {
                var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
                $count--;
                if ($count <= 1) {
                    $count = 1;
                }
                $(this).parents('.goods-item').find('.quantity-form input').val($count);
                $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this))); //改变后的价格
                totalprice();
                setcookie($(this));
            });

        }()
    }
})