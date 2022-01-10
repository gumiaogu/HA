// 진도 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var book = Paper.image('../img/book.png', 0, 0, 25, 25).toDefs();


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
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).click(handler).attr({
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

bottomArea.path('M170,110 L245,110 A18,18 0 0,1 265,130 L265,150 L150,150 L150,130 A18,18 0 0,1 170,110').click(handler01).attr({
  'fill': '#ffe2c5'
});

bottomArea.text(45, 133, '재능스스로한자').attr({
  'font-size': 14,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

bottomArea.text(185, 133, '급수시험').click(handler01).attr({
  'font-size': 14,
  'fill': 'gray',
  'cursor': 'pointer'
});

bottomArea.rect(30, 145, 300, 400).attr({
  'fill': 'white'
});
bottomArea.line(30, 145, 330, 145).attr({
  'stroke': 'gray'
});

///////////////////////////////////////////

bottomArea.line(90, 155, 90, 350).attr({
  'stroke': 'gray'
});
bottomArea.line(170, 155, 170, 350).attr({
  'stroke': 'gray'
});

var t2 = bottomArea.text(47, 175, ['점검', '세트', '메뉴']).attr({
  'font-size': 15,
  'font-weight': 'bold'
});
t2.selectAll('tspan')[1].attr({
  x: 117
});
t2.selectAll('tspan')[2].attr({
  x: 240
});

var set = ['나 001', '나 002', '나 R01', '나 003'];
for (var i = 0; i < set.length; i++) {
  bottomArea.line(30, (i * 40) + 190, 330, (i * 40) + 190).attr({
    'stroke': 'gray'
  });
  bottomArea.rect(48, (i * 40) + 200, 20, 20, 5).attr({
    'fill': 'white',
    'stroke': 'gray'
  });
  bottomArea.text(110, (i * 40) + 215, set[i]).attr({
    'font-size': 14
  });
}
bottomArea.rect(48, 200, 20, 20, 5).click(handler02).attr({
  'fill': 'white',
  'stroke': 'gray',
  'cursor': 'pointer'
});

var setT = ['Q', 'Q', 'G', 'Q'];
for (var i = 0; i < setT.length; i++) {
  bottomArea.circle(220, 210 + (i * 40), 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(215, 215 + (i * 40), 'C').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(275, 210 + (i * 40), 15).attr({
    'fill': '#ffd9fa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(270, 215 + (i * 40), setT[i]).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

// 본세트 카드
var circleF = bottomArea.circle(220, 210, 15).attr({
  'fill': '#ccffcc',
  'stroke': 'black'
});
var circleT = bottomArea.text(215, 215, 'C').attr({
  'stroke': 'black'
});
var circle3 = bottomArea.g(circleF, circleT).click(handler03).attr({
  'cursor': 'pointer'
});


// 본세트 퀴즈
var circleFF = bottomArea.circle(275, 210, 15).attr({
  'fill': '#ffd9fa',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleTT = bottomArea.text(270, 215, 'Q').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle4 = bottomArea.g(circleFF, circleTT).click(handler04).attr({
  'cursor': 'pointer'
});

// 활용세트 카드
var circleG = bottomArea.circle(220, 290, 15).attr({
  'fill': '#ccffcc',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleGT = bottomArea.text(215, 295, 'C').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle5 = bottomArea.g(circleG, circleGT).click(handler08).attr({
  'cursor': 'pointer'
});

// green G
var circleG = bottomArea.circle(275, 290, 15).attr({
  'fill': '#d4fafa',
  'stroke': 'black',
  'cursor': 'pointer'
});
var circleGT = bottomArea.text(270, 295, 'G').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});
var circle5 = bottomArea.g(circleG, circleGT).click(handler05).attr({
  'cursor': 'pointer'
});


// 총정리 R
var squareF = bottomArea.rect(205, 551, 28, 28, 5).attr({
  'fill': '#faf4c0',
  'stroke': 'black'
});
var squareT = bottomArea.text(215, 571, 'R').attr({
  'stroke': 'black'
});
var square6 = bottomArea.g(squareF, squareT).click(handler06).attr({
  'cursor': 'pointer'
});



for (var i = 0; i < 3; i++) {
  bottomArea.circle(180, (i * 20) + 360, 1).attr({
    'stroke': 'black'
  });
}

bottomArea.line(90, 410, 90, 580).attr({
  'stroke': 'gray'
});
bottomArea.line(170, 410, 170, 580).attr({
  'stroke': 'gray'
});

var set2 = ['나 019', '나 020', '나 R10', '나 총02'];
for (var i = 0; i < set.length; i++) {
  bottomArea.line(30, (i * 40) + 425, 330, (i * 40) + 425).attr({
    'stroke': 'gray'
  });
  bottomArea.rect(50, (i * 40) + 435, 20, 20, 5).attr({
    'fill': 'white',
    'stroke': 'gray'
  });
  bottomArea.text(110, (i * 40) + 450, set2[i]).attr({
    'font-size': 14
  });
}

var setTT = ['Q', 'Q', 'G'];
for (var i = 0; i < setTT.length; i++) {
  bottomArea.circle(220, 445 + (i * 40), 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(215, 450 + (i * 40), 'C').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(275, 445 + (i * 40), 15).attr({
    'fill': '#ffd9fa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(270, 450 + (i * 40), setTT[i]).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

bottomArea.circle(275, 525, 15).attr({
  'fill': '#d4fafa',
  'stroke': 'black',
  'cursor': 'pointer'
});
bottomArea.text(270, 530, 'G').attr({
  'stroke': 'black',
  'cursor': 'pointer'
});

// 교재분류표 아이콘
bottomArea.circle(330, 610, 20).attr({
  'fill': 'Moccasin'
});
book.use().transform('t317, 597').click(handler07).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});


function handler01() { // 급수한자
  location.replace('gub_01.html');
}

function handler02() { // 점검(check) OK
  bottomArea.text(55, 217, 'V').attr({
    'stroke': 'tomato'
  });
  setTimeout(function() {
    location.replace('bon_03C.html');
  }, 400);
}

function handler03() { // C: 본교재 카드 OK
  bottomArea.circle(220, 210, 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black'
  });
  bottomArea.text(215, 215, 'C').attr({
    'stroke': 'black'
  });
  setTimeout(function() {
    location.replace('bon_03BC.html');
  }, 400);
}

function handler04() { // Q: 본교재 퀴즈 OK
  bottomArea.circle(275, 210, 15).attr({
    'fill': '#ffd9fa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(270, 215, 'Q').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  setTimeout(function() {
    location.replace('bon_03BQ.html');
  }, 400);
}
//
function handler08() { // C: 활용교재 카드 OK
  bottomArea.circle(220, 290, 15).attr({
    'fill': '#ccffcc',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(215, 295, 'C').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  setTimeout(function() {
    location.replace('hwal_01.html');
  }, 400);
}

function handler05() { // G: 활용교재 게임 OK
  bottomArea.circle(275, 290, 15).attr({
    'fill': '#d4fafa',
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.text(270, 295, 'G').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  setTimeout(function() {
    location.replace('hwal_03.html');
  }, 400);
}

function handler06() { // R: 총정리 OK
  bottomArea.rect(205, 551, 28, 28, 5).attr({
    'fill': '#faf4c0',
    'stroke': 'black'
  });
  bottomArea.text(215, 571, 'R').attr({
    'stroke': 'black'
  });
  setTimeout(function() {
    location.replace('chong_01.html');
  }, 400);
}

function handler07() { //교재분류표(table) OK
  location.replace('bon_03T.html');
}
