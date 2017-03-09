'use string';

function Task(){
	var self = this;
	this.init = function(){
        this.select();
        this.adding();
        this.clear();
	};
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
   		$(".box").click(function () {
            $(this).toggleClass("active");
        });
   	};
   	this.adding = function () {
   		$(".btn1").click(function () {
   			var result = null,
				top, right,	bottom,	left, numb1, numb2, numb3;

            switch( $(".active").length ){
				case 1:
                    // $(".active").clone().appendTo(".container2");
                    numb1 = $($(".active")[0]).data("numb") - 1;
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

                    $("<div class='box'>").appendTo(".container2").css(result);
                    $(".active").removeClass("active");
                    break;
				case 2:
					numb1 = $($(".active")[0]).data("numb") - 1;
					numb2 = $($(".active")[1]).data("numb") - 1;
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
                            $(".active").removeClass("active");
                            console.log(`result: { t: ${result.top}, r: ${result.right}, b: ${result.bottom}, l: ${result.left} }`);
                            break;
						}
					}
                    if(result){

                        $("<div class='box'>").appendTo(".container2").css(result);
					} else {
                    	alert("не правильный выбор");
					}

                    break;
				case 3:
                    numb1 = $($(".active")[0]).data("numb") - 1;
                    numb2 = $($(".active")[1]).data("numb") - 1;
                    numb3 = $($(".active")[2]).data("numb") - 1;
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
                        $("<div class='box'>").appendTo(".container2").css(result);
                        $(".active").removeClass("active");
					} else {
                        alert( 'не правельный выбор' );
					}
                    break;

				// case 4:
                //
                 //    break;
				// case 6:
                //
                 //    break;
                default:
                    alert( 'не правельный выбор' );
			}





        });
    };

   	this.clear = function () {
		$(".btn2").click(function () {
			$(".container2").html("");
        });
    }


    this.init();
}

$(window).ready(function(){
	var task = new Task();
});
