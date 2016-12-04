function Task(){
	var self = this;
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
   			$(".worksWrapLargeImg").attr( "src", $(this).data("src") ).data("src", $(this).parent().index() );
   			$(".worksDescribe").text( $(this).data("describe") );
   		});

   		$(".btnNext").click(function(){
			var newEq = +$(".worksWrapLargeImg").data("eq") + 1;
			if( newEq == $(".worksWrapMiniatureImg").length ){
				newEq = 0;
			}
	   		self.setLargeImg( newEq );
   		});

   		$(".btnPrev").click(function(){
			var newEq = +$(".worksWrapLargeImg").data("eq") - 1;
			if( newEq == 0 ){
				newEq = $(".worksWrapMiniatureImg").length;
			}
	   		self.setLargeImg( newEq );
   		});
   	}
   	this.setLargeImg = function(eq){
   		var elem = $(".worksWrapMiniatureImg").eq( eq );
   		$(".worksWrapLargeImg").attr("src", elem.data("src") ).data("eq", eq);
   		$(".worksDescribe").text( elem.data("describe") );
   	}

    this.init();
}
$(window).ready(function(){
	var task = new Task();
});
