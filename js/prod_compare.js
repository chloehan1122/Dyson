$(document).ready(function(){


    // 1. 제품 색상 - 슬라이드
    $(".btnDesk>li").click(function(e){
        e.preventDefault();
        $(".btnDesk>li").removeClass("on")
        $(this).addClass("on")
        let btn_idx = $(this).index()
        $(".topDesk>li").removeClass("on")
        $(".topDesk>li").eq(btn_idx).addClass("on")
    })
    $(".btnFloor>li").click(function(e){
        e.preventDefault();
        $(".btnFloor>li").removeClass("on")
        $(this).addClass("on")
        let btn_idx = $(this).index()
        $(".topFloor>li").removeClass("on")
        $(".topFloor>li").eq(btn_idx).addClass("on")
    })

    // 2. topBox 내용 바꾸기 - 클릭
    let headerName = [
        `다이슨 물청소기`, `다이슨 진공청소기`, `다이슨 로봇청소기`,
        `다이슨 웻앤드라이 스트레이트너`, `다이슨 스타일러`, `다이슨 드라이어`,`다이슨 스트레이트너`,
        `다이슨 공기청정기`,`다이슨 가습공기청정기`,`다이슨 선풍기`,
        `다이슨 헤드폰`, `다이슨 솔라사이클 모프`
    ]
    $("#prodList").change(function(){
        let selectedOption = $(this).val(); // 선택된 옵션의 값 가져오기
        let selectedIndex = $(this).find('option:selected').attr("data-index")
        let selectedText = $(this).find('option:selected').text(); 
        let selectedColor = $(this).find('option:selected').data('color'); 
        let bTag = $(".pageTitle>h1 b");
        let headerTag = $(".bottom_h>h2 a")

        bTag.text(selectedText); 
        bTag.css('color', selectedColor);

        headerTag.text(headerName[selectedIndex]);

        let idx_depth =  $(this).find('option:selected').attr("data-depth-index")
        $(".gnb>li").removeClass("on")
        $(".gnb>li").eq(idx_depth).addClass("on")

    });


    // 3. 제품상담 - 팝업
    $(".coun_btn_close").click(function(){
        $(".coun_modal").removeClass("on")
        $(".coun_popup").removeClass("on")
    })
    $(".coun_btn_open").click(function(){
        $(".coun_modal").addClass("on")
        $(".coun_popup").addClass("on")
    })
    



















})