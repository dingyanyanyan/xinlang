$(function() {
	$("#btn").tap(function() {
		$("#three-1").css({
			"display": "block"
		})
		$("#three-2 ul li").tap(function() {
			$(this).addClass("active").siblings().removeClass("active");
			$("#three-1").css({
				"display": "none"
			})
		})
	})
});