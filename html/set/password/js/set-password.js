
$(function(){
	
	
	
	$("#img1").on("tap",function(){
		$("#img2").css("display","block")
		$("#img1").css("display","none")
		$("#ipt").attr("type","password")
	})
	$("#img2").on("tap",function(){
		$("#img1").css("display","block")
		$("#img2").css("display","none")
		$("#ipt").attr("type","none")
	})
	
	$("#sit").on("tap",function(){
		$("#xian").css("display","block")
	})
	$("#xian").on("tap",function(){
		$(this).css("display","none")
	})
	document.addEventListener("touchmove",function(e){
		e.preventDefault()
	},{passive:false})
	var time=60;
	var timer=null;
	$("#time").tap(function(){
		if(time>=60){
			clearInterval(timer)
			timer=setInterval(function(){
				time--;
				if(time>0){
					$("#time").val(time+"s")
				}else if(time<=0){
					$("#time").val("发送验证码");
					time=60;
					clearInterval(timer)
				}
			},1000)
			$("#time").val(time+"s")
		}
		else{
			return;
		}
	})
	 var phone=$("#myText").html();
     var myphone=phone.substr(3,4);
     //alert(myphone)
     var lphone=phone.replace(myphone,"****");
     $("#myText").html(lphone);
})





