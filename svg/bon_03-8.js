// 메뉴 박스 - 메뉴 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var book = Paper.image('../img/book.png', 0, 0, 30, 30).toDefs();
var sprout = Paper.image('../img/sprout.png', 0, 0, 35, 38).toDefs();
var home = Paper.image('../img/home.png', 0, 0, 30, 30).toDefs();
var star = Paper.image('../img/star.png', 0, 0, 27, 27).toDefs();
var reward = Paper.image('../img/reward.png', 0, 0, 32, 32).toDefs();
var setting = Paper.image('../img/setting.png', 0, 0, 32, 32).toDefs();


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
  location.replace('bon_03-8.html');
}


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

bottomArea.path('M170,110 L245,110 A18,18 0 0,1 265,130 L265,150 L150,150 L150,130 A18,18 0 0,1 170,110').attr({
  'fill': '#ffe2c5'
});

var t1 = bottomArea.text(52, 132, ['재능스스로한자', '급수시험']).attr({
  'font-size': 12,
});
t1.selectAll('tspan')[1].attr({
  x: 190,
  'fill': 'gray'
});

bottomArea.rect(30, 145, 300, 400).attr({
  'fill': 'white'
});
bottomArea.line(30, 145, 330, 145).attr({
  'stroke': 'gray'
});
bottomArea.line(80, 155, 80, 550).attr({
  'stroke': 'gray'
});
bottomArea.line(150, 155, 150, 550).attr({
  'stroke': 'gray'
});

bottomArea.text(40, 175, '점 검').attr({
  'font-size': 15,
  'font-weight': 'bold'
});

var selecting = ['세 트', '메 뉴'];
for (var i = 0; i < selecting.length; i++) {
  bottomArea.text((i * 130) + 100, 175, selecting[i]).attr({
    'font-size': 15,
    'font-weight': 'bold'
  });
}

var set = ['가 009', '가 010', '가 총괄', '가 총필', '나 001', '나 002', '나 R01', '나 003', '나 004'];
for (var i = 0; i < set.length; i++) {
  bottomArea.line(30, (i * 40) + 190, 330, (i * 40) + 190).attr({
    'stroke': 'gray'
  });
  bottomArea.rect(43, (i * 40) + 200, 20, 20).attr({
    'fill': 'white',
    'stroke': 'gray'
  });
  bottomArea.text(95, (i * 40) + 215, set[i]).attr({
    'font-size': 14
  });
}
bottomArea.rect(43, 360, 20, 20).attr({
  'fill': '#ffeb46',
  'stroke': 'gray',
  'cursor': 'pointer'
});

var menuText1 = ['C', 'Q', 'C', 'Q'];
for (var i = 0; i < menuText1.length; i++) {
  bottomArea.circle(190 + (i % 2) * 50, 210 + Math.floor(i / 2) * 40, 15).attr({
    'fill': 'white',
    'stroke': 'black'
  });
  bottomArea.text(185 + (i % 2) * 50, 215 + Math.floor(i / 2) * 40, menuText1[i]).attr({
    'stroke': 'black'
  });
}

bottomArea.text(170, 295, '오프라인 교재를 확인하세요.').attr({
  'font-size': 13
});
bottomArea.text(170, 335, '오프라인 교재를 확인하세요.').attr({
  'font-size': 13
});

var circleF = bottomArea.circle(190, 370, 15).attr({
  'fill': '#9bc3ff',
  'stroke': 'black'
});
var circleT = bottomArea.text(185, 375, 'C').attr({
  'stroke': 'black'
});
var circle3 = bottomArea.g(circleF, circleT).attr({
  'cursor': 'pointer'
});

var circleFF = bottomArea.circle(240, 370, 15).attr({
  'fill': '#d6c2ee',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleTT = bottomArea.text(235, 375, 'Q').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle4 = bottomArea.g(circleFF, circleTT).attr({
  'cursor': 'pointer'
});

var menuText2 = ['C', 'Q', 'C', 'Q', 'C', 'Q', 'C', 'Q'];
for (var i = 0; i < menuText2.length; i++) {
  bottomArea.circle(190 + (i % 2) * 50, 410 + Math.floor(i / 2) * 40, 15).attr({
    'fill': 'white',
    'stroke': 'black'
  });
  bottomArea.text(185 + (i % 2) * 50, 415 + Math.floor(i / 2) * 40, menuText2[i]).attr({
    'stroke': 'black'
  });
}

var circleG = bottomArea.circle(240, 450, 15).attr({
  'fill': '#74d19d',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleGT = bottomArea.text(235, 455, 'G').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle5 = bottomArea.g(circleG, circleGT).attr({
  'cursor': 'pointer'
});

var squareF = bottomArea.rect(280, 236, 28, 28, 5).attr({
  'fill': '#ffc0cb',
  'stroke': 'black'
});
var squareT = bottomArea.text(290, 256, 'R').attr({
  'stroke': 'black'
});
var square6 = bottomArea.g(squareF, squareT).attr({
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  bottomArea.circle(180, (i * 25) + 570, 2).attr({
    'stroke': 'black'
  });
}

bottomArea.circle(320, 600, 30).attr({
  'fill': 'Moccasin'
});
book.use().transform('t305, 585').appendTo(bottomArea);

///////////////////////////////////////////////////////////////

var menu = Paper.g();
menu.rect(0, 0, 360, 640, 6).attr({
  'fill': 'gray',
  'opacity': 0.7
});

menu.rect(10, 50, 200, 350, 10).attr({
  'fill': 'white'
});

sprout.use().transform('t20, 60').appendTo(menu);

var menuT1 = menu.text(65, 87, ['김태은', '회원']).attr({
  'font-size': 15,
  'font-weight': 'bold'
});
menuT1.selectAll('tspan')[1].attr({
  x: 108,
  'font-weight': 'normal'
});

menu.line(20, 110, 200, 110).attr({
  'stroke': 'black'
});

var menuImg1 = home.use().transform('t25, 130').appendTo(menu);
var menuT1 = menu.text(63, 152, '홈으로').attr({
  'font-size': 13
});
var menu1 = menu.g(menuImg1, menuT1).click(handlerA).attr({
  'cursor': 'pointer'
});

function handlerA() {
  location.replace('bon_03.html');
}

var menuImg2 = star.use().transform('t26, 180').appendTo(menu);
var menuT2 = menu.text(63, 202, '나의 단어장').attr({
  'font-size': 13
});
var menu2 = menu.g(menuImg2, menuT2).click(handlerB).attr({
  'cursor': 'pointer'
});

function handlerB() {
  location.replace('bon_03-8_1.html');
}

var menuImg3 = reward.use().transform('t24, 230').appendTo(menu);
var menuT3 = menu.text(63, 252, '보상').attr({
  'font-size': 13
});
var menu3 = menu.g(menuImg3, menuT3).click(handlerC).attr({
  'cursor': 'pointer'
});

function handlerC() {
  location.replace('bon_03-8_2.html');
}

var menuImg4 = setting.use().transform('t24, 280').appendTo(menu);
var menuT4 = menu.text(63, 302, '설정').attr({
  'font-size': 13
});
var menu4 = menu.g(menuImg4, menuT4).click(handlerD).attr({
  'cursor': 'pointer'
});

function handlerD() {
  location.replace('bon_03-8_3.html');
}
