function Task(){
	var self = this;
	this.init = function(){

		this.menu();
		this.selectMenu();

	}

   	this.menu = function(){

   		$(".icon_menu, .close").click(function () {
	   			$(".header").toggleClass("open");
		});

   	}

   	this.selectMenu = function(){

   		$( "select" ).selectmenu();

   	}


    this.init();
}
$(window).ready(function(){
	var task = new Task();
});



window.onload = function(){
	$(".preloader").fadeOut(500,function(){
		$(".preloader").hide();
	});
}



$(document).ready(function() {


 if( $("#owl-carousel").length ) {

	$(".svg_footer").hide();

	$( "body" ).addClass("index-page");

	   var time = 7; // time in seconds
	  
	   var $progressBar,
	       $bar, 
	       $elem, 
	       isPause, 
	       tick,
	       percentTime;
	  
	     //Init the carousel
	     $("#owl-carousel").owlCarousel({
	       slideSpeed : 500,
	       paginationSpeed : 500,
	       singleItem : true,
	       afterInit : progressBar,
	       afterMove : moved,
	       startDragging : pauseOnDragging,
	       // transitionStyle : "fade"
	       // transitionStyle : "fadeUp"
	       // transitionStyle : "backSlide"
	       // transitionStyle : "goDown"
	     });
	  
	     //Init progressBar where elem is $("#owl-demo")
	     function progressBar(elem){
	       $elem = elem;
	       //build progress bar elements
	       buildProgressBar();
	       //start counting
	       start();
	     }
	  
	     //create div#progressBar and div#bar then prepend to $("#owl-demo")
	     function buildProgressBar(){
	       $progressBar = $("<div>",{
	         id:"progressBar"
	       });
	       $bar = $("<div>",{
	         id:"bar"
	       });
	       $progressBar.append($bar).prependTo($elem);
	     }
	  
	     function start() {
	       //reset timer
	       percentTime = 0;
	       isPause = false;
	       //run interval every 0.01 second
	       tick = setInterval(interval, 10);
	     };
	  
	     function interval() {
	       if(isPause === false){
	         percentTime += 1 / time;
	         $bar.css({
	            width: percentTime+"%"
	          });
	         //if percentTime is equal or greater than 100
	         if(percentTime >= 100){
	           //slide to next item 
	           $elem.trigger('owl.next')
	         }
	       }
	     }
	  
	     //pause while dragging 
	     function pauseOnDragging(){
	       isPause = true;
	     }
	  
	     //moved callback
	     function moved(){
	       //clear interval
	       clearTimeout(tick);
	       //start again
	       start();
	     }
	  
	     //uncomment this to make pause on mouseover 
	     // $elem.on('mouseover',function(){
	     //   isPause = true;
	     // })
	     // $elem.on('mouseout',function(){
	     //   isPause = false;
	     // })
	  
	}

});