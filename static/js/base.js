$(document).ready(
	function(){
		var $t = $(".menu dt");
		$t.siblings("dd").eq(0).css("display","block");
		$t.click(function(){
			$t.siblings("dd").slideUp("speed");
			if($(this).next("dd").css("display") == "none"){
				$(this).next("dd").slideDown("speed");
			}
			else{
				$(this).next("dd").slideUp("speed");
			}
		});
		var $m = $(".menu dd li");
		$m.click(function()
			{
			$m.removeClass();
			$(this).addClass("current");
		});
		var $b = $(".toggle_btn");
		$b.toggle(function(){
			$("#page").css("margin-left","4px");
			$(".user").css("width",0);
		},
		function(){
			$("#page").css("margin-left","200px");
			$(".user").css("width","196px");
		}
		);
	}
);
