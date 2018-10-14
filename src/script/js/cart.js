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
                            $clone.find('.newprice em').html(data[index].price);
                            $clone.find('#goods_num').val(num);
                            var $one_goods = parseFloat($clone.find('.newprice em').html()); //单价
                            $clone.find('.sum_price em').html(($one_goods * num).toFixed(2)); //总价
                            $clone.css('display', 'block'); //克隆的模块显示。
                            $('.cart_box_main ul').append($clone); //追加
                            kong();
                            totalprice(); //总价和总数
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

            //所有商品总价
            function totalprice() {
                var total = 0;
                var countnum = 0;
                $('.goods-item:visible').each(function () {
                    if ($(this).find('input:checkbox').is(':checked')) {
                        total += parseFloat($(this).find('.sum_price em').html());
                        countnum += parseInt($(this).find('.goods_count').find('input').val());
                    }
                });
                $('.totalprice em').html(total.toFixed(2)); //总价
                $('.allneed em').html((total - 299.00).toFixed(2)); //优惠后的价格
                $('.all_num').html(countnum); //物品数量
                $('#shopcart .amount').html(countnum);
            }

            $(document).on('click',function () { 
                // alert($('#shopcart .amount').html());
             })

            //增加商品数量
            $('#num_add').on('click', function (e) {
                e.preventDefault();
                var $count = $(this).parents('.goods-item').find('.goods_count input').val();
                $count++;
                if ($count >= 99) {
                    $count = 99;
                }
                $(this).parents('.goods-item').find('.goods_count input').val($count);
                $(this).parents('.goods-item').find('.sum_price em').html(singlegoodsprice($(this)));
                totalprice();
                setcookie($(this));
            });


            //减少商品数量
            $('#num_min').on('click', function () {
                var $count = $(this).parents('.goods-item').find('.goods_count input').val();
                $count--;
                if ($count <= 1) {
                    $count = 1;
                }
                $(this).parents('.goods-item').find('.goods_count input').val($count);
                $(this).parents('.goods-item').find('.sum_price em').html(singlegoodsprice($(this)));
                totalprice();
                setcookie($(this));
            });


            //直接输入改变数量
            $('.goods_count input').on('input', function () {
                var $reg = /^\d+$/g; //只能输入数字
                var $value = parseInt($(this).val());
                if ($reg.test($value)) {
                    if ($value >= 99) {
                        $(this).val(99);
                    } else if ($value <= 0) {
                        $(this).val(1);
                    } else {
                        $(this).val($value);
                    }
                } else {
                    $(this).val(1);
                }
                $(this).parents('.goods-item').find('.sum_price em').html(singlegoodsprice($(this)));
                totalprice();
                setcookie($(this));
            });

            //数量改变后单个商品的总价
            function singlegoodsprice(row) {
                var $dj = parseFloat(row.parents('.goods-item').find('.newprice em').html());
                var $cnum = parseInt(row.parents('.goods-item').find('.goods_count input').val());
                return ($dj * $cnum).toFixed(2);
            }

            //将改变后的数量的值存放到cookie
            function setcookie(obj) {
                cookieToArray();
                var $index = obj.parents('.goods-item').find('img').attr('sid');
                numarr[sidarr.indexOf($index)] = obj.parents('.goods-item').find('.goods_count input').val();
                addCookie('cartnum', numarr.toString(), 30);
            }


            //全选
            $('.u-chk-all').on('change', function () {
                $('.goods-item:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
                $('.u-chk-all').prop('checked', $(this).prop('checked'));
                totalprice();
            });

            var $inputchecked = $('.goods-item:visible').find('input:checkbox');
            $('.item-list').on('change', $inputchecked, function () {
                var $inputs = $('.goods-item:visible').find('input:checkbox');
                if ($('.goods-item:visible').find('input:checked').length == $inputs.size()) {
                    $('.u-chk-all').prop('checked', true);
                } else {
                    $('.u-chk-all').prop('checked', false);
                }
                totalprice();
            });

            //删除cookie的函数
            function delgoodslist(sid, sidarr) { //sid：当前的sid，sidarr:cookie的sid的值
                var index = -1;
                for (var i = 0; i < sidarr.length; i++) {
                    if (sid == sidarr[i]) {
                        index = i;
                    }
                }
                sidarr.splice(index, 1);
                numarr.splice(index, 1);
                addCookie('cartsid', sidarr.toString(), 30);
                addCookie('cartnum', numarr.toString(), 30);
                location.reload();
            }

            //删除单个商品
            $('.deleteGoods').on('click', function (ev) {
                cookieToArray(); //转数组
                if (confirm('你确定要删除吗？')) {
                    $(this).parents('.goods-item').remove();
                }
                delgoodslist($(this).parents('.goods-item').find('img').attr('sid'), sidarr);
                totalprice();
            });


            //删除全部商品
            $('.cart_delete_all a').on('click', function () {
                if (confirm('你确定要删除吗？')) {
                    $('.goods-item:visible').each(function () {
                        if ($(this).find('input:checkbox').is(':checked')) {
                            $(this).remove();
                            delgoodslist($(this).find('img').attr('sid'), sidarr);
                        }
                    });
                    totalprice();
                }
            });

            var sidarr = [];
            var numarr = [];

            function cookieToArray() {
                if (getCookie('cartsid')) {
                    sidarr = getCookie('cartsid').split(',');
                }

                if (getCookie('cartnum')) {
                    numarr = getCookie('cartnum').split(',');
                }
            }


        }()
    }
})