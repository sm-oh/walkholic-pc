let mobile_keys = ['iPhone','iPad','Android','BlackBerry','Windows Phone', 'SAMSUNG', 'LG', 'MOT', 'SonyErisson','Nokia'];
if(document.URL.match('move_pc_screen')) mobile_keys = null;
for( i in mobile_keys){
if(navigator.userAgent.match(mobile_keys[i]) != null){
location.href = "https://sm-oh.github.io/walkholic/moblie.html";
  break;
  }
} 

$(document).ready(function(){

  $(window).scroll(function(){
    let top = $(this).scrollTop();
    console.log(top);

    if(top>=500) {
      $('.top').fadeIn().css('display','block');
    } else {
      $('.top').fadeOut().css('display','none');
    }
  });

  let n = 0;
  let s_num = $('.mainSlide img').length;

  console.log(s_num);

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  $('.ad-inner').addClass('bg0' + randomNumber);

  const com = $('.commu');
  const list = $('.com_list');
  const lang = $('.lang');
  const lang_list = $('.lang_list');

  com.hover(function(){
    list.stop().slideToggle();
  });
  lang.hover(function(){
    lang_list.stop().slideToggle();
  });

  const aside = $('.mediatag');
  const asideP = $('.media');

  aside.click(function(){
    event.preventDefault();
    asideP.toggleClass('on');
  });

  let totalSlides = $('.i-box').length;
  let currentSlide = 0;

  function updateSlide() {
    $('.i-box').removeClass('active');
    $('.i-box').eq(currentSlide).addClass('active');
    $('.mediaProgress').css('width', ((currentSlide + 1) / totalSlides * 100) + '%');
  }
  $('.mediaNext').click(function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  });
  $('.mediaPrev').click(function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  });

  updateSlide();
  
});

let swiper = new Swiper(".mainSlide", {
  spaceBetween: 0,
  slidesPerView: 1,
  touchRatio: 0,
  loop: true,
  pagination: {
  el:  ".swiper-pagination",
  type: 'progressbar',
  },
  autoplay: {
    delay: 2900,
    disableOnInteraction: false,
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  parallax:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      let bgc = this.realIndex;
      console.log(bgc);
        
      if(bgc===0){
        $('.main_slide').css('background-image','linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./images/bg01.jpg)');
        $('.deco1')
        .addClass("font-up")
        .delay(1000)
        .queue(function(){
          $('.deco1').removeClass("font-up").dequeue();
        });
      } else if(bgc===1) {
        $('.main_slide').css('background-image','linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./images/bg02.jpg)');
        $('.deco2')
        .addClass("font-up")
        .delay(1000)
        .queue(function(){
          $('.deco2').removeClass("font-up").dequeue();
        });
      } else if(bgc===2) {
        $('.main_slide').css('background-image','linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./images/bg03.jpg)');
        $('.deco3')
        .addClass("font-up")
        .delay(1000)
        .queue(function(){
          $('.deco3').removeClass("font-up").dequeue();
        });
      } else {
        $('.main_slide').css('background-image','linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(./images/bg04.jpg)');
        $('.deco4')
        .addClass("font-up")
        .delay(1000)
        .queue(function(){
          $('.deco4').removeClass("font-up").dequeue();
        });
      }
    }
  }
});

let swiper2 = new Swiper(".themeSlide", {
  spaceBetween: 0,
  slidesPerView: 1,
  watchSlidesProgress: true,
  touchRatio: 0,
  loop: true,
  pagination: {
  el:  ".swiper-pagination",
  type: 'bullets',
  clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  observer: true,
  observeParents: true,
  parallax:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiper3 = new Swiper(".courseSlide", {
  spaceBetween: 20,
  slidesPerView: 2,
  watchSlidesProgress: true,
  loop: false,
  pagination: {
  el:  ".swiper-pagination",
  type: 'bullets',
  clickable: true,
  },
  observer: true,
  observeParents: true,
  parallax:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiper4 = new Swiper(".mainSlide", {
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  parallax:true,
});

swiper.controller.control = swiper4;

let swiper6 = new Swiper(".courseSlide", {
  spaceBetween: 20,
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination3",
    type: "fraction",
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  parallax:true,
});

swiper3.controller.control = swiper6;

let sw = 0;
$('.mainSlide-btn').click(function(){
    if(sw==0){
        $('.mainSlide-btn').addClass('pause');
        swiper.autoplay.stop();
        sw = 1;
    }else{
        $('.mainSlide-btn').removeClass('pause');
        swiper.autoplay.start();
        sw = 0;
    }
});

$(".quest").click(function(e){
  e.stopPropagation();
  e.preventDefault();
  let current = $(this);
  $(".quest").not(current).find("li").slideUp();
  $(".quest").not(current).find("img").removeClass("rotate").addClass("retake");
  current.find("li").slideToggle();
  let icon = current.find("img");
  if(icon.hasClass("rotate")){
      icon.removeClass("rotate").addClass("retake");
  } else if(icon.hasClass("retake")){
      icon.removeClass("retake").addClass("rotate");
  }
});

$(document).click(function(){
  $(".quest").find("li").slideUp();
  $(".quest").find("img").removeClass("rotate").addClass("retake");
});

$('.c_1').mouseover(function() {
  $(this).attr('src', './images/1-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn1').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_1').mouseout(function() {
  $(this).attr('src', './images/1.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn1').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_2').mouseover(function() {
  $(this).attr('src', './images/2-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn2').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_2').mouseout(function() {
  $(this).attr('src', './images/2.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn2').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_3').mouseover(function() {
  $(this).attr('src', './images/3-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn3').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_3').mouseout(function() {
  $(this).attr('src', './images/3.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn3').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_4').mouseover(function() {
  $(this).attr('src', './images/4-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn4').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_4').mouseout(function() {
  $(this).attr('src', './images/4.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn4').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_5').mouseover(function() {
  $(this).attr('src', './images/5-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn5').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_5').mouseout(function() {
  $(this).attr('src', './images/5.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn5').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_6').mouseover(function() {
  $(this).attr('src', './images/6-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn6').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_6').mouseout(function() {
  $(this).attr('src', './images/6.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn6').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_7').mouseover(function() {
  $(this).attr('src', './images/7-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn7').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_7').mouseout(function() {
  $(this).attr('src', './images/7.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn7').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_8').mouseover(function() {
  $(this).attr('src', './images/8-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn8').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_8').mouseout(function() {
  $(this).attr('src', './images/8.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn8').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});

$('.c_9').mouseover(function() {
  $(this).attr('src', './images/9-1.svg');
  $(this).css({
    'scale': '1.2',
    'transform': 'translate(10px, -10px)',
    'z-index': '2',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.7))'
  });
  $('.like_btn9').css({
    'opacity': '1',
    'z-index': '3',
    'transform': 'translateY(14px)',
    'filter': 'drop-shadow(-4px 4px 2px rgba(0,0,0,0.5))'
  });
});
$('.c_9').mouseout(function() {
  $(this).attr('src', './images/9.png');
  $(this).css({
    'scale': '1.0',
    'transform': 'translate(0px, 0px)',
    'z-index': '1',
    'filter': 'drop-shadow(0px 0px 0px rgba(0,0,0,0))'
  });
  $('.like_btn9').css({
    'opacity': '0',
    'z-index': '1',
    'transform': 'translateY(0px)',
  });
});