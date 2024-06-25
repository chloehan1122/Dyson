$(document).ready(function(){
   
        // 스크롤탑 방지
        $('a.no-scroll').on('click', function(event){
            event.preventDefault();
        });
   
    let scrTop = 0;

    // 0.헤더 고정
    // scrTop = 0;
    $(window).scroll(function(){
        scrTop = $(window).scrollTop()
        console.log(scrTop)
        if(scrTop >= 60){
            // $(".bottom_h").css("position", "fixed").css("top", "10px");
            // $(".bottomH_bg").css("position", "fixed").css("background", "#fffffff0");
            if (scrTop > 900 && scrTop < 11800){
                $(".bottom_h").css("color", "white");
                $(".bottom_h>h2").css("font-weight", 400);
                $(".bottomH_bg").css("background", "#000");
            }else{
                $(".bottom_h").css("color", "");
                $(".bottom_h>h2").css("font-weight", "");
                $(".bottomH_bg").css("background", "#fffffff0");
            }
        }else{
            // $(".bottom_h").css("position", "absolute").css("top", "10px").css("color", "");
            // $(".bottomH_bg").css("position", "absolute").css("top", 0).css("background", "#fffffff0");
        }
    })

    // 모든 페이지 텍스트 transformY 효과
    $(window).scroll(function() {
        scrTop = $(window).scrollTop();
    
        let techTop = 6000;
        let appTop = 7853;
        let cirTop = 8953;
        let slide2Top = 10553;
        let chargerTop = 11553;
    
        if (scrTop >= techTop) {
            $(".tech_txt").addClass("active");
        } else {
            $(".tech_txt").removeClass("active");
        }
    
        if (scrTop >= appTop) {
            $(".app_txt").addClass("active");
        } else {
            $(".app_txt").removeClass("active");
        }
    
        if (scrTop >= cirTop) {
            $(".cir_motion").css("animation-play-state", "running");
        } else {
            $(".cir_motion").css("animation-play-state", "paused");
        }

        if (scrTop >= slide2Top) {
            $(".slide_txt2").addClass("active");
        } else {
            $(".slide_txt2").removeClass("active");
        }

        if (scrTop >= chargerTop) {
            $(".charger_txt").addClass("active");
        } else {
            $(".charger_txt").removeClass("active");
        }
    });

    // 1. 슬라이드.배너 (스크롤)
    let scrTop2 = 0

    scrTop2 = $(window).scrollTop();
    let building_top = $(".building").offset().top;
    let building_height = $(".building").height(); // 애니메이션 속도감을 세팅
    let elv_height = $(".elv").height();
    let anime_length = building_height - elv_height; // 애니메이션 실질적 구간 !== building_height
    let distance = scrTop2 - building_top
    let basis_per = distance/anime_length // 0~1
    let per1 = basis_per*100 // 0~100
    let per2 = per1/(100/3)
    let per3 = Math.floor(per2)
    let per3dec = per2-per3
    let per1dec = per1/3*2 // 0~66.67

    // 엘리베이터 도달하지 못한 상황
    if(distance < 0){
        $(".elv").removeClass("fixed")
        $(".elv").removeClass("bottom")
    }
        
    // 엘리베이터 도달하여 진행중인 상황
    if(distance >= 0 && distance < anime_length){
        $(".elv").addClass("fixed")
        $(".elv").removeClass("bottom")
        // console.log(per3,per3dec)
        $(".banner_back>li").eq(per3).css("opacity",per3dec)
        $(".train_intro").css("transform", `translateY(${-per1dec}%)`)
    }

    // 엘리베이터 벗어난 상황
    if(distance > anime_length){
        $(".elv").removeClass("fixed")
        $(".elv").addClass("bottom")
    }

    $(window).scroll(function(){
        scrTop2 = $(window).scrollTop();
        let building_top = $(".building").offset().top;
        let building_height = $(".building").height(); // 애니메이션 속도감을 세팅
        let elv_height = $(".elv").height();
        let anime_length = building_height - elv_height; // 애니메이션 실질적 구간 !== building_height
        let distance = scrTop2 - building_top
        let basis_per = distance/anime_length // 0~1
        let per1 = basis_per*100 // 0~100
        let per2 = per1/(100/3)
        let per3 = Math.floor(per2)
        let per3dec = per2-per3
        let per1dec = per1/3*2 // 0~66.67

        // 엘리베이터 도달하지 못한 상황
        if(distance < 0){
            $(".elv").removeClass("fixed")
            $(".elv").removeClass("bottom")
        }
            
        // 엘리베이터 도달하여 진행중인 상황
        if(distance >= 0 && distance < anime_length){
            $(".elv").addClass("fixed")
            $(".elv").removeClass("bottom")
            // console.log(per3,per3dec)
            $(".banner_back>li").eq(per3).css("opacity",per3dec)
            $(".train_intro").css("transform", `translateY(${-per1dec}%)`)
        }

        // 엘리베이터 벗어난 상황
        if(distance > anime_length){
            $(".elv").removeClass("fixed")
            $(".elv").addClass("bottom")
        }
    })


    
    // 2. 슬라이드.조명 활용 모드 (수동)
    let swiper2 = new Swiper(".station_mode", {
        slidesPerView: 2.5,
        centeredSlides:true,
        spaceBetween: 30,
        pagination: {
            el: '.stmode_pagi',
            // type: 'bullets',
            clickable:true
        },
    });

    // 3. 슬라이드.제품 색상 (자동)
    let swiper3 = new Swiper(".stationColor", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
              console.log(this.realIndex);
              $(".btn_color>li").removeClass("on")
              $(".btn_color>li").eq(this.realIndex).addClass("on")
              // $(".train_color>li").css("transform",`translateX(${count*-100}%)`)
              $(".colorTrain").css("transform",`translateY(${this.realIndex*-100}px)`)
            },
        },
    })
    $(".btn_color>li").click(function(){        
        $(".btn_color>li").removeClass("on")
        $(this).addClass("on")
        let selectedIndex = $(this).index()
        swiper3.slideToLoop(selectedIndex);
        $(".colorTrain").css("transform", `translateY(${selectedIndex * -100}px)`);
    })

    // 4. 슬라이드.인스타그램 (수동)
    let swiper4 = new Swiper(".station_sns", {
        slidesPerView: "4",
        centeredSlides:true,
        spaceBetween: 10,
        // effect: 'flip',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });
    $(".station_sns a").click(function(e){
        e.preventDefault();
    });

    // 5. 슬라이드.인스타그램.모달
    let popup = [
        `<b>@sori__home</b> <br>

        ❥092 #광고 dyson_kr | smarter deskterior 💡⠀<br>
        <br>
        조명 하나로 간접,작업,전시,무드등이 된다면…? <br>
        이 사실을 여러분은 믿으시겠나요? <br>
        <br>
        ‘다이슨 솔라사이클모프조명’으로 이 모든 것들이⠀<br>
        가능해졌어요! 디자인이 모던하고 감각적이어서⠀<br>
        서재, 거실, 침실 어디든 잘 어울려요 —𖤐⠀<br>
        <br>
        더욱 신기한건 어플에 위치를 등록해두면, <br>
        고유 알고리즘을 이용한 자연광 추적 기능을 통해 <br>
        해당 지역의 자연광 온도와 밝기로 빛을 제공해줘요. <br>
        이거 완전 닉값 제대로 하죠!<br>
        <br>
        그외에도 여러가지 센서기능이 탑재되어 있어요.<br>
        특히, 저는 움직임을 감지하여 자동으로 불빛을 <br>
        조절하는 기능이 마음에 들더라구요! <br>
        어두운 책상에 앉기만 해도 저절로 밝아지는 조명✨ <br>
        마치 저를 기다린듯이 반겨주는 것 같아서 <br>
        조명 하나에 미소 짓게되었네요:)`,

        `<b>@jylllllee</b> <br>

        #제품협찬 #다이슨 #라이트사이클모프조명<br>
        우리집 뉴 조명!💡다이슨 솔라사이클 모프™ 조명💡<br>
        디자인도 유니크한데 실용적이고 똑똑한 조명을 찾았다..!<br>
        사용자에 따라 최적의 빛을 선사하고<br>
        사용 지역의 자연광에 맞춰 색온도랑 밝기도 조정!<br>
        지나갈때마다 감짝감짝 놀라요....<br>
        <br>
        써보면서 느꼈던 가장 장점들은<br>
        <br>
        ✅4가지 조명모드가 있다는 점!<br>
        간접조명/ 태스크 조명/ 전시 조명/ 무드 조명으로<br>
        모든 공간에 적합하여 다양하게 활용하는 중이다<br>
        <br>
        ✅히트 파이프Heat Pipe 기술로 60년 동안 품질 유지가 <br>가능하다는 점.. 다이슨의 기술력 역시 채고..<br>
        <br>
        ✅MyDyson™ 앱과 연동하여 사용자의 작업, 나이 및 기분에 <br>따라 맞춤화 사용이 가능하다는 점!`,

        `<b>@yenni.hom</b><br>

        정말 고급지고 예쁜 조명을 발견했어요💡<br>
        예전부터 사용해보고 싶었던 다이슨 솔라사이클모프조명<br>
        <br>
        다양한 공간에서 사용하고싶어 플로우스탠드로 선택했어요<br>
        <br>
        거실이나 다이닝룸 서재등 어느 공간에서나 다양하게 <br>활용할수있고 감각적인 디자인으로 인테리어 효과까지 최고!!<br>
        <br>
        스탠드 기둥으로 빛이 쫘악 들어오는것도 너무 예쁘죠✨<br>
        <br>
        터치만으로 불빛의 세기와 온도 조절이 가능하고<br>
        간접조명, 데스크조명, 전시조명, 무드조명등 4가지 모드로 <br>일할때나 쉴때 또 공간을 연출할때등 다양하게 활용 <br>가능해 추천하고 싶은 조명이예요!!`,

        `<b>@b__haus.ella</b><br>

        요즘 새벽 4시부터 시작하는 하루의 시작을<br>
        다이슨 솔라사이클 모프와 함께하고 있어요.<br>
        <br>
        태스크조명 : 업무에 용이한 직접 조명<br>
        간접조명 : 빛을 벽이나 천장에 반사연출<br>
        전시조명 : 그림이나 장식품을 강조<br>
        무드조명 : 휴식을 취할때 촛불과 유사한 무드<br>
        <br>
        저는 주로 이른 아침이라<br>
        자연광의 색 온도는 따뜻한 전구색,<br>
        눈 부심 없이 간접, 전시, 무드 모드로 사용했어요 :)`,

        `<b>@funnysue</b><br>
        인테리어 제품으로도 손색없는<br>
        다이슨 솔라사이클 모프™ 조명!💡<br>
        <br>
        똑똑함이 보이는 조명이라<br>
        인테어적 요소가 없을꺼라 생각하셨다면<br>
        그건 경기도 오오산!<br>
        <br>
        아들방에 있을때는 스터디 조명으로 사용하지만,<br>
        거실로 나오는 순간<br>
        인테리어 조명으로 변신한답니다.<br>
        <br>
        거실로 나온 다이슨 솔라사이클 모프™ 조명은<br>
        핸드폰에 설치한 다이슨 앱으로<br>
        제어하고 있는데요, <br>
        휴식모드로 맞춰두고<br>
        밝기를 조절해두면 거실의 간접조명으로도<br>
        손색이 없답니다.`,

        `<b>@incipit99</b><br>
        저는 주로 거실에서 책을 읽는 편인데,<br>
        그러다보니 독서를 위한 조명이 꼭 필요했어요.<br>
        사실 조명은 여러 종류를 가지고 있지만<br>
        독서에 최적화된 조도와 컬러감을 동시에 갖춘 제품을<br>
        찾기는 어려웠어요. 굳이 찾는다면<br>
        학습을 위한 led 스탠드 정도였고<br>
        그마저도 테이블이 있어야만 사용이 가능해서<br>
        불편함이 이만저만 아니었답니다.<br>
        <br>
        그러던 중에 실용적이면서<br>
        디자인 효과를 동시에 누릴 수 있는<br>
        다이슨 솔라사이클 모프 조명을 알게 되었어요.<br>
        이 제품은 식탁이나 소파, 암체어 등 어느 장소에서든지<br>
        조명 헤더부분을 돌리기만 하면<br>
        바로 책을 읽을 수 있는 환경이 만들어져 아주 <br>만족스러웠어요.<br>
        <br>
        디자인 또한 감각적이고,<br>
        제품 한개로 내가 원하는 모드의 4가지 조명을<br>
        설정할 수가 있어서 그때그때 상황에 따라 사용할 수 있어요.<br>`
    ];
    let popupImg = [
        "./img/mood1_m.jpg",
        "./img/mood2_m.jpeg",
        "./img/mood3_m.jpeg",
        "./img/mood4_m.jpeg",
        "./img/mood5_m.jpeg",
        "./img/mood6_m.jpeg"
    ];
    
    $(".train_sns>li").click(function(){
        let idx = $(this).index()
        $(".modal").addClass("on")
        $(".more_popup").addClass("on")
        $(".train_modal").css("transform",`translateX(calc(${idx * -16.67}%))`)
        $("body").addClass("on")
        // $(".modal_img>img").attr("src", popupImg[idx])
        // $(".modal_txt>p").html(popup[idx])
    })
    let countP = 0;
    $(".btn_modal_next").click(function(){
        countP++
        if(countP>5){countP=5}
        $(".train_modal").css("transform",`translateX(calc(${countP * -16.67}%))`)
    })
    $(".btn_modal_prev").click(function(){
        countP--
        if(countP<0){countP=0}
        $(".train_modal").css("transform",`translateX(calc(${countP * -16.67}%))`)
    })
    $(".btn_closeP").click(function(){
        $(".modal").removeClass("on")
        $(".more_popup").removeClass("on")
        $("body").removeClass("on")
    })


    

       





})

