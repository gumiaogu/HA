// 카드 사용 가이드 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var si = Paper.image('../img/01_si.png', 0, 0, 90, 100).toDefs();
var tap = Paper.image('../img/tap.jpg', 0, 0, 50, 50).toDefs();
var swipe = Paper.image('../img/swipe.jpg', 0, 0, 50, 50).toDefs();
var close = Paper.image('../img/close.jpeg', 0, 0, 17, 17).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});


// 메뉴 박스
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#d3e7b9'
});

topBox.rect(11, 6, 32, 28).attr({
  'fill': '#d3e7b9',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

topBox.text(305, 27, '나 01').attr({
  'font-size': 18
});


// 본문
Paper.text(180, 70, '1 / 5').attr({
  'fill': 'gray',
  'font-size': 15,
  'text-anchor': 'middle'
});

var body = Paper.g().click(handler);
body.rect(45, 110, 270, 420, 10).attr({
  'fill': 'LemonChiffon',
  'stroke': 'gray',
  'opacity': 0.2
});
si.use().transform('t140, 150').appendTo(body).attr({
  'opacity': 0.2
});
body.text(180, 440, '矢').attr({
  'font-size': 150,
  'text-anchor': 'middle',
  'opacity': 0.2
});

function handler() {
  this.addClass('flipCard');
  setTimeout(function() {
    location.replace('bon_03BC-01(2).html');
  }, 1000);
}

Paper.path('M30,285 L10,300 L30,315').click(handlerPre).attr({
  'stroke': '#e4e7ea',
  'fill': '#bbbbbb'
});

function handlerPre() {
  location.replace('bon_03BC.html');
}

Paper.path('M330,285 L350,300 L330,315').click(handlerAft).attr({
  'stroke': '#e4e7ea',
  'fill': '#bbbbbb'
});

function handlerAft() {
  location.replace('bon_03BC-01.html');
}

// 사용 가이드
Paper.rect(30, 100, 300, 440, 5).attr({
  'fill': '#bbbbbb',
  'opacity': 0.3
});
Paper.text(180, 150, '< 사용 가이드 >').attr({
  'font-size': 25,
  'text-anchor': 'middle'
});
tap.use().transform('t57, 200').appendTo(Paper);
Paper.text(115, 235, '탭하여 카드를 뒤집어요.').attr({
  'font-size': 17,
});
swipe.use().transform('t57, 300').appendTo(Paper);
Paper.text(115, 335, '옆으로 밀어서 카드를 넘겨요.').attr({
  'font-size': 17,
});
Paper.rect(100, 500, 20, 20).click(handler01).attr({
  'fill': 'white',
  'stroke': 'gray'
});

function handler01() {
  Paper.text(104, 517, 'V').attr({
    'font-size': 20,
    'stroke': 'tomato'
  });
}
Paper.text(130, 515, '다시 보지 않기').attr({
  'font-size': 15,
});

close.use().transform('t220, 501').click(handler02).appendTo(Paper);

function handler02() {
  location.replace('bon_03BC-01.html');
}
