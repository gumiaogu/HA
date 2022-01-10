// 로그인 화면
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var logo = Paper.image('../img/logo.png', 0, 0, 230, 37).toDefs();
var login = Paper.image('../img/login.png', 0, 0, 90, 140).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});


// 상단
var topArea = Paper.g();

logo.use().transform('t70, 50').appendTo(topArea);
topArea.text(180, 140, 'MEMORY APP').attr({
  'font-size': 40,
  'font-weight': 'bold',
  'text-anchor': 'middle'
});
login.use().transform('t140, 190').appendTo(topArea);


// 하단
var bottomArea = Paper.g();

var perData = ['이름', '회원번호'];
for (var i = 0; i < perData.length; i++) {
  bottomArea.rect(70, (i * 40) + 380, 150, 30).attr({
    'fill': '#eff5f5',
    'stroke': '#bbbbbb'
  });
  bottomArea.text(80, (i * 40) + 400, perData[i]).attr({
    'font-size': 12,
    'fill': 'gray'
  });
}

var login = Paper.g();
login.click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('bon_02B.html');
}

login.rect(230, 380, 60, 70, 5).attr({
  'fill': '#ffe2c5'
});
login.text(243, 420, '로그인').attr({
  'font-size': '13',
  'font-weight': 'bold'
});

bottomArea.text(70, 470, '* 재능스스로한자 회원 전용 서비스입니다.').attr({
  'font-size': '11'
});

// 맛보기 버튼
var sampleExe = Paper.g();
sampleExe.click(handler02).attr({
  'cursor': 'pointer'
});
sampleExe.rect(70, 520, 220, 30, 5).attr({
  'fill': '#c3d8d8'
});
sampleExe.text(180, 540, '맛 보 기').attr({
  'font-size': '12',
  'text-anchor': 'middle'
});

function handler02() {
  location.replace('bon_02S.html');
}
