// 총정리 - 한자어 퀴즈 도입 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var intro = Paper.image('../img/intro.png', 0, 0, 120, 160).toDefs();
var bubble = Paper.image('../img/bubble.png', 0, 0, 220, 170).toDefs();


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

topBox.rect(11, 6, 32, 28).click(handlerBon).attr({
  'fill': '#d3e7b9',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).click(handlerBon).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

topBox.text(300, 27, '나 R02').attr({
  'font-size': 18
});

function handlerBon() {
  location.replace('bon_03.html');
}

bubble.use().transform('t120,0').click(handler).appendTo(Paper).animate({
  transform: 't120,100'
}, 300);
intro.use().transform('t40, 0').appendTo(Paper).animate({
  transform: 't40,270'
}, 1000, mina.bounce);

Paper.text(165, 0, '총정리').click(handler).attr({
  'cursor': 'pointer',
  'font-size': 50
}).animate({
  transform: 't0,185'
}, 1000, mina.bounce);

Paper.text(180, 0, '한자어 퀴즈').click(handler).attr({
  'cursor': 'pointer',
  'font-size': 20
}).animate({
  transform: 't0,225'
}, 1000, mina.bounce);

function handler() {
  location.replace('chong_02.html');
}
