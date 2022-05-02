(function($){

  let cnt=0;
  let setId=0;

  function pausefn(){
    clearInterval(setId);
    $('.pause-btn').children().removeClass('fa-pause');
    $('.pause-btn').children().addClass('fa-play');
  }

  function playfn(){
    //nextCount();
    autoTimer();
    $('.pause-btn').children().removeClass('fa-play');
    $('.pause-btn').children().addClass('fa-pause');
  }

  $('pause-btn').children().attr('class','fa fa-play');
  $('pause-btn').children().prop('class','fa fa-play');
 

  //1. 메인슬라이드 함수

  function mainSlide(){
    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 600, function(){
      cnt>5?cnt=0 : cnt;
      cnt<0?cnt=5 : cnt;
    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 0);
    });
    pageBtn();
  }



  //2. 다음카운트 함수

  function nextCount(){
    cnt++;
    mainSlide();
  }

  function prevCount(){
    cnt--;
    mainSlide();
  }



  //3. 자동타이머 함수

  function autoTimer(){
    setId=setInterval(nextCount, 4000);
  }
    autoTimer();


  //4. 페이지버튼 함수

  function pageBtn(){
    $('.page-btn').removeClass('on');
    $('.page-btn').eq(cnt>5?0:cnt).addClass('on');
  }


  //5. 페이지버튼 클릭이벤트

  $('.page-btn').each(function(idx){
    $(this).click(function(){
      clearInterval(setId);
      cnt=idx;
      mainSlide();
      pausefn();
      });
      
  });



  //6-1. 다음화살버튼 클릭이벤트

  $('.next-btn').click(function(){
    if($('.slide-wrap').is(':animated')){
      return;
    }
    clearInterval(setId);
    nextCount();
    pausefn();

  });



  //6-2. 이전화살버튼 클릭이벤트

  $('.prev-btn').click(function(){
    if( $('.slide-wrap').is(':animated')){
      return;
    }
    clearInterval(setId);
    prevCount();
    pausefn();

  });



  //7. 정지버튼 클릭 이벤트 (정지와 플레이)

  $('.pause-btn').click(function(){
    if( $(this).children().hasClass('fa-pause')===true){
     pausefn();
    }

    else {
     playfn();
    }

  });



})(jQuery);