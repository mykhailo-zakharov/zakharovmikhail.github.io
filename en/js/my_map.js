var listStory = [
	["10","15", "img/ava.png", "Shorena Kravelidze", "Shida Kartli", "Kurta", "30", "'My name is Shorena Kravelidze. I am 39 years old. From the beginning I was not able to attend school, so my teachers were visiting me at home. I had a negative attitude about studying.'", "stories-single.html"],
	["50","50", "img/photo1.jpg", "Roky",  "Shida Kartli2", "Kurta2", "20", "'My name is Shorena Kravelidze. I am 39 years old. From the beginning I was not able to attend school, so my teachers were visiting me at home. I had a negative attitude about studying.I was not able to attend school, so my teachers were visiting me at home. I had a negative attitude about studying.'2", "stories-single.html"],
	["80","60", "img/photo2.jpg", "Test Name",  "Shida Kartli3", "Kurta3", "37", "'My name is Shorena Kravelidze. I am 39 years old. From the beginning I was not able to attend school, so my teachers were visiting me at home. I had a negative attitude about studying.'3", "stories-single.html"],
	["45","70", "img/smile.jpg", "Test Name",  "Shida Kartli3", "Kurta3", "37", "'My name is Shorena Kravelidze. I am 39 years old. From the beginning '3", "stories-single.html"]
];
//[0:coordinat X, 1:coordinat Y, 2:img, 3:Name, 4:Region, 5:City, 6:Age, 7:Text, 8:Link]

function SvgMap() {
		var viewBox3 = 5200,
		viewBox4 = 3000,
		koefMoveX = viewBox3 / 100,
		koefMoveY = viewBox4 / 100;

	for (var i = 0; i < listStory.length; i++) {
		// listStory[i]
		$( svg_map ).append( "<g><circle r='20' cx='"+listStory[i][0] * koefMoveX+"' cy='"+listStory[i][1] * koefMoveY+"' class='dot_mini' /><circle data-id='"+i+"' r='30' cx='"+listStory[i][0] * koefMoveX+"' cy='"+listStory[i][1] * koefMoveY+"' class='dot_big' /></g>" );
	}

		// $( svg_map ).append( "<g><circle r='20' cx='1000' cy='900' class='dot_mini' /><circle data-id='0' r='30' cx='1000' cy='900' class='dot_big' /></g>" );
		$("#container-map").html( $("#container-map").html() );

		var popUp = $( "#pop-up" );

		$( popUp ).hover(function(){

			}, function(){
				popUp.offset( {top: -500, left: -500} );
		})

		$(".dot_big").hover(function(){

				var  item = $( this ),
				id = item.data("id");
 
				$(".pop-up_img").attr("src", listStory[id][2]);
				$(".pop-up_name").text( listStory[id][3] );
				$(".pop-up_region").text( listStory[id][4] );
				$(".pop-up_city").text( listStory[id][5] );
				$(".pop-up_age").text( listStory[id][6] );
				$(".stories-single_text").text( listStory[id][7] );
				$(".pop-up_limk").attr("href", listStory[id][8] );

				var positionCoordin = $(this).position(),
				outerHeight = $(popUp).outerHeight(),
				outerWidth = $(popUp).outerWidth();

				if( outerHeight < $(this).position().top && outerWidth < $( window ).width() - positionCoordin.left ){
					popUp.offset( {top : positionCoordin.top - outerHeight - 5, left : positionCoordin.left} );
				} else if ( outerHeight < $(this).position().top && outerWidth > $( window ).width() - positionCoordin.left ){
					popUp.offset( {top : positionCoordin.top - outerHeight - 5, left : positionCoordin.left - outerWidth +5 } );
				} else if( outerHeight > $(this).position().top && outerWidth < $( window ).width() - positionCoordin.left ) {
					popUp.offset( {top : positionCoordin.top + 20, left : positionCoordin.left } );
				} else {
					popUp.offset( {top : positionCoordin.top + 20, left : positionCoordin.left - outerWidth +5 } );
				}

				popUp.addClass("hardVisible");

		}, function(){	
				popUp.removeClass("hardVisible");
		});


		var self = this,
		box = document.getElementById('container-map'),
		svg = document.getElementById('svg_map'),
		// BtnScale = document.getElementById('btn-scale'),
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
		stepX = viewBox3 * 0.05,
		stepY = viewBox4 * 0.05,
		sizeDotMini = 4,
		sizeDotBig = 7;
		sizeDotBigStroke = 2;

		this.init = function(){
			this.mouseScroling();
			this.mouseMove();
			this.setFontSize();
		}

	this.setFontSize = function(){
		var koef = viewBox3 / $( box ).width();
		h1_fontSize = Math.round( parseInt( $(".svg_h1").css("font-size") ) * koef);
		h2_fontSize = Math.round( parseInt( $(".svg_h2").css("font-size") ) * koef);
		strokeWidth = Math.round( parseInt( $(".oblast").css("stroke-width") ) * koef);
		sizeDotMini = Math.round( sizeDotMini * koef);
		sizeDotBig = Math.round( sizeDotBig * koef);
		sizeDotBigStroke = Math.round( sizeDotBigStroke * koef);
		$(".svg_h1").css( "font-size", h1_fontSize );
		$(".svg_h2").css( "font-size", h2_fontSize );
		$(".oblast").css("stroke-width", strokeWidth);
		$(".dot_mini"). attr("r", sizeDotMini);
		$(".dot_big"). attr("r", sizeDotBig).attr("stroke-width", sizeDotBigStroke);
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

		  console.log(tempDelta);

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

		if(btnScale >= 1 && btnScale < 2) {

		  	// BtnScale.innerHTML = btnScale;

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
    		$(".dot_mini"). attr("r", sizeDotMini * koeScale );
			$(".dot_big"). attr("r", sizeDotBig * koeScale ).css("stroke-width", sizeDotBigStroke * koeScale );

		} else if( btnScale <= 1) {
			tempDelta = 0;
			moveX = 0;
			moveY = 0;
			svg.setAttribute("viewBox", "0 0 " + viewBox3 + " " + viewBox4 );

		} else {

			tempDelta = -1000;
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

				// console.log("check: X( "+viewBox1_new+", "+centerX+" ) Y( "+viewBox2_new+", "+ centerY+" )");

	}



		$("#btn-plus").click(function(){
			$( this ).fadeOut(0).fadeIn(0);

			tempDelta -= 100;

			btnScale = 1 - tempDelta / 1000;

			self.scroling(-100);

		});


		$("#btn-minus").click(function(){
			$( this ).fadeOut(0).fadeIn(0);

			tempDelta += 100;

			btnScale = 1 - tempDelta / 1000;

			self.scroling(100);

		});

		this.init();
}




if( $("#container-map").length ){

	my_map = new SvgMap();

}