function Task(){
	var self = this;
	var eqCurrent = 0;
	this.init = function(){
		self.menu();
		if( $(".works").length ){
			
			$(window).resize(function(){location.reload();});
			
			if( $(window).width() > 450 ){
				this.gallery();
			}
		}

	}
   	this.menu = function(){
   		$(".burger-menu").click(function () {
	   			$(this).toggleClass("menu-on");
	   			$(".headerContent").slideToggle();
		});
   	}
   	this.gallery = function(){

   		var firstPusk = 1;
   		// self.setLargeImg(0);

   		$(".worksWrapMiniatureImg").click(function(){
   			$(".worksWrapMiniatureItem").removeClass("active");
   			$(this).parent().addClass("active");

   			if(firstPusk){
   				firstPusk = 0;
   				var widthContainer = $(".container").outerWidth();
   				var widthMiniItem = $(".worksWrapMiniatureItem").outerWidth(true);
   				var widthMiniBox = 3 * widthMiniItem;
   				if($(window).width() < 768){var widthMiniBox = 2 * widthMiniItem;}
   				if($(window).width() < 550){var widthMiniBox = widthMiniItem;}
   				var widthBigBox = widthContainer - widthMiniBox;
   				var height = window.innerHeight - ($(".header").outerHeight(true) + $(".footerWrap").outerHeight(true) + $(".worksNaviLi").outerHeight(true) + $(".works").outerHeight(true) - $(".works").height()) - 30;
   				// console.log( $(".header").outerHeight(true)+"|"+$(".footerWrap").outerHeight(true)+"|"+$(".worksNaviLi").outerHeight(true)+"|"+$(".works").outerHeight(true)+"|"+$(".works").height() );
   				$(".innerImg").height( height -  $(".worksDescribe").outerHeight(true) );

				$(".worksWrapMiniature").animate({
			        width: widthMiniBox,
			        height: height
			      }, 500 );

				$(".worksWrapLarge").animate({
			        width: widthBigBox,
			        height: height
			      }, 500 );

				setTimeout(function(){
					var myScroll = new IScroll('.worksWrapMiniature', { scrollX: false, scrollY: true, mouseWheel: true });
				},700);

   			}


   			eqCurrent = $(this).parent().index();
   			self.setLargeImg( eqCurrent );

   		});

   		$(".btnNext").click(function(){
			eqCurrent += 1;
			if( eqCurrent == $(".worksWrapMiniatureImg").length ){
				eqCurrent = 0;
			}
	   		self.setLargeImg( eqCurrent );
   		});

   		$(".btnPrev").click(function(){
			eqCurrent -= 1;
			if( eqCurrent == 0 ){
				eqCurrent = $(".worksWrapMiniatureImg").length;
			}
	   		self.setLargeImg( eqCurrent );
   		});


		$(".worksWrapMiniatureItem").each(function(){
			var width = $(this).find("img").width();
			var height = $(this).find("img").height();
			$(this).append("<div class='after' style='width:"+width+"px; height:"+height+"px;'></div>");
		});


   	}
		$(".worksNaviLink").click(function(){
			$(".worksNaviLink").removeClass("active");
			$(this).addClass("active");
		});
   	//////end gallery
   	this.setLargeImg = function(eq){
   		var elem = $(".worksWrapMiniatureImg").eq( eq );
   		self.lazyLoadImgReset();
   		self.lazyLoadImgAddImg( elem.data("src") );

   		$(".worksDescribe").text( elem.data("describe") );

		$(".worksWrapMiniatureItem").removeClass("active").eq( eq ).addClass("active");
		// $(this).parent().addClass("active");
   	}

   		var $container = $('#worksWrapLarge');


	this.lazyLoadImgAddImg = function(src) {
	  // add new images
			  var items = '<div class="innerImg is-loading"><img src="'+src+'" /></div>';
			  $container.prepend( $(items) );
			  $container.imagesLoaded()
			    .progress( self.lazyLoadImgOnProgress );
	};

	this.lazyLoadImgReset = function(){
	  $container.empty();
	};

	this.lazyLoadImgOnProgress = function( imgLoad, image ) {
	  // change class if the image is loaded or broken
	  var $item = $( image.img ).parent();
	  $item.removeClass('is-loading');
	  if ( !image.isLoaded ) {
	    $item.addClass('is-broken');
	  }
	}


    this.init();
}
$(window).ready(function(){
	var task = new Task();
});














