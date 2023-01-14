$(function(){
    // NAV
    $(".nav>ul>li").mouseenter(function(){
        $(this).children(".subnav").stop().slideDown(200);
    });
    $(".nav>ul>li").mouseleave(function(){
        $(this).children(".subnav").stop().slideUp(200);
    });

    // SLIDE
    $(".slide:gt(0)").hide();
    setInterval(function(){
        $(".slide:first").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slides");
    }, 3000);

    // TABS
    $(".gallery>a>h3").click(function(){
        $(".gallery").addClass("active");
        $(".notice").removeClass("active");
        $(".gallery>ul").stop().fadeIn(200);
        $(".notice>ul").stop().fadeOut(200);
    });
    $(".notice>a>h3").click(function(){
        $(".notice").addClass("active");
        $(".gallery").removeClass("active");
        $(".notice>ul").stop().fadeIn(200);
        $(".gallery>ul").stop().fadeOut(200);
    });

    // POPUP
    $('.notice>ul>li').click(function(){
        $('#popup').stop().fadeIn(200)
    })
    $('.btn').click(function(){
        $('#popup').stop().fadeOut(200)
    })

});