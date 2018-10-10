! function ($) {
    $('.topcontent').load('header.html');
    $('.footercontent').load('footer.html');
    $('.aside').load('sidebar.html');

    //banner轮播图/tab切换
    //banner轮播图
    var $btnspan = $('.lunbo_main ol span');
    $btnspan.on('click', function () {
        $(this).addClass('on').siblings('span').removeClass('on');
        console.log($(this));
        $('.lunbo_img').children('li').eq($(this).index()).animate({
            opacity: 1
        }, 400).siblings($('.lunbo_img').children('li')).animate({
            opacity: 0
        }, 400)
    });
    timer = setInterval(function () {
        $(this).addClass('on').siblings('span').removeClass('on');
        console.log($(this));
        $('.lunbo_img').children('li').eq($(this).index()).animate({
            opacity: 1
        }, 400).siblings($('.lunbo_img').children('li')).animate({
            opacity: 0
        }, 400)
    }, 2000);


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
}(jQuery);



//数据渲染
//$.ajax+$.each配合
! function ($) {
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
            <a href="#" class="record-mid-img hover_move">						
            <div class="mid-left-l all_left_div">
            <p class="c-999">${value.title_top}</p>
            <p class="f-18">${value.title_bot}</p>
            <p class="goods-price">
                <span class="price">
                    <i>￥</i>${value.price}
                </span>
            </p>
        </div>
        <img src="${value.url}" alt="" class="left-imgs">
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
            if (value.sid >= 11) {
                $str6 += midpic(value);
                $oMiddle_pic.eq(5).html($str6);
            }

        });
    });
    //商品大图数据渲染
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
            <a href="#" class="record-right-img hover_move">
                <div class="all_left_div" style="z-index:2;">
                    <p class="c-999">${value.title_top}</p>
                    <p class="f-18">${value.title_bot}</p>
                    <p class="goods-price">
                        <span class="price">
                            <i>￥</i>${value.price}
                        </span>
                    </p>
                </div>
                <img src="${value.url}" alt="" class="left-imgs">
            </a>`;
            return str;
        }
        $.each(data, function (index, value) {
            if (value.sid >= 1 && value.sid < 5) {
                $str1 += midpic(value);
                $oRight_pic.eq(0).html($str1);
            }
            if (value.sid >= 5 && value.sid < 9) {
                $str2 += midpic(value);
                $oRight_pic.eq(1).html($str2);
            }
            if (value.sid >= 9 && value.sid < 13) {
                $str3 += midpic(value);
                $oRight_pic.eq(2).html($str3);
            }
            if (value.sid >= 13 && value.sid < 17) {
                $str4 += midpic(value);
                $oRight_pic.eq(3).html($str4);
            }
            if (value.sid >= 17 && value.sid < 21) {
                $str5 += midpic(value);
                $oRight_pic.eq(4).html($str5);
            }
            if (value.sid >= 21) {
                $str6 += midpic(value);
                $oRight_pic.eq(5).html($str6);
            }

        });
    });
}(jQuery);