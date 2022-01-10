// 회원 - 학습세트 선택 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var level_ga = Paper.image('../img/level_ga.png', 0, 0, 90, 115).toDefs();
var level_na = Paper.image('../img/level_na.png', 0, 0, 90, 115).toDefs();
var level_da = Paper.image('../img/level_da.png', 0, 0, 90, 115).toDefs();
var level_la = Paper.image('../img/level_la.png', 0, 0, 90, 115).toDefs();
var level_ma = Paper.image('../img/level_ma.png', 0, 0, 90, 115).toDefs();
var level_ba = Paper.image('../img/level_ba.png', 0, 0, 90, 115).toDefs();
var level_sa = Paper.image('../img/level_sa.png', 0, 0, 90, 115).toDefs();
var level_aa = Paper.image('../img/level_aa.png', 0, 0, 90, 115).toDefs();
var level_ja = Paper.image('../img/level_ja.png', 0, 0, 90, 115).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});


// 상단
var topArea = Paper.g();
login.use().transform('t30, 50').appendTo(topArea);

var t1 = topArea.text(65, 80, ['김태은', '님은', '나01', '세트를 학습중입니다.']).attr({
  'font-size': 15,
  'font-weight': 'bold'
});
t1.selectAll('tspan')[1].attr({
  x: 110,
  'font-weight': 'normal'
});
t1.selectAll('tspan')[2].attr({
  x: 143,
  'font-weight': 'weight'
});
t1.selectAll('tspan')[3].attr({
  x: 173,
  'font-weight': 'normal'
});


// 하단
var bottomArea = Paper.g();
bottomArea.path('M50,110 L125,110 A18,18 0 0,1 145,130 L145,150 L30,150 L30,130 A18,18 0 0,1 50,110').attr({
  'fill': '#c3d8d8'
});

bottomArea.path('M170,110 L245,110 A18,18 0 0,1 265,130 L265,150 L150,150 L150,130 A18,18 0 0,1 170,110').click(handlerGub).attr({
  'fill': '#ffe2c5'
});

bottomArea.text(45, 133, '재능스스로한자').attr({
  'font-size': 14,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

bottomArea.text(183, 133, '급수시험').click(handlerGub).attr({
  'font-size': 14,
  'fill': 'gray',
  'cursor': 'pointer'
});

function handlerGub() {
  location.replace('gub_01.html');
}

///////////////////////////////////////////////////////////

bottomArea.rect(30, 145, 300, 400).attr({
  'fill': 'white'
});
bottomArea.line(30, 145, 330, 145).attr({
  'stroke': 'gray'
});

// 표지 이미지 테두리
for (var i = 0; i < 9; i++) {
  bottomArea.rect(30 + (i % 3) * 105, 150 + Math.floor(i / 3) * 140, 90, 115).attr({
    'fill': 'white',
    'stroke': 'gray'
  });
}

// 표지 이미지
level_ga.use().transform('t30, 150').appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
level_na.use().transform('t135, 150').click(handler01).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('bon_03.html');
}

level_da.use().transform('t240, 150').appendTo(bottomArea);
level_la.use().transform('t30, 290').appendTo(bottomArea);
level_ma.use().transform('t135, 290').appendTo(bottomArea);
level_ba.use().transform('t240, 290').appendTo(bottomArea);
level_sa.use().transform('t30, 430').appendTo(bottomArea);
level_aa.use().transform('t135, 430').appendTo(bottomArea);
level_ja.use().transform('t240, 430').appendTo(bottomArea);
