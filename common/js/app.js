var contentsArea = "#menu, #about, #concept, #complex, #more";
var current = "menu";

$(function(){
    init();
    $("#menu li, header li").click(function(){
        var id = $(this).attr("class");
        if (current == id) {
            return false;
        }
        viewContents(id);
        /*
        if (current == 'menu') {
            $("section#menu").animate({
                top: -600,
                opacity: 0
            }, 1500);
            setTimeout(function(){
                viewContents(id);
            }, 1500);
        } else {
            viewContents(id);
        }
        */
    });
});

// header animation
var initHeader = function() {
    $("header").css({top:300, left:"auto"});
    // $("section#menu").css({top:600, left:"auto"});
    $("section#menu").css({opacity: 0, top: 450});
    $("header nav").css({opacity: 0, top: 450});
    console.log("initHeader");
    setTimeout("headerAnimation()", 3000);
    current = "menu";
}
var headerAnimation = function() {
    $("header").animate({
        top: 0
    }, 1500);
    setTimeout(function(){
        $("header nav").animate({
            top: 0,
            opacity: 1.0
        }, 1500);
        initMenu();
    }, 1500);
    // $("header nav").show("normal");
    console.log("headerAnimation");
}
var initMenu = function() {
    $("section#menu").show("normal");
    $("section#menu").animate({
        top: 150,
        opacity: 1.0
    }, 1500);
    console.log("initMenu");
}

// view contents
var viewContents = function(id) {
    $(contentsArea).hide();
    $("#" + id).show();
    current = id;
    console.log("view " + id + "area");
}

// init
var init = function() {
    $(contentsArea).hide();
    initHeader();
}
