function Task(){
	var self = this;
	var eqCurrent = 0;
	this.init = function(){
		self.menu();
		if( $(".works").length ){
			this.gallery();
		}

	}
   	this.menu = function(){
   		$(".burger-menu").click(function () {
	   			$(this).toggleClass("menu-on");
	   			$(".headerContent").slideToggle();
		});
   	}
   	this.gallery = function(){

   		self.setLargeImg(0);

   		$(".worksWrapMiniatureImg").click(function(){
   			// var eq = ;
   			eqCurrent = $(this).parent().index();
   			// $(".worksDescribe").text( $(this).data("describe") );


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
   	}
   	this.setLargeImg = function(eq){
   		var elem = $(".worksWrapMiniatureImg").eq( eq );
   		// $(".worksWrapLargeImg").attr("src", elem.data("src") ).data("eq", eq);
   		// $(".worksDescribe").text( elem.data("describe") );
   		self.lazyLoadImgReset();
   		self.lazyLoadImgAddImg( elem.data("src") );

   		$(".worksDescribe").text( elem.data("describe") );
   	}
   	// this.lazyLoadImg = function(){
   		var $container = $('#worksWrapLarge');
		// var loadedImageCount, imageCount;

		this.lazyLoadImgAddImg = function(src) {
		  // add new images
				  var items = '<li class="is-loading"><img src="'+src+'" /></li>';
				  $container.prepend( $(items) );
				  // use ImagesLoaded
				  $container.imagesLoaded()
				    .progress( self.lazyLoadImgOnProgress );
				    // .always( onAlways );
				  // reset progress counter
				  // imageCount = $container.find('img').length;
		};

		// reset container
		this.lazyLoadImgReset = function(){
		  $container.empty();
		};

		// triggered after each item is loaded
		this.lazyLoadImgOnProgress = function( imgLoad, image ) {
		  // change class if the image is loaded or broken
		  var $item = $( image.img ).parent();
		  $item.removeClass('is-loading');
		  if ( !image.isLoaded ) {
		    $item.addClass('is-broken');
		  }
		}
   	// }

    this.init();
}
$(window).ready(function(){
	var task = new Task();
});














