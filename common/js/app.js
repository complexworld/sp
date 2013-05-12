var contents = ["menu", "about", "concept", "complex"];
var contentsArea = "#menu, #about, #concept, #complex, #more";
var current = "menu";

$(function(){
    init();
});

var initHeader = function() {
    $("header").css({"margin-top":"100px", left:"auto"});
    $("section#menu").css({opacity: 0});
    hiddenNav();
    setTimeout("headerAnimation()", 2500);
    current = "menu";
    console.log("initHeader");
}
var headerAnimation = function() {
    $("header").animate({
        "margin-top": "5px"
    }, 1500);
    setTimeout(function(){
        initMenu();
    }, 1000);
    console.log("headerAnimation");
}
var initMenu = function() {
    /*
    $("section#menu").show();
    $("section#menu").animate({
        opacity: 1.0
    }, 1500);
*/
    viewEnable("section#menu");
    $("#menu li").click(contentsEvent);
    current = "menu";
    console.log("initMenu");
}
var initNav = function() {
    /*
    $("header nav").animate({
        opacity: 1.0
    }, 1500);
*/
    viewEnable("header nav")
    $("header li").click(contentsEvent);
}
var hiddenNav = function() {
    $("header nav").css({opacity: 0});
    $("header li").click(function(){
        return false;
    });
}
var viewContents = function(id) {
    hiddenContents();
    viewEnable("#" + id);
    current = id;
    console.log("view " + id + "area");
}
var hiddenContents = function() {
    $(contentsArea).hide();
    $(contentsArea).css({opacity: 0});
}
var viewEnable = function(target) {
    $(target).show();
    $(target).animate({
        opacity: 1.0
    }, 1500);
}
var contentsEvent = function() {
    var id = $(this).attr("class");
    if (current == id) {
        return false;
    }
    if (id != "menu") {
        viewContents(id);
        // メニュー以外の場合ナビを表示
        initNav();
    } else {
        // $(contentsArea).hide();
        hiddenContents();
        initMenu();
        // メニューの場合ナビを非表示
        hiddenNav();

    }
    console.log("current=" + current);
}

// init
var init = function() {
    // $(contentsArea).hide();
    hiddenContents();

    // URLのhashを見てcurrentを更新
    var hash = window.location.hash.split("#");
    if (hash.length == 2 && contents.indexOf(hash[1]) != -1) {
        current = hash[1];
        viewContents(current);
        $("header li").click(contentsEvent);
    } else {
        current = "menu";
        initHeader();
    }
}
