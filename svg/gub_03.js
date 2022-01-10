// 카드 도입 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var bubble = Paper.image('../img/bubble.png', 0, 0, 220, 170).toDefs();
var intro = Paper.image('../img/intro.png', 0, 0, 120, 160).toDefs();


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

bubble.use().transform('t120,0').click(handler).appendTo(Paper).animate({
  transform: 't120,100'
}, 300);
intro.use().transform('t40, 0').appendTo(Paper).animate({
  transform: 't40,270'
}, 1000, mina.bounce);

Paper.text(185, 0, '퀴즈').click(handler).attr({
  'cursor': 'pointer',
  'font-size': 50
}).animate({
  transform: 't0,205'
}, 1000, mina.bounce);


function handler() {
  location.replace('gub_04.html');
}
