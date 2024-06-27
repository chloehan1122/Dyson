let scrTop = 0;
let prodPrice = ""
$(document).ready(function(){

// price
prodPrice = [
    {
        name: "솔라사이클모프조명 데스크형",
        price: "₩720,000"
    },
    {
        name: "솔라사이클모프조명 플로어 스탠드형",
        price: "₩960,000"
    }
]
    // 제품 종류 - 탭메뉴
    $(".dl_type>dt").click(function(index){
        $(".dl_type>dt").removeClass("on")
        $(this).addClass("on")
        let activeIdx = $(this).index() 
        console.log(activeIdx)
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