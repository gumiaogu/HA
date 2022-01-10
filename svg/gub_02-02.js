// 한능원 급수한자 8급 배정한자 표
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지

var oji = Paper.image('../img/oji.png', 0, 0, 130, 150).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': 'Wheat'
});

topBox.rect(11, 6, 32, 28).click(handler01).attr({
  'fill': 'Wheat',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).click(handler01).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

topBox.text(260, 27, '급수한자 8급').attr({
  'font-size': 18
});

function handler01() {
  location.replace('gub_01.html');
}

// 상단
var hanjaArea = Paper.g();

hanjaArea.text(180, 180, '한자를 보고').attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
hanjaArea.text(180, 260, '뜻음을 말해 보세요.').attr({
  'font-size': 40,
  'text-anchor': 'middle'
});
oji.use().transform('t110, 310').appendTo(hanjaArea);


setTimeout(function() {
  location.replace('gub_02-03.html');
}, 4000);
