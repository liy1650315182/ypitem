!function($){
    //header
    //我的音平
    //客服服务
    //手机音平
    //全部商品分类
    //总导航
    $('.hover_subnav_all').hover(function () {  
        var $hover_subnav_all_main=$(this).find('.hover_subnav_all_main');
        $hover_subnav_all_main.css('display','block');
    },function() {
        var $hover_subnav_all_main=$(this).find('.hover_subnav_all_main');
        $hover_subnav_all_main.css('display','none');
    });


    //上下切换的轮播图
    var $small_lunbo=$('.nav_right_2 ul');
    var $prevbtn=$('.top_bot .prev');
    var $nextbtn=$('.top_bot .next');
    $prevbtn.on('click',function () {
        $small_lunbo.animate({
            top:-39
        });
     });
     $nextbtn.on('click',function () {
        $small_lunbo.animate({
            top:39
        });
     });
    
}(jQuery);