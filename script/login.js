//ID로그인, QR로그인
$(document).ready(function(){
  let id = $('.id');
  let qr = $('.qr');
  
  id.click(function(){
    $("fieldset > div").removeClass('on');
    $(".con01").addClass('on');
  });
  qr.click(function(){
    $("fieldset > div").removeClass('on');
    $(".con02").addClass('on');
  });
});

// 배너
let banner = ['login_banner01', 'login_banner02', 'login_banner03'];
let n = Math.floor(Math.random()*3);

document.getElementById('banner').innerHTML=`<a href="#" title="banner"><img src="./images/${banner[n]}.gif" alt=""></a>`;

// 타이머
var time = 180;
var min = "";
var sec = "";

var x = setInterval(function(){
  min = parseInt(time/60);
  sec = time%60;

  document.getElementById("timer").innerHTML = min + "분" + sec + "초";time--;
  
  if (time < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "재시도";
  }
}, 1000);