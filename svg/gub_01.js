var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var book = Paper.image('../img/book.png', 0, 0, 30, 30).toDefs();
var exam = Paper.image('../img/exam.png', 0, 0, 150, 38).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});


var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': 'Wheat'
});

topBox.rect(11, 6, 32, 28).click(handler).attr({
  'fill': 'Wheat',
  'cursor': 'pointer'
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).click(handler).attr({
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

var t1 = topArea.text(65, 80, ['8급', '배정한자는', '50자', '입니다.']).attr({
  'font-size': 15,
  'font-weight': 'bold'
});
t1.selectAll('tspan')[1].attr({
  x: 90,
  'font-weight': 'normal'
});
t1.selectAll('tspan')[2].attr({
  x: 160,
  'font-weight': 'weight'
});
t1.selectAll('tspan')[3].attr({
  x: 190,
  'font-weight': 'normal'
});

topArea.rect(30, 145, 300, 400).attr({
  'fill': 'white'
});
topArea.line(30, 145, 330, 145).attr({
  'stroke': 'gray'
});

// 하단
var bottomArea = Paper.g();
bottomArea.path('M50,110 L125,110 A18,18 0 0,1 145,130 L145,150 L30,150 L30,130 A18,18 0 0,1 50,110').attr({
  'fill': '#c3d8d8'
});

bottomArea.path('M170,110 L245,110 A18,18 0 0,1 265,130 L265,150 L150,150 L150,130 A18,18 0 0,1 170,110').attr({
  'fill': '#ffe2c5'
});

bottomArea.text(46, 133, '재능스스로한자').click(handler).attr({
  'font-size': 14,
  'fill': 'gray',
  'cursor': 'pointer'
});

bottomArea.text(185, 133, '급수시험').attr({
  'font-size': 14,
  'font-weight': 'bold',
  'cursor': 'pointer'
});

bottomArea.rect(30, 145, 300, 400).attr({
  'fill': 'white'
});
bottomArea.line(30, 145, 330, 145).attr({
  'stroke': 'gray'
});


bottomArea.rect(30, 160, 50, 70).attr({
  'fill': 'gray',
  'opacity': 0.2,
  'stroke': 'black'
});
bottomArea.text(43, 200, '급수').attr({
  'fill': 'black',
  'font-size': 14,
  'font-weight': 'bold'
});

bottomArea.rect(80, 160, 80, 70).attr({
  'fill': 'gray',
  'opacity': 0.2,
  'stroke': 'black'
});

bottomArea.text(90, 190, '배정한자 수').attr({
  'fill': 'black',
  'font-size': 13,
  'font-weight': 'bold'
});

bottomArea.text(93, 210, '(추가한자)').attr({
  'fill': 'black',
  'font-size': 13,
  'font-weight': 'bold'
});

bottomArea.rect(160, 160, 60, 70).attr({
  'fill': 'gray',
  'opacity': 0.2,
  'stroke': 'black'
});
bottomArea.text(168, 190, '재능한자').attr({
  'fill': 'black',
  'font-size': 13,
  'font-weight': 'bold'
});
bottomArea.text(166, 210, '해당 등급').attr({
  'fill': 'black',
  'font-size': 13,
  'font-weight': 'bold'
});

bottomArea.rect(220, 160, 110, 70).attr({
  'fill': 'gray',
  'opacity': 0.2,
  'stroke': 'black'
});
bottomArea.text(226, 200, ' 카드 / 게임 / 모의').attr({
  'fill': 'black',
  'font-size': 14,
  'font-weight': 'bold'
});


var grade = ['8급', '7급', '6급', '5급', '4급'];
for (var k = 0; k < 5; k++) {
  bottomArea.rect(30, (k * 55) + 230, 50, 55).attr({
    'fill': 'gray',
    'opacity': 0.2,
    'stroke': 'black'
  });
  bottomArea.text(43, (k * 55) + 264, grade[k]).attr({
    'fill': 'red',
    'font-size': 16,
    'font-weight': 'bold'
  });
  bottomArea.rect(80, (k * 55) + 230, 80, 55).attr({
    'fill': 'white',
    'opacity': 0.2,
    'stroke': 'black'
  });
  bottomArea.rect(160, (k * 55) + 230, 60, 55).attr({
    'fill': 'white',
    'opacity': 0.2,
    'stroke': 'black'
  });
  bottomArea.rect(220, (k * 55) + 230, 110, 55).attr({
    'fill': 'white',
    'opacity': 0.2,
    'stroke': 'black'
  });
}

var t2 = bottomArea.text(123, 255, ['50', '(+50)', '150', '(+100)', '300', '(+510)', '600', '(+300)', '900', '(+300)']).attr({
  'fill': 'black',
  'font-size': 14,
  'font-weight': 'bold',
  'text-anchor': 'middle'
});
t2.selectAll('tspan')[1].attr({
  x: 123,
  y: 270,
});
t2.selectAll('tspan')[2].attr({
  x: 124,
  y: 310,
});
t2.selectAll('tspan')[3].attr({
  x: 123,
  y: 325,
});
t2.selectAll('tspan')[4].attr({
  x: 123,
  y: 365,
});
t2.selectAll('tspan')[5].attr({
  x: 123,
  y: 380,
});
t2.selectAll('tspan')[6].attr({
  x: 123,
  y: 420,
});
t2.selectAll('tspan')[7].attr({
  x: 123,
  y: 435,
});
t2.selectAll('tspan')[8].attr({
  x: 123,
  y: 475,
});
t2.selectAll('tspan')[9].attr({
  x: 123,
  y: 490,
});

var t3 = bottomArea.text(190, 265, ['가~나', '다', '라', '마', '바']).attr({
  'fill': 'black',
  'font-size': 14,
  'font-weight': 'bold',
  'text-anchor': 'middle'
});
t3.selectAll('tspan')[1].attr({
  x: 190,
  y: 317,
});
t3.selectAll('tspan')[2].attr({
  x: 190,
  y: 373,
});
t3.selectAll('tspan')[3].attr({
  x: 190,
  y: 428,
});
t3.selectAll('tspan')[4].attr({
  x: 190,
  y: 483,
});

for (var k = 0; k < 5; k++) {
  bottomArea.circle(240, (k * 55) + 257, 13).attr({
    'fill': '#ccffcc',
    'stroke': 'gray'
  });
  bottomArea.text(235, (k * 55) + 263, 'C').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(274, (k * 55) + 257, 13).attr({
    'fill': '#d4fafa',
    'stroke': 'gray'
  });
  bottomArea.text(269, (k * 55) + 263, 'G').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
  bottomArea.circle(308, (k * 55) + 257, 13).attr({
    'fill': '#ffd9fa',
    'stroke': 'gray'
  });
  bottomArea.text(304, (k * 55) + 263, 'T').attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

var circleC = bottomArea.circle(240, 257, 13).attr({
  'fill': '#ccffcc',
  'stroke': 'gray'
});
var circleCT = bottomArea.text(235, 263, 'C').attr({
  'stroke': 'black'
});
var circle1 = bottomArea.g(circleC, circleCT).click(handlerC).attr({
  'cursor': 'pointer'
});

var circleG = bottomArea.circle(274, 257, 13).attr({
  'fill': '#d4fafa',
  'stroke': 'gray'
});
var circleGT = bottomArea.text(269, 263, 'G').attr({
  'stroke': 'black'
});
var circle2 = bottomArea.g(circleG, circleGT).click(handlerG).attr({
  'cursor': 'pointer'
});

function handlerC() {
  bottomArea.circle(240, 257, 13).attr({
    'fill': '#cbff75',
    'stroke': 'gray'
  });
  bottomArea.text(235, 263, 'C').attr({
    'stroke': 'black'
  });
  setTimeout(function() {
    location.replace('gub_02.html');
  }, 400);
}

function handlerG() {
  bottomArea.circle(274, 257, 13).attr({
    'fill': '#74d19d',
    'stroke': 'gray'
  });
  bottomArea.text(269, 263, 'G').attr({
    'stroke': 'black'
  });
  setTimeout(function() {
    location.replace('gub_05.html');
  }, 400);
}

exam.use().transform('t180, 512').click(handlerH).appendTo(Paper);

function handlerH() {
  location.replace('https://www.hanja4u.org/');
}
