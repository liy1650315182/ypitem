! function ($) {
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

    var $search = $('.search-keyword');
    var $oUl = $('.searchbox ul');
    function ingping(data) {
        
    }
    $search
    var $script=$('<script>');
    $script.src='https://www.ingping.com/search/solrCheck?callback=ingping&term='+this.value;
    $oUl.append($script);
}(jQuery)