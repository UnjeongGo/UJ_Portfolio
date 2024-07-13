$(document).ready(function(){
    // 스와이퍼
    let swiper = new Swiper('.swiper1', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 3000,
        // spaceBetween: 30,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    let swiper1 = new Swiper('.swiper2', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        // spaceBetween: 30,
        grabCursor: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    // let swiper2 = new Swiper('.swiper3', {
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     direction: 'vertical',
    //     autoplay: 2500,
    //     autoplayDisableOnInteraction: false,
    //     loop: true
    // });
    var swiper2 = new Swiper('.swiper3', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        paginationClickable: true,
        // spaceBetween: 100,
        direction: 'vertical',
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
    });


    // 뉴스
    // $('.info_r_b li').on('mouseenter',function(e){
    //     let li = $('.info_r_b li');
    //     let lieq = $(this).eq();
    //     $(this).addClass('on');
    //     $('.info_news').eq(lieq).addClass('on');
    // })
    $('.info_r_b li').eq(0).on('mouseenter',function(e){
        e.preventDefault();
        $('.info_news').siblings().removeClass('on');
        $('.info_news').eq(0).addClass('on');
    });


    $('.info_r_b li').eq(1).on('mouseenter',function(e){
        e.preventDefault();
        $('.info_news').siblings().removeClass('on');
        $('.info_news').eq(1).addClass('on');
    });
    $('.info_r_b li').eq(2).on('mouseenter',function(e){
        e.preventDefault();
        $('.info_news').siblings().removeClass('on');
        $('.info_news').eq(2).addClass('on');
    });
    $('.info_r_b li').eq(3).on('mouseenter',function(e){
        e.preventDefault();
        $('.info_news').siblings().removeClass('on');
        $('.info_news').eq(3).addClass('on');
    });


    //푸터링크
    $('.footer_link div').on('click',function(){
        $('.footer_link ul').toggleClass('on');
    });

})