;$(function(){
//	loadHtml("common/hearder.html","header");
//轮播
//timer;

$("#banner li").eq(0).addClass("lon");
var index = 0;
var timer=setInterval(function(){
	if(index==$("#banner img").length)
	index=0;
	$("#banner img").eq(index).fadeIn(500);
	$("#banner img").eq(index).siblings("img").fadeOut(500);
	$("#soll li").eq(index).addClass("lon").siblings().removeClass("lon");
	index++;
},2000)
$("#soll li").mouseover(function(){
	clearInterval(timer);
	$(this).addClass("lon").siblings().removeClass();
	index = $(this).index();
	$("#banner img").eq(index).fadeIn(500);
	$("#banner img").eq(index).siblings("img").fadeOut(500);
})
$("#banner").mouseover(function(){
	clearInterval(timer);
})
$("#banner").mouseout(function(){
	timer;
})
//立即抢购
	$(".main").mouseover(function(){
		$(this).find(".ccc").css("display","block");
	})
	$(".main").mouseout(function(){
		$(this).find(".ccc").css("display","none");
	})
//热门品牌效果
$("#mainHot ul li").mouseover(function(){
	var a = $(this)[0].offsetLeft;
		$("#em").stop().animate({left: a},200);$(".list").eq($(this).index()).addClass("firstList").siblings().removeClass("firstList");
		$(".first").css("display", "block");
	})

$(".listMain").mouseover(function(){
	$(this).find("div").stop().animate({top:-150},100);
	})
$(".listMain").mouseout(function(){
	$(this).find("div").stop().animate({"top": "0"},100);
})
});
