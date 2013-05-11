var contentsArea = "#about_area, #concept_area, #complex_area, #more_area";

$(function(){
    init();
    // $(".navigation").touchstart(navAction(this));
    $("#navigation li").click(function(){
        $("section#navigation").animate({
            top: -600,
            opacity: 0
        }, 1500);
        var id = $(this).attr("id");
        setTimeout(function(){
            navAction(id);
        }, 1500);
        // navAction(this);
    });
    $("header .nav").click(function(){
        $(contentsArea).hide();
        navigationAnimation();
    });
});

// header animation
var initHeader = function() {
    $("header").css({top:300, left:"auto"});
    // $("section#navigation").css({top:600, left:"auto"});
    $("section#navigation").css({opacity: 0});
    console.log("initHeader");
    setTimeout("headerAnimation()", 3000);
}
var headerAnimation = function() {
    $("header").animate({
        top: 0
    }, 1500);
    navigationAnimation();
    $("header .nav").show("normal");
    console.log("headerAnimation");
}
var navigationAnimation = function() {
    $("section#navigation").show("normal");
    $("section#navigation").animate({
        top: 100,
        opacity: 1.0
    }, 1500);
    console.log("navigationAnimation");
}

// nav action
var navAction = function(id) {
    $(contentsArea).hide();
    $("#" + id + "_area").show();
    console.log("view " + id + "area");
}

// init
var init = function() {
    $(contentsArea).hide();
    $("header .nav").hide();
    initHeader();
}
