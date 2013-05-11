$(function(){
	init();
});

// header animation
var initHeader = function() {
	$("header").css({top:300, left:"auto"});
	$("section#navigation").css({top:600, left:"auto"});
	$("section#navigation").hide();
	console.log("initHeader");
	setTimeout("headerAnimation()", 3000);
}
var headerAnimation = function() {
	$("header").animate({
		top: 0
	}, 1500);
	$("section#navigation").show("normal");
	$("section#navigation").animate({
		top: 60,
	}, 1500 );
	console.log("headerAnimation");
}

// init
var init = function() {
	$("#about_area, #concept_area, #complex_area, #more_area").hide();
	initHeader();
}
