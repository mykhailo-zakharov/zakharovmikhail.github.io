
function My_map() {

		var self = this,
		box = document.getElementById('container-test'),
		svg = document.getElementById('svg_map'),
		BtnScale = document.getElementById('btn-scale'),
		btnScale = 1,
		tempDelta = 0,
		viewBox1 = 0,
		viewBox2 = 0,
		viewBox3 = 5200,
		viewBox4 = 3000,
		viewBox1_new = 0,
		viewBox2_new = 0,
		viewBox3_new = viewBox3,
		viewBox4_new = viewBox4,
		h1_fontSize,
		h2_fontSize,
		strokeWidth,
		moveX = 0,
		moveY = 0,
		centerX = 1,
		centerY = 1,
		maxMoveX,
		maxMoveY,
		koefMoveX = viewBox3 / $(box).width(),
		koefMoveY = viewBox4 / $(box).height(),
		stepX = viewBox3 *0.05,
		stepY = viewBox4 *0.05;

		this.init = function(){
			this.mouseScroling();
			this.mouseMove();
			this.setFontSize();
			// this.scroling();
		}

	this.setFontSize = function(){
		var koef = viewBox3 / $( box ).width();
		h1_fontSize = Math.round( parseInt( $(".svg_h1").css("font-size") ) * koef);
		h2_fontSize = Math.round( parseInt( $(".svg_h2").css("font-size") ) * koef);
		strokeWidth = Math.round( parseInt( $(".oblast").css("stroke-width") ) * koef);
		$(".svg_h1").css( "font-size", h1_fontSize );
		$(".svg_h2").css( "font-size", h2_fontSize );
		$(".oblast").css("stroke-width", strokeWidth);
	}
	this.mouseScroling = function(){

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

		  self.scroling(delta);

		  // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		  e.preventDefault();
		  return false;
		}

	}
	

	this.mouseMove = function(){

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

		  	// console.log(moveX +" " + koefMoveX +"  "+ positionX_new +"   "+ btnScale);

		  	
		  	self.checkVerge();

		 	
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


	}


	this.scroling = function(delta){

		if(btnScale >= 1) {

		  	BtnScale.innerHTML = btnScale;

		  	var koeScale = 1 - (btnScale - 1);

		  	viewBox3_new = viewBox3 * koeScale;
		  	viewBox4_new = viewBox4 * koeScale;

			if(delta < 0){
			  	viewBox1_new = moveX + stepX ;
			  	viewBox2_new = moveY + stepY ;
			} else {
				viewBox1_new = moveX - stepX ;
			  	viewBox2_new = moveY - stepY ;
			  	// alert();
			}

		  	self.checkVerge();

			moveX = viewBox1_new;
			moveY = viewBox2_new;
		  
		    svg.setAttribute("viewBox", viewBox1_new + " " + viewBox2_new + " " + viewBox3_new + " " + viewBox4_new );

		    $(".svg_h1").css("font-size", h1_fontSize * koeScale );
		    $(".svg_h2").css("font-size", h2_fontSize * koeScale );
		    $(".oblast").css("stroke-width", strokeWidth * koeScale );

		} else {
			tempDelta = 0;
			moveX = 0;
			moveY = 0;
			svg.setAttribute("viewBox", "0 0 " + viewBox3 + " " + viewBox4 );
		}

	}

	
	this.checkVerge = function(){

			centerX = viewBox3 * ( btnScale  - 1);
			centerY = viewBox4 * ( btnScale  - 1);

		  	if( moveX > centerX ){
		  		viewBox1_new = centerX;
		  	}

		  	if( moveY > centerY ){
		  		viewBox2_new = centerY;
		  	}

			if( viewBox1_new < 0){
				viewBox1_new = 0;
			}

			if( viewBox2_new < 0){
				viewBox2_new = 0;
			}

				console.log("check: X( "+viewBox1_new+", "+centerX+" ) Y( "+viewBox2_new+", "+ centerY+" )");

	}


		$("#btn-plus").click(function(){

			tempDelta -= 100;

			btnScale = 1 - tempDelta / 1000;

			self.scroling(-100);

		});


		$("#btn-minus").click(function(){

			tempDelta += 100;

			btnScale = 1 - tempDelta / 1000;

			self.scroling(100);

		});

		this.init();
}





setTimeout(function(){
	my_map = new My_map();
},1000)

