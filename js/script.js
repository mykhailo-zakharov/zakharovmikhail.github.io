function Task(){
	var self = this;
	var col,
	images = ["slider_1.jpg","slider_2.jpg","slider_3.jpg","slider_4.jpg","slider_5.jpg",
   		"slider_6.jpg","slider_7.jpg","slider_8.jpg","slider_9.jpg","slider_10.jpg",],
	listImg = [];

	this.init = function(){
		this.menuMob();
		this.slider();
	}

   	this.menuMob = function(){
   		$(".burger-menu").click(function () {
	   			$(this).toggleClass("menu-on");
	   			$(".nav>.container").slideToggle();
		});
   	}

   	this.slider = function(resize){
		console.log("start slider");		

   		var window_width = $( window ).width(),
		item_width = $( ".slider-item" ).outerWidth(true);
		col = Math.ceil( ( window_width + item_width * 0.5 ) / item_width);
		console.log(`( ${window_width} + ${item_width} * 0.5 ) / ${item_width}`);
		var wrap_width = item_width * col + 3,
   		html = "",
   		line = [];
   			console.log(`col: ${col}`);
   		for (var i = 0; i < col; i++) {
   			html += "<div class='slider-item'><div class='slider-inner'><div class='slider-img'></div></div></div>";
   		}

   		$(".slider")
   			.css({
   				"width": wrap_width,
   				"left": -( wrap_width - window_width ) / 2
   			})
   			.html( html );

		$( ".slider-img" ).each(function(i){
			$( this ).css("background", "url(../img/" + images[i] + ")");
			listImg.push( i );
		});

		if(!resize){
			setTimeout(function(){
				self.changeImg();
			},2000);
			console.log("main start");
		}
   	}

	this.random = function(numb) {
		var rand = Math.random() * numb;
		rand = Math.round(rand);
		return rand;
	}

	this.changeImg = function(){
		console.log("start changeImg");
		var is = false,
		eq = self.random(col),
		item = $( ".slider-img" ).eq( eq ),
		img;
		while( is == false){
			img = self.random(images.length - 1);
			var result = listImg.indexOf(img);
			if( result == -1 ){
				is = true;
			}
		}
		listImg[eq] = img;
		item.addClass("slider-rotate");

		var timer_1 = setTimeout(function(){
			item.css("background", "url(../img/" + images[ img ] + ")")
				.removeClass("slider-rotate");	
		},400);

		var timer_2 = setTimeout(function(){
			self.changeImg();
		},3000);

	}


    this.init();
}
$(window).ready(function(){
	var task = new Task();



	$( ".work-slider-box" ).slick({
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
	});

	$( ".fancybox" ).fancybox();


	$( "#tabs" ).tabs({
		active: 0,
		activate: function( event, ui ) {
			var item = ui.newPanel[0].id;
			console.log( item[5] );
			$( ".tabs-list" ).hide();
			$( "."+item ).css("display", "table");

			switch( +item[5] ) {
			  case 1:
			    $( ".tabs-arow" ).css("margin-left", "10%");
			    break;

			  case 2:
			    $( ".tabs-arow" ).css("margin-left", "36%");
			    break;

			  case 3:
			    $( ".tabs-arow" ).css("margin-left", "65%");
			    break;

			  case 4:
			    $( ".tabs-arow" ).css("margin-left", "88%");
			    break;
			}

		}});

		$( "#accordion" ).accordion({
			collapsible: true,
			active: false,
			heightStyle: "content",
			icons: { "header": "ui-icon-caret-1-s", "activeHeader": "ui-icon-caret-1-n" }
		});

});
