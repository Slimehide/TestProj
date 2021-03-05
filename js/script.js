$(document).ready(function(){


	$(window).on("scroll" ,function(){
		if ($(window).width() > 991) {
			if ($(window).scrollTop() > 34) {
				$('header').addClass("fixed__header");
				$("header .left__header a img").css("opacity" , "0");
				$("header .left__header a img.logo__big").attr("src" , $("header .left__header a img.logo__big").attr("data-scroll"));
				$("header .left__header a img.logo__big").css("opacity" ,"1");
			} else{
				$("header").removeClass("fixed__header");
				$("header .left__header a img").css("opacity" , "0");
				$("header .left__header a img.logo__big").attr("src" , $("header .left__header a img.logo__big").attr("data-disabled"));
				$("header .left__header a img.logo__big").css("opacity" ,"1");
			}
		} else {
			if ($(window).scrollTop() > 15) {
				$('header').addClass("fixed__header");
				$("header .left__header a img").css("opacity" , "0");
				$("header .left__header a img.logo__tiny").attr("src" , $("header .left__header a img.logo__tiny").attr("data-scroll"));
				$("header .left__header a img.logo__tiny").css("opacity" ,"1");
			} else{
				$('header').removeClass("fixed__header");
				$("header .left__header a img").css("opacity" , "0");
				$("header .left__header a img.logo__tiny").attr("src" , $("header .left__header a img.logo__tiny").attr("data-disabled"));
				$("header .left__header a img.logo__tiny").css("opacity" ,"1");
			}
		}
				
	});

	$(".menu__button").on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("active__button")) {
			$("header .right__header .header__buttons ul").slideUp(400);
			$(this).removeClass("active__button");
		} else {
			$("header .right__header .header__buttons ul").slideDown(400);
			$(this).addClass("active__button");
		}
	});
});