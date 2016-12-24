// function Task(){
// 	var self = this;
// 	this.init = function(){


// 	}
//    	this.menu = function(){
//    		$(".burger-menu").click(function () {
// 	   			$(this).toggleClass("menu-on");
// 	   			$(".headerContent").slideToggle();
// 		});
//    	}


//     this.init();
// }
// $(window).ready(function(){
// 	var task = new Task();
// });



// AIzaSyCBGdVzPnHxhIm7EJB43oX18K2mWdKSx5s

function maps() {

		var box = document.getElementById('container-test'),
		svg = document.getElementById('svg_map'),
		BtnScale = document.getElementById('btn-scale'),
		btnScale = 1,
		tempDelta = 0,
		viewBox1 = 0,
		viewBox2 = 0,
		viewBox3 = 2267,
		viewBox4 = 3401,
		viewBox1_new ,
		viewBox2_new,
		viewBox3_new = viewBox3,
		viewBox4_new = viewBox4,
		h1_fontSize = parseInt( $(".svg_h1").css("font-size") ),
		h2_fontSize = parseInt( $(".svg_h2").css("font-size") ),
		moveX = 0,
		moveY = 0,
		centerX = 1;
		centerY = 1;
		koefMoveX = viewBox3 / $(box).width(),
		koefMoveY = viewBox4 / $(box).height();


		//////////////////////////////////////// scroling
		if (box.addEventListener) {
		  if ('onwheel' in document) {
		    // IE9+, FF17+, Ch31+
		    box.addEventListener("wheel", onWheel);
		  } else if ('onmousewheel' in document) {
		    // устаревший вариант события
		    box.addEventListener("mousewheel", onWheel);
		  } else {
		    // Firefox < 17
		    box.addEventListener("MozMousePixelScroll", onWheel);
		  }
		} else { // IE8-
		  box.attachEvent("onmousewheel", onWheel);
		}

		function onWheel(e) {
		  e = e || window.event;

		  // wheelDelta не дает возможность узнать количество пикселей
		  var delta = e.deltaY || e.detail || e.wheelDelta;

		  // var info = document.getElementById('delta');
		 tempDelta += delta;

		  btnScale = 1 - tempDelta / 1000;

		  scrolling(e.deltaX, e.deltaY);

		  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		}

		//////////////////////////////////////// move

		// var box = document.getElementById('box');

		box.onmousedown = function(e) { // 1. отследить нажатие
			var positionX = e.pageX;
			var positionY = e.pageY;
			var positionY_new;
			var positionX_new;


		  // moveAt(e);


		  // box.style.zIndex = 1000; 
		  function moveAt(e) {
		  	positionX_new = positionX - e.pageX;
		  	positionY_new = positionY - e.pageY;

		  	positionX = e.pageX;
		  	positionY = e.pageY;

		    



		  	viewBox1_new = moveX + koefMoveX * positionX_new / btnScale;
		  	viewBox2_new = moveY + koefMoveY * positionY_new / btnScale;

		  	console.log(moveX +" " + koefMoveX +"  "+ positionX_new +"   "+ btnScale);

		  	checkMove();

		 	
		 	moveX = viewBox1_new;
		 	moveY = viewBox2_new;

		    svg.setAttribute("viewBox", viewBox1_new + " " + viewBox2_new + " " + viewBox3_new + " " + viewBox4_new );



		  }


		  document.onmousemove = function(e) {
		    moveAt(e);
		  }

		  // 4. отследить окончание переноса
		  box.onmouseup = function() {
		    document.onmousemove = null;
		    box.onmouseup = null;
		  }
		}

		box.ondragstart = function() {
		  return false;
		};



		////////////////////////////////////////////


		function scrolling(x, y){

			  if(btnScale >= 1) {

		  	BtnScale.innerHTML = btnScale;


		  	viewBox3_new = viewBox3 / btnScale;
		  	viewBox4_new = viewBox4 / btnScale;


			  	viewBox1_new = centerX * ( viewBox3 - viewBox3_new ) / 2;

			  	viewBox2_new = centerY * ( viewBox4 - viewBox4_new ) / 2;


		  	checkMove();

			moveX = viewBox1_new;
			moveY = viewBox2_new;
		  
		    svg.setAttribute("viewBox", viewBox1_new + " " + viewBox2_new + " " + viewBox3_new + " " + viewBox4_new );

		    $(".svg_h1").css("font-size", h1_fontSize / btnScale );

		    $(".svg_h2").css("font-size", h2_fontSize / btnScale );

			  } else {
			  	tempDelta = 0;
			  	moveX = 0;
			  	moveY = 0;
			  	svg.setAttribute("viewBox", "0 0 " + viewBox3 + " " + viewBox4 );
			  }

		}
		////////////////////////////////// check move
		function checkMove(){

		  	if( moveX > (viewBox3 - viewBox3_new) ){
		  		moveX = viewBox3 - viewBox3_new;
		  		console.log("check="+viewBox3 -  viewBox3_new);
		  	}

			if( viewBox1_new < 0){
				viewBox1_new = 0;
				console.log("checkX=0");
			}

			if( viewBox2_new < 0){
				viewBox2_new = 0;
				console.log("checkY=0");
			}

		}
		/////////////////////////////////////////

		$("#btn-plus").click(function(){

			tempDelta -= 100;

			btnScale = 1 - tempDelta / 1000;

			scrolling();

		});


		$("#btn-minus").click(function(){

			tempDelta += 100;

			btnScale = 1 - tempDelta / 1000;

			scrolling();

		});




}




function map_plugin(){

	      window.onload = function() {
        // Expose to window namespase for testing purposes
        window.zoomTiger = svgPanZoom('#svg_map', {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
        });
      };

}