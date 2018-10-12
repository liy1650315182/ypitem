!function($){
    //side_link1
    $('.side_link1').hover(function () {  
        $(this).css('background','#f60');
        $('.my_link').css('background-position','-33px 0')
        var $hover_subnav_all_main=$(this).find('.link_main');
        $hover_subnav_all_main.css('display','block');
    },function() {
        $(this).css('background','#333');
        $('.my_link').css('background-position','0 0')
        var $hover_subnav_all_main=$(this).find('.link_main');
        $hover_subnav_all_main.css('display','none');
    });
    //side_link2
    $('.side_link2').hover(function () {  
        $(this).css('background','#f60');
        $('.tel_link').css('background-position','-33px -175px')
        var $hover_subnav_all_main=$(this).find('.link_main');
        $hover_subnav_all_main.css('display','block');
    },function() {
        $(this).css('background','#333');
        $('.tel_link').css('background-position','0 -175px')
        var $hover_subnav_all_main=$(this).find('.link_main');
        $hover_subnav_all_main.css('display','none');
    });
    //shopcart
    $('#shopcart .icon_links').hover(function () {  
        $(this).css({
            'background':'#f60',
            'color':'#fff'
        });
        $('.cart_link').css('background-position','-33px -29px')
    },function() {
        $(this).css({
            'background':'#333',
            'color':'#f60'
        });
        $('.cart_link').css('background-position','0 -29px')
    });
    //top_code
    $('.top_code').hover(function () {  
        $(this).css('background','#f60');
        $('.topli_code').css('background-position','0 -321px')
        var $hover_subnav_all_main=$(this).find('.topli_link_main');
        $hover_subnav_all_main.css('display','block');
    },function() {
        $(this).css('background','#333');
        $('.topli_code').css('background-position','0 -302px')
        var $hover_subnav_all_main=$(this).find('.topli_link_main');
        $hover_subnav_all_main.css('display','none');
    });
    //side_link3
    $('.side_link3').hover(function () {  
        $(this).css('background','#f60');
        $('.money_link').css('background-position','-33px -57px')
    },function() {
        $(this).css('background','#333');
        $('.money_link').css('background-position','0 -57px')
    });
    //side_link4

    //回到顶部
    $topback=$('.top .topback');
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
        $(this).css('background','#f60');
        $('.topback').css('background-position','-33px -201px')
    },function() {
        $(this).css('background','#333');
        $('.topback').css('background-position','0 -201px')
    });
}(jQuery);