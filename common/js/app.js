var contents = ["menu", "about", "concept", "complex"];
var contentsArea = "#menu, #about, #concept, #complex, #more";
var current = "menu";

$(function(){
    init();
    // TODO タッチイベントに変更
    $("#menu li, header li").click(function(){
        var id = $(this).attr("class");
        if (current == id) {
            return false;
        }
        // コンテンツ表示
        viewContents(id);
        if (current != "menu") {
            // メニュー以外の場合ナビを表示
            initNav();
        } else {
            // メニューの場合ナビを非表示
            hiddenNav();
        }
        console.log("current=" + current);
    });
});

// header animation
var initHeader = function() {
    $("header").css({top:300, left:"auto"});
    $("section#menu").css({opacity: 0, top: 150});
    hiddenNav();
    console.log("initHeader");
    setTimeout("headerAnimation()", 2000);
    current = "menu";
}
var headerAnimation = function() {
    $("header").animate({
        top: 0
    }, 1500);
    setTimeout(function(){
        initMenu();
    }, 1000);
    console.log("headerAnimation");
}
var initMenu = function() {
    $("section#menu").show("normal");
    $("section#menu").animate({
        opacity: 1.0
    }, 1500);
    console.log("initMenu");
}
var initNav = function() {
    $("header nav").animate({
        top: 0,
        opacity: 1.0
    }, 1500);
}
var hiddenNav = function() {
    $("header nav").css({opacity: 0});
}
var viewContents = function(id) {
    $(contentsArea).hide();
    $("#" + id).show();
    current = id;
    console.log("view " + id + "area");
}

// init
var init = function() {
    $(contentsArea).hide();
    // URLのhashを見てcurrentを更新
    var hash = window.location.hash.split("#");
    if (hash.length == 2 && contents.indexOf(hash[1]) != -1) {
        current = hash[1];
        viewContents(current);
    } else {
        current = "menu";
        initHeader();
    }
}
