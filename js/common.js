$(document).ready(function(){

    let scrTop = 0;
    // 0.헤더 고정 + 호버
    $(window).scroll(function(){
        scrTop = $(window).scrollTop()
        let originalWidth = $(".bottom_h").outerWidth(); 
        if(scrTop >= 60){
            $(".bottom_h").css("position", "fixed").css("top", "10px").css("width",originalWidth);
            $(".bottomH_bg").css("position", "fixed").css("top", 0).css("background", "#fffffff0");
        }else{
            $(".bottom_h").css("position", "absolute").css("top", "10px").css("color", "").css("width",originalWidth);
            $(".bottomH_bg").css("position", "absolute").css("top", 0).css("background", "#fffffff0");
        }
    })
    $(".gnb>li").mouseover(function(){
        $("header").addClass("on")
        $(".all").addClass("on")
        $(this).find('.depths').addClass("on")
        $(this).children().addClass("on")
    })
    $(".gnb>li").mouseleave(function(){
        $("header").removeClass("on")
        $(".all").removeClass("on")
        $(this).find('.depths').removeClass("on")
        $(this).children().removeClass("on")
    })
    $(".depths").mouseover(function(){
        $("header").addClass("on")
        $(".all").addClass("on")
        $(this).find('.depths').addClass("on")
        $(this).children().addClass("on")
    })
    $(".depths").mouseleave(function(){
        $("header").removeClass("on")
        $(".all").removeClass("on")
        $(this).find('.depths').removeClass("on")
        $(this).children().removeClass("on")
    })
    $(".nodepth").mouseover(function(){
        $("header").removeClass("on")
        $(".all").removeClass("on")
    })

    // 투뎁스1 mo/tab
    $(".gnb_btn_o").click(function(){
        $(".gnb_mo").addClass("on")
    })
    $(".gnb_btn_c").click(function(){
        $(".gnb_mo").removeClass("on")
    })

    // 투뎁스 tab
    $(".btn_arrow").click(function(){
        if($(".lnb_mo").hasClass('on')){
            $(".lnb_mo").removeClass("on")
            $(".btn_arrow>img").attr("src",`./img/211687_down_arrow_icon.svg`)
        } else {
            $(".lnb_mo").addClass("on")
            $(".btn_arrow>img").attr("src",`./img/211690_up_arrow_icon.svg`)
        }
    })


    // 푸터 투뎁스 tab
    $(".foot_gnb_mo>li").click(function(e){
        e.preventDefault();
        if($(this).find("ul").hasClass("on")){
            $(this).find("ul").removeClass('on');
            $(this).find("a").removeClass('changed')
        } else {
            $(".foot_gnb_mo>li>ul").removeClass('on');
            $(".foot_gnb_mo>li>a").removeClass('changed');
            $(this).find("ul").addClass('on');
            $(this).find("a").addClass('changed')
        }
    })















})