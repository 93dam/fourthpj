$(function(){
    $('nav ul').mouseover(function(){
        $(this).children('ul').stop().slideDown('300')
    });
    $('nav ul').mouseleave(function(){
        $(this).children('ul').stop().slideUp('300')
    });
    $(window).scroll(function(){
        if($(this).scrollTop() >= 300 ){
            $('#menu-top').fadeIn();
        }else{
            $('#menu-top').fadeOut();
        }
    });
    $('#menu-top').click(function(){
        $('html, body').stop().animate({scrollTop:0},500);
    });
    var $menu = $('.mainNav li a');
    $menu.click(function(){
        var targetID = $(this).attr('href');
        // 메뉴의 링크 클릭시, 해당 주소를 불러와주는 attr 사용
        var targetScr = $(targetID).offset().top;
        // 해당 메뉴 클릭시, 해당 주소의 top에서 떨어진 스크롤양
        $('html, body').animate({scrollTop:targetScr},500);
        // 도큐먼트의 스크롤 탑값을 주소이동시 할당
    });
});