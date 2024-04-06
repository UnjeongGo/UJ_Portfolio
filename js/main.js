$(document).ready(function(){
    // to-do
    //1. 메뉴 클릭시 해당 메뉴 동작 o
    //2. port o
    //2-1. 폴더 선택시 이동 및 이미지 바뀌기 o
    //2-2. 왼쪽 폴더 선택시 하위 폴더 열리기 o
    //2-3. 파일 선택시 포트다운 열리기 o
    //2-4. 미리보기 슬라이드 o
    //2-5. 미리보기 슬라이드 클로즈 버튼 o
    //2-6. 오른쪽 큰폴더 선택시 하위 폴더 열리기 o
    //2-7. 뒤로가기, 앞으로 가기 o
    //2-8. 닫기, 최소화, 최대화 o
    //2-9. down_img_big 클릭 block o
    //3. contact
    //3-1. contact 누를시 배경 바뀜 (그라디언트 애니메이션)
    

    //1
    let headLi = $('header ul li a')
    $(headLi).on('click',function(e){
        e.preventDefault();
        //home
        $(headLi).eq(0).on('click',function(){
            $('.intro').stop().animate({'top':'-150%'},1000);
            $('.intro_chara img:nth-child(2)').css({'display':'none'});
            $('.portf').removeClass('on');
            $('.contact').removeClass('on');
        });
        //intro
        $(headLi).eq(1).on('click',function(){
            $('.intro').stop().animate({'top':'0'},1000);
            $('.intro_chara img:nth-child(1)').attr('src','img/intro_chara1.png');
            $('.intro_chara img:nth-child(2)').css({'display':'block'});
            $('.portf').removeClass('on');
            $('.contact').removeClass('on');
            $('footer').addClass('on');
        });
        $('.intro_chara').on('click',function(){
            $('.intro_chara img:nth-child(1)').attr('src','img/intro_chara2.png');
            $('.intro').stop().animate({'top':'-150%'},1000);
            $('.intro_chara img:nth-child(2)').css({'display':'none'});
            $('footer').removeClass('on')
        });
        //port
        $(headLi).eq(2).on('click',function(){
            $('.portf').addClass('on');
            $('.contact').removeClass('on');
            $('.port_img').stop().animate({'left':'30px'},300);
        });
        //contact
        $(headLi).eq(3).on('click',function(){
            $('.contact').toggleClass('on');
            $('.portf').removeClass('on');
            $('.intro').stop().animate({'top':'-150%'},1000);
            $('.intro_chara img:nth-child(2)').css({'display':'none'});
        });
    });

    //2-1, 2-2
    $('.port_folder_r > ul li').on('mouseenter',function(e){
        e.preventDefault();
        $(this).siblings('li').find('i').attr('class','fas fa-folder');
        $(this).find('i').attr('class','fas fa-folder-open');
    });
    $('.port_folder_r > ul li').on('mouseleave',function(e){
        $('.port_folder_r > ul li').find('i').attr('class','fas fa-folder');
    });

    $('.port_folder_l li li:nth-child(1)').on('click',function(){
        $(this).siblings('li').find('i').attr('class','fas fa-folder');
        $(this).find('i').attr('class','fas fa-folder-open');
        $('.port_web').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > WEB');
        $('.port_web').siblings('div').removeClass('on');
        $('.port_down').removeClass('on');
    });
    $('.port_folder_l li li:nth-child(2)').on('click',function(){
        $(this).siblings('li').find('i').attr('class','fas fa-folder');
        $(this).find('i').attr('class','fas fa-folder-open');
        $('.port_app').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > APP');
        $('.port_app').siblings('div').removeClass('on');
        $('.port_down').removeClass('on');
    });
    $('.port_folder_l li li:nth-child(3)').on('click',function(){
        $(this).siblings('li').find('i').attr('class','fas fa-folder');
        $(this).find('i').attr('class','fas fa-folder-open');
        $('.port_graphic').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > GRAPHIC');
        $('.port_graphic').siblings('div').removeClass('on');
        $('.port_down').removeClass('on');
    });
    $('.port_folder_l li li:nth-child(4)').on('click',function(){
        $(this).siblings('li').find('i').attr('class','fas fa-folder');
        $(this).find('i').attr('class','fas fa-folder-open');
        $('.port_presen').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > PRESENTATION');
        $('.port_presen').siblings('div').removeClass('on');
        $('.port_down').removeClass('on');
    });

    //2-3, 2-4
    $('.port_ud li').on('click',function(){
        $('.port_down').addClass('on');
    });
    // web
    $('.port_web ul li').eq(0).on('click',function(e){
        e.preventDefault();
        $('.port_web .downbox').siblings().removeClass('on');
        $('.port_web .downbox').eq(0).addClass('on');
    });
    $('.port_web ul li').eq(1).on('click',function(e){
        e.preventDefault();
        $('.port_web .downbox').siblings().removeClass('on');
        $('.port_web .downbox').eq(1).addClass('on');
    });
    $('.port_web ul li').eq(2).on('click',function(e){
        e.preventDefault();
        $('.port_web .downbox').siblings().removeClass('on');
        $('.port_web .downbox').eq(2).addClass('on');
    });
    $('.port_web ul li').eq(3).on('click',function(e){
        e.preventDefault();
        $('.port_web .downbox').siblings().removeClass('on');
        $('.port_web .downbox').eq(3).addClass('on');
    });
    // app
    $('.port_app ul li').eq(0).on('click',function(e){
        e.preventDefault();
        $('.port_app .downbox').siblings().removeClass('on');
        $('.port_app .downbox').eq(0).addClass('on');
    });
    $('.port_app ul li').eq(1).on('click',function(e){
        e.preventDefault();
        $('.port_app .downbox').siblings().removeClass('on');
        $('.port_app .downbox').eq(1).addClass('on');
    });
    $('.port_app ul li').eq(2).on('click',function(e){
        e.preventDefault();
        $('.port_app .downbox').siblings().removeClass('on');
        $('.port_app .downbox').eq(2).addClass('on');
    });
       // graphic
       $('.port_graphic ul li').eq(0).on('click',function(e){
        e.preventDefault();
        $('.port_graphic .downbox').siblings().removeClass('on');
        $('.port_graphic .downbox').eq(0).addClass('on');
    });
    $('.port_graphic ul li').eq(1).on('click',function(e){
        e.preventDefault();
        $('.port_graphic .downbox').siblings().removeClass('on');
        $('.port_graphic .downbox').eq(1).addClass('on');
    });
    $('.port_graphic ul li').eq(2).on('click',function(e){
        e.preventDefault();
        $('.port_graphic .downbox').siblings().removeClass('on');
        $('.port_graphic .downbox').eq(2).addClass('on');
    });
    $('.port_graphic ul li').eq(3).on('click',function(e){
        e.preventDefault();
        $('.port_graphic .downbox').siblings().removeClass('on');
        $('.port_graphic .downbox').eq(3).addClass('on');
    });
    // presen
    $('.port_presen ul li').eq(0).on('click',function(e){
        e.preventDefault();
        $('.port_presen .downbox').siblings().removeClass('on');
        $('.port_presen .downbox').eq(0).addClass('on');
    });
    $('.port_presen ul li').eq(1).on('click',function(e){
        e.preventDefault();
        $('.port_presen .downbox').siblings().removeClass('on');
        $('.port_presen .downbox').eq(1).addClass('on');
    });

    

    
    //2-5
    $('.port_down_close').on('click',function(){
        $('.port_down').removeClass('on');
    });

    //2-6
    $('.web').on('click',function(){
        $('.port_web').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > WEB');
    });
    $('.app').on('click',function(){
        $('.port_app').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > APP');
    });
    $('.graphic').on('click',function(){
        $('.port_graphic').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > GRAPHIC');
    });
    $('.presen').on('click',function(){
        $('.port_presen').addClass('on');
        $('.port_add02 p').text('PORTFOLIO > PRESENTATION');
    });

    //2-7
    $('.add_prev').on('click',function(){
        $('.port_folder div').removeClass('on');
        $('.port_add02 p').text('PORTFOLIO');
    });
    $('.add_up').on('click',function(){
        $('.port_folder div').removeClass('on');
        $('.port_add02 p').text('PORTFOLIO');
    });

    //2-8
    $('.con_small').on('click',function(){
        $('.port_info').stop().animate({'top':'93%'},500);
    });
    $('.con_big').on('click',function(){
        $('.port_info').stop().animate({'top':0},500);
    });
    $('.con_close').on('click',function(){
        $('.port_img').animate({'left':'-100%'},500);
        $('.portf').removeClass('on');
        $('.port_ud').removeClass('on');
        $('.port_down').removeClass('on');
    });

    //2-9
    // app1
    $('.porta_more1').on('click',function(e){
        e.preventDefault();
        $('.down_img_big1').fadeIn(500);
    });
    // app2
    $('.porta_more2').on('click',function(e){
        e.preventDefault();
        $('.down_img_big2').fadeIn(500);
    });
    // app3
    $('.porta_more3').on('click',function(e){
        e.preventDefault();
        $('.down_img_big3').fadeIn(500);
    });
    //close
    $('.down_img_big i').on('click',function(){
        // $('.down_img_big').css({'display':'none'});
        $('.down_img_big').fadeOut(500);
    });


    //3 pdf연결
    $('.portp_more1').on('click',function(){
        window.open("../pdf/LG_TWINS_UJGo.pdf", "_blank");
    });
    $('.portp_more2').on('click',function(){
        window.open("../pdf/CCF_Proposal.pdf", "_blank");
    });
    // $('.intro_box_l button').on('click',function(){
    //     window.open("../pdf/resume_UJGo.pdf", "_blank");
    // });
})