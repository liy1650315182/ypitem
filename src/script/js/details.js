! function ($) {
	$('.topcontent').load('header.html');
	$('.footercontent').load('footer.html');
	$('.aside').load('sidebar.html');

	//放大镜
	//鼠标移入移出显示小方和大方。
	$('#spic').hover(function () {
		$('#sf').css('visibility', 'visible');
		$('#bf').css('visibility', 'visible');

		//3.1:小方的尺寸
		$('#sf').width($(this).width() * $('#bf').width() / $('#bpic').width());
		$('#sf').height($(this).height() * $('#bf').height() / $('#bpic').height());

		var $bili = $('#bpic').width() / $('#spic').width();

		//鼠标在小方里面移动
		$('#spic').on('mousemove', function (ev) {
			var $left = ev.pageX - $('.fdj').offset().left - $('#sf').width() / 2;
			var $top = ev.pageY - $('.fdj').offset().top - $('#sf').height() / 2;
			if ($left <= 0) {
				$left = 0;
			} else if ($left >= $('#spic').width() - $('#sf').width()) {
				$left = $('#spic').width() - $('#sf').width();
			}


			if ($top <= 0) {
				$top = 0;
			} else if ($top >= $('#spic').height() - $('#sf').height()) {
				$top = $('#spic').height() - $('#sf').height();
			}


			$('#sf').css({
				left: $left,
				top: $top
			});

			$('#bpic').css({
				left: -$bili * $left,
				top: -$bili * $top
			})
		});
	}, function () {
		$('#sf').css('visibility', 'hidden');
		$('#bf').css('visibility', 'hidden');
	});

	//设置ul尺寸
	var $leftBtn = $('#left');
	var $rightBtn = $('#right');
	var $li = $('#list ul li');
	var $ul = $('#list ul');
	var $liwidth = $li.eq(0).innerWidth();
	$ul.width($li.size() * $liwidth);

	$li.hover(function () {
		var url = $(this).find('img').attr('src'); //当前点击的li下面的图片路径
		$('#spic').find('img').attr('src', url);
		$('#bpic').attr('src', url);
		$(this).find('img').css('border', '2px solid #f60');
		if(url==''){
			$(this).find('img').css('border', '0');
		}
	}, function () {
		$(this).find('img').css('border', '0');
	});


	/* var $num = $li.eq($(this).index);
	$rightBtn.on('click', function () {
		$num++;
		if ($num < 4) {
			var url =  $li.eq($num).find('img').attr('src'); //当前点击的li下面的图片路径
			$('#spic').find('img').attr('src', url);
			$('#bpic').attr('src', url);
			$li.eq($num).find('img').css('border', '2px solid #f60');
		}
	}); */


	//分享
	var $shareBtn = $('.share');
	var $share_other = $('.share_other');
	$shareBtn.hover(function () {
		$share_other.css({
			'display': 'block',
			'background': '#ddd'
		});
		$(this).css({
			'background': '#ddd'
		});
	}, function () {
		$share_other.css('display', 'none');
		$(this).css({
			'background': '#fff'
		});
	});


	//无缝滚动
	var $oUl=$('.tab-content ul');
	var $aLi=$('.tab-content ul li');
    var $btnspan = $('.tab-content ol span');

	var $index = 0;
    $btnspan.on('click', function () {
        $index = $(this).index();
        imgchange($index);
    });

	function imgchange($index) {
        $btnspan.eq($index).addClass('active').siblings('span').removeClass('active');
        $aLi.eq($index).animate({
            left: -150
        }, 400).siblings($aLi).animate({
            left: -150
        }, 400)
    }
}(jQuery);


//数据渲染
! function () {
	//商品中间数据的详情
	$.ajax({
		url: "http://10.31.162.37/js/ypitem/php/details_mid.php",
		data: {
			sid: location.search.substring(1).split('=')[1]
		},
		dataType: "json"
	}).done(function (data) {
		$.each(data, function (index, value) {
			$('#spic img').eq(index).attr({
				"src": value.url.split(',')[1]
			});
			$('#bf img').eq(index).attr({
				"src": value.url.split(',')[1]
			});

			$('#list .li1 img').eq(index).attr({
				"src": value.url.split(',')[1]
			});
			$('#list .li2 img').eq(index).attr({
				"src": value.url.split(',')[2]
			});
			$('#list .li3 img').eq(index).attr({
				"src": value.url.split(',')[3]
			});
			$('#list .li4 img').eq(index).attr({
				"src": value.url.split(',')[4]
			});

			$('.items_name h1').eq(index).html(value.title.split(',')[2]);
			var $strhtml = `<em>￥</em>
			${value.price}
			<a href="#" class="price-tip"> 降价通知 </a>`;
			$('.price_c').html($strhtml);
		});
	})
}(jQuery)

! function () {
	//商品小图的详情页
	$.ajax({
		url: "http://10.31.162.37/js/ypitem/php/details_right.php",
		data: {
			sid: location.search.substring(1).split('=')[1]
		},
		dataType: "json"
	}).done(function (data) {
		$.each(data, function (index, value) {
			$('#spic img').eq(index).attr({
				"src": value.url.split(',')[1]
			});
			$('#bf img').eq(index).attr({
				"src": value.url.split(',')[1]
			});

			$('#list .li1 img').eq(index).attr({
				"src": value.url.split(',')[1]
			});
			$('#list .li2 img').eq(index).attr({
				"src": value.url.split(',')[2]
			});
			$('#list .li3 img').eq(index).attr({
				"src": value.url.split(',')[3]
			});
			$('#list .li4 img').eq(index).attr({
				"src": value.url.split(',')[4]
			});

			$('.items_name h1').eq(index).html(value.title.split(',')[2]);
			var $strhtml = '<em>￥</em>' + value.price +
				'<a href="#" class="price-tip"> 降价通知 </a>';
			$('.price_c').html($strhtml);
		});
	})
}(jQuery)