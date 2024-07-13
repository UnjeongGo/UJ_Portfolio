$(document).ready(function(){
    // swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
    // swiper/

    // todo
    // 0. start div 클릭시 start display none
    // 1. auto_b 클릭시 auto 나오기
    // 2. lang_b 클릭시 lang 나오기
    // 3. design di_btn 클릭시 di_box 나오기 / di_btn 다시 클릭시 di_box 사라지기
    // 4. 화면 easing 적용 (wining dna부터)
    // 5. design에서 v12 엔진 버튼 누르면 .engi block. .di none으로, text 바꾸기 

    let autoB = $('.auto_b');
    let langB = $('.lang_b');
    const autoC = $('.auto_close');
    const langC = $('.lang_close');
    const diBtn = $('.di_btn');
    const diBox = $('.di_box');
    const enBtn = $('.design .redbtn');

    //0
    $('#start div').on('click',function(){
        $('#start div').parent().fadeOut(500);
    });

    // 1
    $(autoB).on('click',function(e){
        e.preventDefault();
        $('.on_bg').fadeIn(500);
        $('.auto').addClass('on');
        $('.auto').siblings().removeClass('on');
    });
    $(autoC).on('click',function(e){
        $('.on_bg').fadeOut(500);
        $('.auto').removeClass('on');
    });

    //2
    $(langB).on('click',function(e){
        e.preventDefault();
        $('.on_bg').fadeIn(500);
        $('.lang').addClass('on');
        $('.lang').siblings().removeClass('on');
    });
    $(langC).on('click',function(e){
        e.preventDefault();
        $('.on_bg').fadeOut(500);
        $('.lang').removeClass('on');
    });
    
    //3
    $(diBtn).on('click',function(e){
        e.preventDefault();
        $(this).parent('div').siblings('div').children(diBtn).removeClass('on');
        $(this).siblings(diBox).toggleClass('on');
        $(this).toggleClass('on');
    });

    //4
    $('#content > div').on('mousewheel',function(event,delta){
        //마우스 휠을 올렸을 때
        if(delta > 0){
            let divPrev = $(this).prev().offset().top;
            $('body, html').stop().animate({scrollTop:divPrev},1400);
        }
        //마우스 휠 내렸을 때
        else{
            let divNext = $(this).next().offset().top;
            $('body,html').stop().animate({scrollTop:divNext},1400);
        }
    });
    //5
    $(enBtn).on('click',function(){
        $('.di').fadeToggle(700);
        $('.engi').fadeToggle(700);
        if ( $(enBtn).text() == '>V12 엔진' ){
            $(enBtn).text('>GTS');
        }else {
            $(enBtn).text('>V12 엔진')
        }
    });
})