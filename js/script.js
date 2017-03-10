'use string';

function Task(){
	var self = this;
	this.init = function(){
        this.select();
        this.app();
        this.clear();
	};
	this.data = [];
	this.param = [
		{
			top: 0,
            right: 67.5,
			bottom: 50.65,
			left:0
		},
		{
			top: 0,
            right: 33.5,
			bottom: 50.65,
			left: 33.5
		},
		{
			top: 0,
            right: 0,
			bottom: 50.65,
			left: 67.5
		},
		{
			top: 50.65,
            right: 67.5,
			bottom: 0,
			left:0
		},
		{
			top: 50.65,
            right: 33.5,
			bottom: 0,
			left: 33.5
		},
		{
			top: 50.65,
            right: 0,
			bottom: 0,
			left: 67.5
		}
	];
   	this.select = function(){
   		$(".banner-box").click(function () {
            $(this).toggleClass("banner-active");
        });
   	};
    this.adding = function (css) {
        $("<div class='banner-box'></div>").appendTo(".banner-container2").css(css).data("index", self.data.length);
        $(".banner-active").addClass("banner-checked").removeClass("banner-active");
        self.data.push(css);
        console.dir(self.data);
    };
   	this.app = function () {
   		$(".banner-btn1").click(function () {
   			var result = null,
				top, right,	bottom,	left, numb1, numb2, numb3, numb4;

            switch( $(".banner-active:not(.banner-checked)").length ){
				case 1:
                    // $(".active").clone().appendTo(".container2");
                    numb1 = $($(".banner-active")[0]).data("numb") - 1;
                    top = self.param[numb1].top + "%";
					bottom = self.param[numb1].bottom + "%";
                    right = self.param[numb1].right + "%";
                    left = self.param[numb1].left + "%";
                    result = {
                        top: top,
                        bottom: bottom,
                        right: right,
                        left: left
                    };
                    console.log(`result: { t: ${result.top}, r: ${result.right}, b: ${result.bottom}, l: ${result.left} }`);

                    self.adding(result);

                    break;
				case 2:
					numb1 = $($(".banner-active")[0]).data("numb") - 1;
					numb2 = $($(".banner-active")[1]).data("numb") - 1;
					console.log(numb1, numb2);
					arr = [[0,1],[0,3],[1,2],[1,0],[1,4],[2,1],[2,5],[3,0],[3,4],[4,1],[4,3],[4,5],[5,4],[5,2]];
                    for (var i=0; i<arr.length; i++){
                    	if(numb1 == arr[i][0] && numb2 == arr[i][1]){
                    		if(self.param[numb1].top == self.param[numb2].top){
                                top = self.param[numb1].top + "%";
								right = Math.min(self.param[numb1].right, self.param[numb2].right) + "%";
								bottom = self.param[numb1].bottom + "%";
								left = Math.min(self.param[numb1].left, self.param[numb2].left) + "%";
								result = {
									top: top,
									bottom: bottom,
									right: right,
									left: left
								}
							} else {
                                right = self.param[numb1].right + "%";
                                left = self.param[numb1].left + "%";
                                result = {
                                    top: 0,
                                    bottom: 0,
                                    right: right,
                                    left: left
                                }
							}
                            // $(".banner-active").removeClass("active");
                            console.log(`result: { t: ${result.top}, r: ${result.right}, b: ${result.bottom}, l: ${result.left} }`);
                            break;
						}
					}
                    if(result){

                        self.adding(result);

					} else {
                    	alert("не правильный выбор");
					}

                    break;
				case 3:
                    numb1 = $($(".banner-active")[0]).data("numb") - 1;
                    numb2 = $($(".banner-active")[1]).data("numb") - 1;
                    numb3 = $($(".banner-active")[2]).data("numb") - 1;
                    console.log(numb1, numb2, numb3);
                    if(self.param[numb1].top == self.param[numb2].top && self.param[numb2].top == self.param[numb3].top){
                        bottom = self.param[numb1].bottom + "%";
                        top = self.param[numb1].top + "%";
                        result = {
                            top: top,
                            bottom: bottom,
                            right: 0,
                            left: 0
                        }

                        self.adding(result);

					} else {
                        alert( 'не правельный выбор' );
					}
                    break;

				case 4:
                    numb1 = $($(".banner-active")[0]).data("numb") - 1;
                    numb2 = $($(".banner-active")[1]).data("numb") - 1;
                    numb3 = $($(".banner-active")[2]).data("numb") - 1;
                    numb4 = $($(".banner-active")[3]).data("numb") - 1;
                    console.log(numb1, numb2, numb3, numb4);

                    if( (numb1 == 0 && numb2 == 1 && numb3 == 3 && numb4 == 4) || (numb1 == 1 && numb2 == 2 && numb3 == 4 && numb4 == 5 )){

                        top = 0;
                        bottom = 0;
                        right = Math.min(self.param[numb1].right, self.param[numb2].right, self.param[numb3].right, self.param[numb4].right) + "%";
						left = Math.min(self.param[numb1].left, self.param[numb2].left, self.param[numb3].left, self.param[numb4].left) + "%";
						result = {
                            top: top,
                            bottom: bottom,
                            right: right,
                            left: left
                        };
                        console.log(`result: { t: ${result.top}, r: ${result.right}, b: ${result.bottom}, l: ${result.left} }`);

                        self.adding(result);

                    } else {
                        alert( 'не правельный выбор' );
                    }
                    break;
				case 6:
                    result = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0
                    };

                    self.adding(result);

                    break;
                default:
                    alert( 'не правельный выбор' );
			}

        });
    };

   	this.clear = function () {
		$(".banner-btn2").click(function () {
			$(".banner-container2").html("");
			$(".banner-checked").removeClass("banner-checked");
			self.data = [];
        });
    };


    this.init();
}

$(window).ready(function(){
	var task = new Task();
});
