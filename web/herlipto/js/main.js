$(document).ready(function(){
    $('.cate').on('mouseenter',function(){
        $('.head_bot').toggleClass('on');
    });
    $('.cate').on('mouseleave',function(){
        $('.head_bot').removeClass('on');
    });
    $('.item_like').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('on');
    });
    $('.lang').on('click',function(){
        if ( $('.lang').text() == 'JP' ){
            $('.lang').text('KO');
        }else {
            $('.lang').text('JP')
        }
    });
    $('.top_btn').on('click',function(){
        $('html, body').stop().animate({scrollTop:'0'},500);
    });
    $('.head_t').on('click',function(){
        $('.bt').slideToggle(500);
    });
    $('.bt_cate').on('click',function(){
        $('.bt_ul').slideToggle(500);
    });

})