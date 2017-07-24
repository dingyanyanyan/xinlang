$(function(){
	var flag=false;
	$("#xinxi").on("tap",function(){
		flag=!flag;
		show()
	})
	function show(){
		if(flag){
			$(".account").show()
		}else{
			$(".account").hide()
		}
	}
	$(".account").on("tap",function(){
		flag=false;
		show();
	})
	
	$(".hou").tap(function(){
			window.location = "../set/geren-home.html";
		})
	
})

