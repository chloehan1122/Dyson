let scrTop = 0;
$(document).ready(function(){

    // 제품 종류 - 탭메뉴
    let prod = [
        {
            type: "데스크형",
            price: "₩720,000",
            modelN:"294618-01, 294607-01"
        },
        {
            type: "플로어스탠드형",
            price: "₩960,000",
            modelN:"294642-01, 294624-01"
        }
    ]
    $(".dl_type>dt").click(function(index){
        $(".dl_type>dt").removeClass("on")
        $(this).addClass("on")
        let activeIdx = ($(this).index())/2
        // console.log(activeIdx) // 0,1
        $("#n1").html(prod[activeIdx].type)
        $("#n2").html(prod[activeIdx].modelN)
        
        if(activeIdx==1){
            $(".img_color>li:first-of-type img").attr("src", "./img/white-silver-floor-fit.jpg")
            $(".img_color>li:last-of-type img").attr("src", "./img/black-black-floor-fit.jpg")
        }else{
            $(".img_color>li:first-of-type img").attr("src", "./img/White-silver-fit.jpg")
            $(".img_color>li:last-of-type img").attr("src", "./img/Black-black-fit.jpg")
        }

        $(".price").html(`        
        <p>
        솔라사이클모프조명 ${prod[activeIdx].type}
        </p>
        <p>
        ${prod[activeIdx].price}
        </p>
        `)

    })

    // 제품 색상 - 슬라이드
    $(".btn_color>li").click(function(e){
        e.preventDefault();
        $(".btn_color>li").removeClass("on")
        $(this).addClass("on")
        let btn_idx = $(this).index()
        console.log(btn_idx)
        $(".img_color>li").removeClass("on")
        $(".img_color>li").eq(btn_idx).addClass("on")
    })





























})