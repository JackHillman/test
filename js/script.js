$(document).ready(function() {
	
	var firstClick = true;
	
	function hide()
	{
		if (firstClick === true)
		{
			$(".hidden").css("opacity", "0.4");
			$(".hidden2").css("top", "0");
			$(".hidden2").css("height", "100vh");
			$(".hidden2").css("width", "300px");
		}
		else
		{
			$(".hidden").css("opacity", "0");
			$(".hidden2").css("top", "-100px");
			$(".hidden2").css("height", "100px");
			$(".hidden2").css("width", "100px");
		}
		firstClick = !firstClick;
	}
	
	$("button").click(hide);
	
});