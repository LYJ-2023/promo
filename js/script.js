$(document).ready(function(){
    //햄버거 메뉴 시작
    $('.hamburger').on('click', function() {
        $('.nav').slideToggle();
    });
    $(window).on('resize', function(){
        if($(window).width() > 1400) {
            // 화면 크기가 1400px 초과일 때
            $('.nav').removeAttr('style');  // inline 스타일 제거
        }
    });
    //햄버거 메뉴 끝
    //슬라이드 시작
    $(function(){
        let currentIndex = 0;   //현재 이미지
        $(".sliderWrap").append($(".slider").first().clone(true));  //첫번째 이미지를 복사, 마지막에 추가

        setInterval(function(){     //3초에 한번씩 실행
            currentIndex++;     //현재 이미지를 1씩 증가
            $(".sliderWrap").animate({marginLeft: -currentIndex * 100 + "vw"}, 900); //이미지 애니메이션

            if(currentIndex == 3){  //마지막 이미지일때
                setTimeout(function(){  
                    $(".sliderWrap").animate({marginLeft: 0}, 0);   //애니메이션을 정지
                    currentIndex = 0;   //현재이미지 초기화
                }, 700);
            }
        }, 3000);
    });
    //슬라이드 끝
});
