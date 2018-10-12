! function ($) {
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
        if ($scrolltop+300 > $record.offset().top) {
            $louceng.each(function (index) {
                var $top = $louceng.eq(index).offset().top + $(this).innerHeight() / 2-200;
                if ($top > $scrolltop) {
                    $loutili.removeClass('current');
                    $loutili.eq(index).addClass('current');
                    return false;
                }
            });
        } else{
            $loutili.removeClass('.current');
        }
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

}(jQuery);