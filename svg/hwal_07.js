var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 50).toDefs();
// var tray = Paper.image('../img/tray.png', 0, 0, 339, 60).toDefs();
var trunk = Paper.image('../img/trunk.png', 0, 0, 38, 115).toDefs();
var pot2 = Paper.image('../img/pot2.png', 0, 0, 90, 100).toDefs();
var arrow1 = Paper.image('../img/arrow1.png', 0, 0, 20, 20).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#d3e7b9'
});
topBox.rect(11, 6, 32, 28).click(handlerBon).attr({
  'fill': '#d3e7b9',
  'cursor': 'pointer'
});
topBox.text(280, 27, '나 활용01').attr({
  'font-size': 18
});

for (var i = 0; i < 3; i++) {
  topBox.line(15, 13 + (i * 8), 40, 13 + (i * 8)).click(handlerBon).attr({
    'stroke': 'black',
    'cursor': 'pointer'
  });
}

function handlerBon() {
  location.replace('bon_03.html');
}

// 멘트 영역
var mentArea = Paper.g();

login.use().transform('t20, 50').appendTo(mentArea);
mentArea.text(53, 85, '참 잘했어요!')
  .attr({
    'fill': 'black',
    'font-size': '18'
  });

// 한자 영역
var hanjaArea = Paper.g();

hanjaArea.circle(180, 170, 30).attr({
  'fill': 'white',
  'stroke': '#d3e7b9',
  'stroke-width': 2
});
hanjaArea.text(180, 180, '矢').attr({
  'font-size': 30,
  'text-anchor': 'middle'
});

var t1 = ['弓', '刃'];
for (var i = 0; i < t1.length; i++) {
  hanjaArea.circle(138 + (i * 85), 240, 30).attr({
    'fill': 'white',
    'stroke': '#d3e7b9',
    'stroke-width': 2
  });
  hanjaArea.text(125 + (i * 85), 250, t1[i]).attr({
    'font-size': 30,
    'fill': 'black'
  });
}

var t2 = ['工', '至', '央'];
for (var i = 0; i < t2.length; i++) {
  hanjaArea.circle(95 + (i * 85), 310, 30).attr({
    'fill': 'white',
    'stroke': '#d3e7b9',
    'stroke-width': 2
  });
  hanjaArea.text(83 + (i * 85), 320, t2[i]).attr({
    'font-size': 30,
    'fill': 'black'
  });
}

var t3 = ['老', '囚', '己', '孝'];
for (var i = 0; i < t3.length; i++) {
  hanjaArea.circle(52 + (i * 85), 380, 30).attr({
    'fill': 'white',
    'stroke': '#d3e7b9',
    'stroke-width': 2
  });
  hanjaArea.text(39 + (i * 85), 390, t3[i]).attr({
    'font-size': 30,
    'fill': 'black'
  });
}
//
// hanjaArea.circle(50, 400, 30).attr({
//   'fill': 'white',
//   'stroke': '#d3e7b9',
//   'stroke-width': 2
// });
// hanjaArea.text(38, 410, '老').attr({
//   'font-size': 30,
//   'fill': 'black'
// });
//
// hanjaArea.circle(135, 400, 30).attr({
//   'fill': 'white',
//   'stroke': '#d3e7b9',
//   'stroke-width': 2
// });
// hanjaArea.text(122, 410, '囚').attr({
//   'font-size': 30,
//   'fill': 'black'
// });
//
// hanjaArea.circle(220, 400, 30).attr({
//   'fill': 'white',
//   'stroke': '#d3e7b9',
//   'stroke-width': 2
// });
// hanjaArea.text(208, 410, '己').attr({
//   'font-size': 30,
//   'fill': 'black'
// });
//
// hanjaArea.circle(300, 400, 30).attr({
//   'fill': 'white',
//   'stroke': '#d3e7b9',
//   'stroke-width': 2
// });
// hanjaArea.text(288, 410, '孝').attr({
//   'font-size': 30,
//   'fill': 'black'
// });


// 보상 구슬 영역
// var rewardArea = Paper.g();
// var blueCircle = rewardArea.circle(-20, -20, 20).attr({
//   'fill': 'blue',
//   'opacity': 0.5,
//   'stroke': 'none'
// });
//
// tray.use().transform('t10, 545').appendTo(rewardArea);
// rewardArea.circle(60, 540, 20).attr({
//   'fill': 'red',
//   'opacity': 0.5,
//   'stroke': 'none'
// });
// rewardArea.text(49, 545, '나01').attr({
//   'fill': 'black',
//   'font-size': 12,
//   'font-weight': 'bold'
// });
// rewardArea.circle(103, 540, 20).attr({
//   'fill': 'red',
//   'opacity': 0.5,
//   'stroke': 'none'
// });
// rewardArea.text(91, 545, '나02').attr({
//   'fill': 'black',
//   'font-size': 12,
//   'font-weight': 'bold'
// });
// blueCircle.use().transform('t200,0').appendTo(rewardArea).animate({
//   transform: 't200,560'
// }, 1000, mina.bounce);
//
// setTimeout(function() {
//   rewardArea.text(166, 545, '나R01').attr({
//     'fill': 'black',
//     'font-size': 12,
//     'font-weight': 'bold'
//   });
// }, 1050);

pot2.use().transform('t135, 480').appendTo(Paper);

trunk.use().transform('t155, 402').appendTo(Paper);

arrow1.use().transform('t10, 610').click(handlerBon).appendTo(Paper).attr({
  'cursor': 'pointer'
});
