!function($){
    $('.topcontent').load('header.html');
    $('.footercontent').load('footer.html');
    $('.aside').load('sidebar.html');
    //3.放大镜
	//3.1:鼠标移入移出显示小方和大方。
	$('#spic').hover(function(){
		$('#sf').css('visibility','visible');
		$('#bf').css('visibility','visible');
		
		//3.1:小方的尺寸
		$('#sf').width($(this).width()*$('#bf').width()/$('#bpic').width());
		$('#sf').height($(this).height()*$('#bf').height()/$('#bpic').height());
		
		var $bili=$('#bpic').width()/$('#spic').width();
		
		//3.2鼠标在小方里面移动
		$('#spic').on('mousemove',function(ev){
			var $left=ev.pageX-$('.fdj').offset().left-$('#sf').width()/2;
			var $top=ev.pageY-$('.fdj').offset().top-$('#sf').height()/2;
			if($left<=0){
				$left=0;
			}else if($left>=$('#spic').width()-$('#sf').width()){
				$left=$('#spic').width()-$('#sf').width();
			}
			
			
			if($top<=0){
				$top=0;
			}else if($top>=$('#spic').height()-$('#sf').height()){
				$top=$('#spic').height()-$('#sf').height();
			}
			
			
			$('#sf').css({
				left:$left,
				top:$top
			});
			
			$('#bpic').css({
				left:-$bili*$left,
				top:-$bili*$top
			})
		});
	},function(){
		$('#sf').css('visibility','hidden');
		$('#bf').css('visibility','hidden');
	});
	
/* 	//设置ul尺寸
	var $li=$('#list ul li');
	var $ul=$('#list ul');
	var $liwidth=$li.eq(0).innerWidth();
	$ul.width($li.size()* $liwidth);
	
	$li.on('click',function(){
		var url=$(this).find('img').attr('src');//当前点击的li下面的图片路径
		$('#spic').find('img').attr('src',url);
		$('#bpic').attr('src',url);
	});
	
	var $num=5;//当前ul里面显示的个数。
	if($li.length<=5){
		$('#left,#right').css('color','#fff');
	}
	$('#right').on('click',function(){
		if($num<$li.size()){
			$num++;
			$ul.animate({
				left:-($num-5)*$liwidth
			});
		}
	});
	
	$('#left').on('click',function(){
		if($num>5){
			$num--;
			$ul.animate({
				left:-($num-5)*$liwidth
			});
		}
	}); */
	
}(jQuery);
