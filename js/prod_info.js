let scrTop = 0;
$(document).ready(function(){


    // 제품 종류 - 탭메뉴
    $(".dl_type>dt").click(function(){
        $(".dl_type>dt").removeClass("on")
        $(this).addClass("on")
    })

    // 제품 색상 - 슬라이드
    $(".btn_color>li").click(function(e){
        e.preventDefault();
        $(".btn_color>li").removeClass("on")
        $(this).addClass("on")
        let btn_idx = $(this).index()
        $(".img_color>li").removeClass("on")
        $(".img_color>li").eq(btn_idx).addClass("on")
    })
































})