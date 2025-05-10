$(document).ready(function(){
    $(".mainNav ul li a").hover(function(){
        $(this).next("ul").slideDown();
    });

    $(".mainNav ul li").mouseleave(function(){
        $(this).children(".subNav").hide();
    });

    
});