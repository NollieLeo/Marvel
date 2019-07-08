$(document).ready(function () {
//    切换
    $(".signInNow_panel").stop().fadeIn();
    var registerShadow = $('.register_zoom_shadow');
    var signInShadow = $(".sign_in_shadow");
    var main = $(".container_show");
    registerShadow.click(function () {
        main.stop().animate({
          left:"-73%"
        },500);
        $(this).css({
            display:"none"
        });
        signInShadow.css({
            display:"block",
        });

    });

    signInShadow.click(function () {
        main.stop().animate({
            left:"-7%"
        },500);
        $(this).css({
            display:"none"
        });
        registerShadow.css({
            display:"block"
        })
    });

//    切换登陆
    $("#firstSign").click(function () {
        $(".first_sign").css({
            display:"block"
        });
        $(".second_sign").css({
            display:"none"
        });
        $(this).addClass("active_li");
        $("#secondSign").removeClass("active_li");
    });
    $("#secondSign").click(function () {
        $(".second_sign").css({
            display:"block"
        });
        $(".first_sign").css({
            display:"none"
        });
        $(this).addClass("active_li");
        $("#firstSign").removeClass("active_li");
    });

});