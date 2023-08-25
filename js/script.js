document.addEventListener('DOMContentLoaded', function() {
    // 햄버거 메뉴 시작
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? '' : 'block';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1400) {
            // 화면 크기가 1400px 초과일 때
            nav.style.display = ''; // inline 스타일 제거
        }
    });
    // 햄버거 메뉴 끝

    //tab
    $(".tabcon_2nd").hide();
    $(".tabcon_3rd").hide();

    $(".t1").click(function(){
        //t1 bgcolor
        $(".t1").css({"background-color": "var(--mainColor2)"});

        //t1 click 했을 때 t2, t3 bg color & font color
        $(".t2").css({"background-color": "var(--defaultColor1)"});
        $(".t3").css({"background-color": "var(--defaultColor1)"});
        $(".t3").css({"color": "var(--defaultColor2)"});

        //t1 click 했을 때 tabcon bg color & tabcon2 bg color
        $(".tabcon").css({"background-color": "var(--mainColor2)"});
        // $(".tabcon2").css({"background-color": "#fff4f9"});

        $(".tabcon").show();
        $(".tabcon_2nd").hide();
        $(".tabcon_3rd").hide();
    });
    $(".t2").click(function(){
        //t2 bgcolor
        $(".t2").css({"background-color": "var(--mainColor1)"});

        //t2 click 했을 때 t1, t3 bg color & font color
        $(".t1").css({"background-color": "var(--defaultColor1)"});
        $(".t3").css({"background-color": "var(--defaultColor1)"});
        $(".t3").css({"color": "var(--defaultColor2)"});

        //t2 click 했을 때 tabcon bg color & tabcon2 bg color
        $(".tabcon_2nd").css({"background-color": "var(--mainColor1)"});
        // $(".tabcon2").css({"background-color": "#cbb0d6"});
        
        $(".tabcon_2nd").show();
        $(".tabcon").hide();
        $(".tabcon_3rd").hide();
    });
    $(".t3").click(function(){
        //t3 bgcolor
        $(".t3").css({"background-color": "var(--mainColor3)"});

        //t3 click 했을 때 t1, t2 bg color & font color
        $(".t1").css({"background-color": "var(--defaultColor1)"});
        $(".t2").css({"background-color": "var(--defaultColor1)"});
        $(".t3").css({"color": "var(--defaultColor1)"});

        //t3 click 했을 때 tabcon bg color & tabcon2 bg color
        $(".tabcon_3rd").css({"background-color": "var(--mainColor3)"});
        // $(".tabcon2").css({"background-color": "#4e6188"});
        
        $(".tabcon_3rd").show();
        $(".tabcon").hide();
        $(".tabcon_2nd").hide();
    });
    //tab end


    // 스와이퍼 인스턴스를 생성합니다.
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',  // 페이지네이션 요소를 설정합니다.
        effect: 'coverflow',               // 스와이퍼 효과로 'coverflow'를 사용합니다.
        grabCursor: true,                  // 마우스 커서를 그랩 스타일로 변경합니다.
        centeredSlides: true,              // 활성 슬라이드를 가운데에 표시합니다.
        loop: true,                        // 무한 반복 모드를 활성화합니다.
        paginationClickable: true,         // 페이지네이션 버튼을 클릭할 수 있게 합니다.
        slidesPerView: 2,                  // 한 번에 두 개의 슬라이드를 표시합니다.

        // coverflow 효과에 대한 설정
        coverflow: {
            rotate: 0,                     // 슬라이드 회전 각도를 설정합니다.
            stretch: 300,                  // 슬라이드 사이의 거리를 설정합니다.
            depth: 100,                    // 슬라이드의 Z축 거리(깊이)를 설정합니다.
            modifier: 1,                   // 효과의 수정자 값을 설정합니다.
            slideShadows: false            // 슬라이드 그림자를 비활성화합니다.
        }
    });
});