$(function(){
    "use strict";

    // Adjust Header Height
    $(".header").height($(window).height());

    // Nice Scroll
    $("body").niceScroll({
        cursorwidth : "8px",
        cursorcolor : "#000",
        cursorborder : "none",
    });

    // Menu Close
    $(".fa-bars").click(function(){
        $(this).toggleClass("active");
        $(".menu-container").toggle();
        $(".navbar").toggleClass("custom-nav");
        if ($(".fa-bars").hasClass("active")) {
            $(this).addClass("fa-close").removeClass("fa-bars");
        } else {
            $(this).addClass("fa-bars").removeClass("fa-close");
        }
    });

    // Thumbnails Hover Effect
    $(".main-content .item").each(function(){
        $(this).on("mouseenter",function(){
            $(this).find("p").animate({
                marginTop : "5px"
            } , 300);
        });
        $(this).on("mouseleave",function(){
            $(this).find("p").animate({
                marginTop : "30px"
            } , 300);
        });
    });

    // chevron down
    $(".fa-chevron-down").click(function(){
        $("body,html").animate({
            scrollTop : $(".main-content").offset().top
        }, 700);
    });
});