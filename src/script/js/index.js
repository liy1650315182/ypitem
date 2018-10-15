define(['jquery'], function ($) {
    return {

        //楼梯
        louti: ! function () {
            $(document).ready(function () {
                //滚轮事件显示左侧的楼梯。
                var $louti = $('#nav_panel'); //左侧楼梯
                var $loutili = $('#nav_panel li');
                var $louceng = $('#main .louti');
                var $backtop = $('#nav_panel .toTop');
                var $record = $('#main .record');
                $louti.hide();
                $(window).on('scroll', function () {
                    var $scrolltop = $(window).scrollTop(); //滚动条的top值。
                    if ($scrolltop >= 1300) {
                        $louti.show();
                    } else {
                        $louti.hide();
                    }
                    $louceng.each(function (index) {
                        var $top = $louceng.eq(index).offset().top + $(this).innerHeight() / 2 - 200;
                        if ($top > $scrolltop) {
                            $loutili.removeClass('current');
                            $loutili.eq(index).addClass('current');
                            return false;
                        }
                    });
                });

                $loutili.on('click', function () {
                    $(this).addClass('current').siblings('li').removeClass('current');
                    var $top = $louceng.eq($(this).index() - 1).offset().top;
                    $('html,body').animate({
                        scrollTop: $top
                    });
                });

                $backtop.on('click', function () {
                    $('html,body').scrollTop(0);
                });
            })
        }(),

        //侧边栏
        sidebar: ! function () {

            $(document).ready(function () {
                //side_link1
                $('.side_link1').hover(function () {
                    $(this).css('background', '#f60');
                    $('.my_link').css('background-position', '-33px 0')
                    var $hover_subnav_all_main = $(this).find('.link_main');
                    $hover_subnav_all_main.css('display', 'block');
                }, function () {
                    $(this).css('background', '#333');
                    $('.my_link').css('background-position', '0 0')
                    var $hover_subnav_all_main = $(this).find('.link_main');
                    $hover_subnav_all_main.css('display', 'none');
                });
                //side_link2
                $('.side_link2').hover(function () {
                    $(this).css('background', '#f60');
                    $('.tel_link').css('background-position', '-33px -175px')
                    var $hover_subnav_all_main = $(this).find('.link_main');
                    $hover_subnav_all_main.css('display', 'block');
                }, function () {
                    $(this).css('background', '#333');
                    $('.tel_link').css('background-position', '0 -175px')
                    var $hover_subnav_all_main = $(this).find('.link_main');
                    $hover_subnav_all_main.css('display', 'none');
                });
                //shopcart
                $('#shopcart .icon_links').hover(function () {
                    $(this).css({
                        'background': '#f60',
                        'color': '#fff'
                    });
                    $('.cart_link').css('background-position', '-33px -29px')
                }, function () {
                    $(this).css({
                        'background': '#333',
                        'color': '#f60'
                    });
                    $('.cart_link').css('background-position', '0 -29px')
                });
                //top_code
                $('.top_code').hover(function () {
                    $(this).css('background', '#f60');
                    $('.topli_code').css('background-position', '0 -321px')
                    var $hover_subnav_all_main = $(this).find('.topli_link_main');
                    $hover_subnav_all_main.css('display', 'block');
                }, function () {
                    $(this).css('background', '#333');
                    $('.topli_code').css('background-position', '0 -302px')
                    var $hover_subnav_all_main = $(this).find('.topli_link_main');
                    $hover_subnav_all_main.css('display', 'none');
                });
                //side_link3
                $('.side_link3').hover(function () {
                    $(this).css('background', '#f60');
                    $('.money_link').css('background-position', '-33px -57px');
                    $('.side_link3 .tooltip').css('visibility', 'visible');
                    $('.side_link3 .tooltip').animate({
                        'left': '-92px'
                    })
                }, function () {
                    $(this).css('background', '#333');
                    $('.money_link').css('background-position', '0 -57px');
                    $('.side_link3 .tooltip').css('visibility', 'hidden');
                    $('.side_link3 .tooltip').animate({
                        'left': '-121px'
                    })
                });
                //side_link4
                $('.side_link4').hover(function () {
                    $(this).css('background', '#f60');
                    $('.pen_link1').css('display', 'none');
                    $('.pen_link2').css('display', 'block');
                    $('.side_link4 .tooltip').css('visibility', 'visible');
                    $('.side_link4 .tooltip').animate({
                        'left': '-92px'
                    })
                }, function () {
                    $(this).css('background', '#333');
                    $('.pen_link1').css('display', 'block');
                    $('.pen_link2').css('display', 'none');
                    $('.side_link4 .tooltip').css('visibility', 'hidden');
                    $('.side_link4 .tooltip').animate({
                        'left': '-121px'
                    })
                });

                //回到顶部
                $topback = $('.top .topback');
                $topback.hide();
                $(window).on('scroll', function () {
                    var $scrolltop = $(window).scrollTop(); //滚动条的top值。
                    if ($scrolltop >= 100) {
                        $topback.show();
                    } else {
                        $topback.hide();
                    }
                });
                $('.top_links').hover(function () {
                    $(this).css('background', '#f60');
                    $('.topback').css('background-position', '-33px -201px');
                    $('.top_links .tooltip').css('visibility', 'visible');
                    $('.top_links .tooltip').animate({
                        'left': '-92px'
                    })
                }, function () {
                    $(this).css('background', '#333');
                    $('.topback').css('background-position', '0 -201px');
                    $('.top_links .tooltip').css('visibility', 'hidden');
                    $('.top_links .tooltip').animate({
                        'left': '-121px'
                    })
                });
            })

        }(),

        header: ! function () {

            $(document).ready(function () {
                //header
                //我的音平
                //客服服务
                //手机音平
                //全部商品分类
                //总导航
                $('.hover_subnav_all').hover(function () {
                    var $hover_subnav_all_main = $(this).find('.hover_subnav_all_main');
                    $hover_subnav_all_main.css('display', 'block');
                }, function () {
                    var $hover_subnav_all_main = $(this).find('.hover_subnav_all_main');
                    $hover_subnav_all_main.css('display', 'none');
                });
                //上下切换的轮播图
                var $small_lunbo = $('.nav_right_2 ul');
                var $prevbtn = $('.top_bot .prev');
                var $nextbtn = $('.top_bot .next');
                var $num = 0;

                var $timer = setInterval(function () {
                    $prevbtn.click();
                }, 2000)
                $nextbtn.on('click', function () {
                    $num += 39;
                    $small_lunbo.animate({
                        top: $num + 'px'
                    }, 500, function () {
                        if ($num >= 0) {
                            $num = -195;
                            $small_lunbo.css({
                                'top': '-156px'
                            })
                        }
                    });

                });
                $prevbtn.on('click', function () {
                    $num += -39;
                    $small_lunbo.animate({
                        top: $num + 'px'
                    }, 500, function () {
                        if ($num <= -195) {
                            $num = 0;
                            $small_lunbo.css({
                                'top': '0px'
                            })
                        }
                    });
                });


                //搜索框
                var $search = $('.searchbox input');
                var $oUl = $('.searchbox ul');
                // console.log($oUl);
                $search.on('input propertychange', function () {
                    $.ajax({
                        type: "get",
                        url: "https://www.ingping.com/search/solrCheck?term=" + $(this).val(),
                        async: true,
                        dataType: 'jsonp'
                    }).done(function (data) {
                        // console.log(data);
                        $str = '';
                        $.each(data, function (index, value) {
                            // console.log(value);
                            $str += '<li><a href="https://www.ingping.com/search?t=1539480493223&kw=' + value + '&kwIsNot=isNot">' + value + '</a></li>';
                            // console.log($str);
                        });
                        $oUl.html($str);
                    });
                });

                $search.focus(function (e) {
                    e.preventDefault();
                    $oUl.css('display', 'block');
                });
                $search.blur(function (e) {
                    e.preventDefault();
                    $oUl.css('display', 'none');
                });

                //悬浮框
                var $xuanfu = $('.xuanfu')
                // console.log($xuanfu);
                $(window).on('scroll', function () {
                    var $scrolltop = $(window).scrollTop(); //滚动条的top值。
                    if ($scrolltop >= 400) {
                        // console.log($xuanfu);
                        $xuanfu.css({
                            'display':'block',
                            'position':'fixed',
                            'top':'0',
                            'left':'0',
                            'z-index':'9999',
                            'width': '100%',
                            'margin': '0 auto',
                            'background':'#fff',
                            'padding-left':'100px',
                            'border-bottom':'2px #aaa solid'
                        });
                    }else{
                        $xuanfu.css({
                            'display':'none'
                        })
                    }
                });

            });

        }(),

        xiaoguo: ! function () {
            $('.topcontent').load('header.html');
            $('.footercontent').load('footer.html');
            $('.aside').load('sidebar.html');

            //banner轮播图/tab切换
            //banner轮播图
            var $btnspan = $('.lunbo_main ol span');
            var $lunbo = $('.lunbo_img');
            var $prevBtn = $('.prevbtn');
            var $nextBtn = $('.nextbtn');

            var $index = 0;
            $btnspan.on('click', function () {
                clearInterval($timer);
                $index = $(this).index();
                imgchange($index);
            });

            $nextBtn.on('click', function () {
                clearInterval($timer);
                $index++;
                if ($index > 6) {
                    $index = 0;
                }
                imgchange($index);
            });

            $prevBtn.on('click', function () {
                clearInterval($timer);
                $index--;
                if ($index < 0) {
                    $index = 6;
                }
                imgchange($index);
            });

            var $timer = setInterval(function () {
                $index++;
                if ($index > 6) {
                    $index = 0;
                }
                imgchange($index);
            }, 2000);

            $lunbo.on('mouseover', function () {
                clearInterval($timer);
            });
            $lunbo.on('mouseout', function () {
                $timer = setInterval(function () {
                    $index++;
                    if ($index > 6) {
                        $index = 0;
                    }
                    imgchange($index);
                }, 2000)
            });

            function imgchange($index) {
                $btnspan.eq($index).addClass('on').siblings('span').removeClass('on');
                $('.lunbo_img').children('li').eq($index).stop(true).animate({
                    opacity: 1
                }, 400).siblings($('.lunbo_img').children('li')).animate({
                    opacity: 0
                }, 400)
            }


            //tab切换
            var $btn = $('.tab_title li');
            var $content = $('.tab_content ul');
            $btn.on('mouseover', function () {
                $(this).addClass('on').siblings('li').removeClass('on');
                $content.eq($(this).index()).show().siblings('ul').hide();
            });

            //换一批
            var $btn_more = $('.guesslove .more');
            $btn_more.on('click', function () {
                $('.guesslove').children('ul').eq($(this).index()).css('opacity', '1').siblings($('.guesslove').children('li')).css('opacity', '0');
            });
        }(),

        shujuxuanran: ! function () {
            //banner轮播图的数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/banner.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                $strhtml = '';
                $.each(data, function (index, value) {
                    $strhtml += `
                    <li style="background:${value.color}">
                        <div class="img">
                            <a href="#" title="${value.title}">
                                <img src="${value.url}">
                            </a>
                        </div>
                    </li>`;
                });
                $('.lunbo_img').html($strhtml);
            });

            //猜您喜欢的数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/guesslove.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                $strhtml = '';
                $.each(data, function (index, value) {
                    $strhtml += `
                    <li class="guess-imgs">
                        <div class="guess-goods">
                            <a href="#">
                                <img src="${value.guess_url}" alt="">
                                <p class="goods-name">${value.guess_name}</p>
                            </a>
                            <p class="goods-price">
                                <span class="price">
                                    <i>￥</i>${value.price}
                                </span>
                            </p>
                        </div>
                    </li>`;
                });
                $('.guess-main-1').html($strhtml);
            });



            //最新晒单的数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/neworders.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                $strhtml = '';
                $.each(data, function (index, value) {
                    $strhtml += `
                    <li class="new-imgs">
                        <div class="new-pro clearfix">
                            <a href="#">
                                <p class="pro-img">
                                    <img src="${value.url}" alt="">
                                </p>
                                <p class="new-title">"${value.new_title}"</p>
                            </a>
                            <a href="#" class="share-pro">
                                <img src="${value.share_url}" alt="">
                                <div class="pro-title">
                                    <p class="title">${value.pro_title}</p>
                                </div>
                            </a>
                            <div class="line"></div>
                            <dl class="clearfix name-date">
                                <dt>${value.name_date}</dt>
                                <dd class="date">2018-10-04</dd>
                            </dl>
                        </div>
                    </li>`;
                });
                $('.new-main').html($strhtml);
            });

            //音平资讯的数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/ypnews.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                $strhtml = '';
                $.each(data, function (index, value) {
                    $strhtml += `
                    <li class="ypnews-imgs">
                        <a href="#">
                            <p class="pro-img">
                                <img src="${value.url}" alt="">
                            </p>
                            <p class="yp-title">${value.yp_title}</p>
                        </a>
                        <div class="line"></div>
                        <dl class="clearfix name-date">
                            <dt>${value.name_date}</dt>
                            <dd class="date">2018-10-09</dd>
                        </dl>
                    </li>`;
                });
                $('.ypnews-main').html($strhtml);
            });

            //商标的数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/brands.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                $strhtml = '';
                $.each(data, function (index, value) {
                    $strhtml += `
                    <li>
                        <a href="#">
                            <img src="${value.url}" alt="">
                        </a>
                    </li>`;
                });
                $('.brands').html($strhtml);
            });

            //商品大图数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/left_pic.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                var $oLeft_pic = $('.record-left a')
                var $str1 = '';
                var $str2 = '';
                var $str3 = '';
                var $str4 = '';
                var $str5 = '';
                var $str6 = '';
                $.each(data, function (index, value) {
                    if (value.sid == 1) {
                        $str1 += `
                        <img src="${value.url}" alt="">
                        `;
                        $oLeft_pic.eq(0).html($str1);
                    }
                    if (value.sid == 2) {
                        $str2 += `
                        <img src="${value.url}" alt="">
                        `;
                        $oLeft_pic.eq(1).html($str2);
                    }
                    if (value.sid == 3) {
                        $str3 += `
                        <img src="${value.url}" alt="">
                        `;
                        $oLeft_pic.eq(2).html($str3);
                    }
                    if (value.sid == 4) {
                        $str4 += `
                        <img src="${value.url}" alt="">
                        `;
                        $oLeft_pic.eq(3).html($str4);
                    }
                    if (value.sid == 5) {
                        $str5 += `
                        <img src="${value.url}" alt="">
                        `;
                        $oLeft_pic.eq(4).html($str5);
                    }
                    if (value.sid == 6) {
                        $str6 += `
                        <img src="${value.url}" alt="">
                        `;
                        $oLeft_pic.eq(5).html($str6);
                    }

                });
            });
            //商品中间数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/middle_pic.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                var $oMiddle_pic = $('.record-mid')
                var $str1 = '';
                var $str2 = '';
                var $str3 = '';
                var $str4 = '';
                var $str5 = '';
                var $str6 = '';

                function midpic(value) {
                    var str = '';
                    str += `
                    <a href="http://10.31.162.37/js/ypitem/src/details.html?sid=${value.sid}" class="record-mid-img hover_move">						
                    <div class="mid-left-l all_left_div">
                    <p class="c-999">${value.title.split(',')[0]}</p>
                    <p class="f-18">${value.title.split(',')[1]}</p>
                    <p class="goods-price">
                        <span class="price">
                            <i>￥</i>${value.price}
                        </span>
                    </p>
                </div>
                <img src="${value.url.split(',')[0]}" alt="" class="left-imgs" sid="${value.sid}">
                </a> `;
                    return str;
                }
                $.each(data, function (index, value) {
                    if (value.sid >= 1 && value.sid < 3) {
                        $str1 += midpic(value);
                        $oMiddle_pic.eq(0).html($str1);
                    }
                    if (value.sid >= 3 && value.sid < 5) {
                        $str2 += midpic(value);
                        $oMiddle_pic.eq(1).html($str2);
                    }
                    if (value.sid >= 5 && value.sid < 7) {
                        $str3 += midpic(value);
                        $oMiddle_pic.eq(2).html($str3);
                    }
                    if (value.sid >= 7 && value.sid < 9) {
                        $str4 += midpic(value);
                        $oMiddle_pic.eq(3).html($str4);
                    }
                    if (value.sid >= 9 && value.sid < 11) {
                        $str5 += midpic(value);
                        $oMiddle_pic.eq(4).html($str5);
                    }
                    if (value.sid >= 11 && value.sid < 13) {
                        $str6 += midpic(value);
                        $oMiddle_pic.eq(5).html($str6);
                    }

                });
            });
            //商品小图数据渲染
            $.ajax({
                type: 'post',
                url: 'http://10.31.162.37/js/ypitem/php/right_pic.php',
                async: true,
                dataType: 'json'
            }).done(function (data) {
                var $oRight_pic = $('.record-right')
                var $str1 = '';
                var $str2 = '';
                var $str3 = '';
                var $str4 = '';
                var $str5 = '';
                var $str6 = '';

                function midpic(value) {
                    var str = '';
                    str += `
                    <a href="http://10.31.162.37/js/ypitem/src/details.html?sid=${value.sid}" class="record-right-img hover_move">
                        <div class="all_left_div" style="z-index:2;">
                            <p class="c-999">${value.title.split(',')[0]}</p>
                            <p class="f-18">${value.title.split(',')[1]}</p>
                            <p class="goods-price">
                                <span class="price">
                                    <i>￥</i>${value.price}
                                </span>
                            </p>
                        </div>
                        <img src="${value.url.split(',')[0]}" alt="" class="left-imgs" sid="${value.sid}">
                    </a>`;
                    return str;
                }
                $.each(data, function (index, value) {
                    if (value.sid >= 13 && value.sid < 17) {
                        $str1 += midpic(value);
                        $oRight_pic.eq(0).html($str1);
                    }
                    if (value.sid >= 17 && value.sid < 21) {
                        $str2 += midpic(value);
                        $oRight_pic.eq(1).html($str2);
                    }
                    if (value.sid >= 21 && value.sid < 25) {
                        $str3 += midpic(value);
                        $oRight_pic.eq(2).html($str3);
                    }
                    if (value.sid >= 25 && value.sid < 29) {
                        $str4 += midpic(value);
                        $oRight_pic.eq(3).html($str4);
                    }
                    if (value.sid >= 29 && value.sid < 33) {
                        $str5 += midpic(value);
                        $oRight_pic.eq(4).html($str5);
                    }
                    if (value.sid >= 33) {
                        $str6 += midpic(value);
                        $oRight_pic.eq(5).html($str6);
                    }

                });
            });
        }()

    }


});