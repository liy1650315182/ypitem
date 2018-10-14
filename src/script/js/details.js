define(['jquery', 'jquery.cookie'], function ($) {
	return {

		details_xiaoguo: ! function () {
			$('.topcontent').load('header.html');
			$('.footercontent').load('footer.html');
			$('.aside').load('sidebar.html');

			//1.放大镜
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
				if (url == '') {
					$(this).find('img').css('border', '0');
				}
			}, function () {
				$(this).find('img').css('border', '0');
			});

			//2.分享
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


			//3.无缝滚动
			var $oUl = $('.tab-content ul');
			var $aLi = $('.tab-content ul li');
			var $btnspan = $('.tab-content ol span');
			var $liwidth = $aLi.eq(0).innerWidth();
			var $index = 0;

			var $timer = setInterval(function () {
				Timer();
			}, 2000);

			$btnspan.hover(function () {
				clearInterval($timer);
				$index = $(this).index();
				$btnspan.eq($index).addClass('active').siblings('span').removeClass('active');
				$oUl.css({
					left: -$index * $liwidth
				})
			}, function () {
				$timer = setInterval(function () {
					Timer();
				}, 2000);
			});
			//无缝滚动的封装函数
			function Timer() {
				$index++;
				$btnspan.eq($index).addClass('active').siblings('span').removeClass('active');
				$oUl.animate({
					left: -$index * $liwidth
				}, 500, function () {
					if ($index == $aLi.size() - 1) {
						$index = 0;
						$btnspan.eq($index).addClass('active').siblings('span').removeClass('active');
						$oUl.css({
							left: 0
						});
					}
				})
			}

			//专业客服导购
			$('.tab-dg').hover(function () {
				$(this).css({
					'background': '#f60',
					'color': '#fff'
				});
				$('.my_link').css('background-position', '-33px 0');
			}, function () {
				$(this).css({
					'background': '#fff',
					'color': '#f60'
				});
				$('.my_link').css('background-position', '0 0')
			});

			//商品加入购物车
			var sidarr = []; // 编号 数组
			var numarr = []; // 数量 数组
			//获取cookie转换成数组
			function getCookievalue() {
				if (getCookie('cartsid') && getCookie('cartnum')) {
					sidarr = getCookie('cartsid').split(',');
					numarr = getCookie('cartnum').split(',');
				}
			}

			$('.addcar').on('click', function () {
				if (confirm('已成功加入购物车！')) {
					var sid = $(this).parents('.d_main').find('#spic img').attr('sid');
					// alert(sid);
					getCookievalue();
					if ($.inArray(sid, sidarr) != -1) { //存在

						// alert('存在');
						// console.log(numarr);
						// console.log($.inArray(sid,sidarr));
						// console.log(parseInt(numarr[$.inArray(sid,sidarr)]));
						// console.log(parseInt($('#number').val()));
						var num = parseInt(numarr[$.inArray(sid, sidarr)]) + parseInt($('#number').val());
						numarr[$.inArray(sid, sidarr)] = num; //新数量覆盖原先的数量
						addCookie('cartnum', numarr, 30);

					} else { //不存在
						sidarr.push(sid);
						addCookie('cartsid', sidarr, 30);
						numarr.push($('#number').val());
						addCookie('cartnum', numarr, 30);
					}
				}

			});

			//增加商品数量
			$('.btn-add').on('click', function (e) {
				e.preventDefault();
				var $count = $(this).parents('.choose_count').find('input').val();
				$count++;
				if ($count >= 99) {
					$count = 99;
				}
				$(this).parents('.choose_count').find('input').val($count);
				setcookie($(this));
			});

			//减少商品数量
            $('.btn-reduce').on('click', function () {
                var $count = $(this).parents('.choose_count').find('input').val();
                $count--;
                if ($count <= 1) {
                    $count = 1;
                }
                $(this).parents('.choose_count').find('input').val($count);
                setcookie($(this));
			});
			
			//将改变后的数量的值存放到cookie
            function setcookie(obj) {
                cookieToArray();
                var $index = obj.parents('.d_main').find('#spic img').attr('sid');
                numarr[sidarr.indexOf($index)] = obj.parents('.d_main').find('.choose_count input').val();
                addCookie('cartnum', numarr.toString(), 30);
			}
			
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

		}(),


		//数据渲染
		details_mid_shuju: ! function () {
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
						"src": value.url.split(',')[1],
						"sid": value.sid
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
		}(),
		//商品小图数据的详情
		details_right_shuju: ! function () {
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
		}()
	}

});