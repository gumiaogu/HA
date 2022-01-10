// 나의 단어장 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var star2 = Paper.image('../img/star2.png', 0, 0, 25, 25).toDefs();
var star = Paper.image('../img/star.png', 0, 0, 25, 25).toDefs();
var arrow1 = Paper.image('../img/arrow1.png', 0, 0, 20, 20).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#d3e7b9'
});

topBox.rect(11, 6, 32, 28).click(handler).attr({
  'fill': '#d3e7b9',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

function handler() {
  location.replace('bon_03.html');
}


// 상단
var topArea = Paper.g();
login.use().transform('t30, 50').appendTo(topArea);

topArea.text(67, 80, '나의 단어장').attr({
  'font-size': 17
});


// 하단
var bottomArea = Paper.g();

var copyData = data.slice(0, 8);
for (var i = 0; i < copyData.length; i++) {
  bottomArea.text(65, 140 + (i * 60), copyData[i].hanja).attr({
    'font-size': 25
  });
  bottomArea.text(135, 139 + (i * 60), copyData[i].mean).attr({
    'font-size': 20
  });
  bottomArea.line(50, 160 + (i * 60), 320, 160 + (i * 60)).attr({
    'stroke': '#dbd9db'
  });
}

star2.use().transform('t280, 120').click(handlerA).appendTo(bottomArea);

function handlerA() {
  star.use().transform('t280, 120').appendTo(bottomArea);
}

star2.use().transform('t280, 180').click(handlerB).appendTo(bottomArea);

function handlerB() {
  star.use().transform('t280, 180').appendTo(bottomArea);
}

star2.use().transform('t280, 240').click(handlerC).appendTo(bottomArea);

function handlerC() {
  star.use().transform('t280, 240').appendTo(bottomArea);
}

star2.use().transform('t280, 300').appendTo(bottomArea);
star2.use().transform('t280, 360').appendTo(bottomArea);
star2.use().transform('t280, 420').appendTo(bottomArea);
star2.use().transform('t280, 480').appendTo(bottomArea);
star2.use().transform('t280, 540').appendTo(bottomArea);

for (var i = 0; i < 2; i++) {
  bottomArea.circle(180, (i * 25) + 595, 2).attr({
    'stroke': 'black'
  });
}

arrow1.use().transform('t10, 610').click(handler).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
