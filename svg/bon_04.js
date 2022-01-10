// 학습 마무리 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var cha = Paper.image('../img/cha.png', 0, 0, 25, 32).toDefs();
var intro = Paper.image('../img/intro.png', 0, 0, 27, 38).toDefs();
var intro2 = Paper.image('../img/intro2.png', 0, 0, 30, 39).toDefs();
var end = Paper.image('../img/end.png', 0, 0, 60, 39).toDefs();
// var tray = Paper.image('../img/tray.png', 0, 0, 339, 60).toDefs();
var arrow1 = Paper.image('../img/arrow1.png', 0, 0, 20, 20).toDefs();
var larva = Paper.image('../img/larva.png', 0, 0, 40, 30).toDefs();


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

topBox.text(305, 27, '나 01').attr({
  'font-size': 18
});

function handler() {
  location.replace('bon_03.html');
}


// 상단
var topArea = Paper.g();
login.use().transform('t30, 50').appendTo(topArea);

topArea.text(65, 80, '이번 주에 학습한 한자예요.').attr({
  'font-size': 15
});


// 하단
var bottomArea = Paper.g();

for (var i = 0; i < 9; i++) {
  bottomArea.rect(30 + (i % 3) * 100, 120 + Math.floor(i / 3) * 140, 100, 140).attr({
    'stroke': 'gray',
    'fill': 'none'
  });
}

var textSi = bottomArea.text(58, 208, '矢').click(handler01).attr({
  'font-size': 55,
  'stroke': 'black',
  'cursor': 'pointer'
});

function handler01() {
  bottomArea.rect(35, 125, 90, 125).attr({
    'fill': 'white'
  });
  textSi.use().transform('t0, 0').click(handler01).appendTo(Paper).animate({
    transform: 't0,-20'
  }, 500);
  setTimeout(function() {
    bottomArea.text(53, 235, '화살 시').attr({
      'font-size': 20
    });
  }, 500);
}

var textIn = bottomArea.text(258, 208, '刃').click(handler02).attr({
  'font-size': 55,
  'stroke': 'black',
  'cursor': 'pointer'
});

function handler02() {
  bottomArea.rect(235, 125, 90, 125).attr({
    'fill': 'white'
  });
  textIn.use().transform('t0, 0').click(handler02).appendTo(Paper).animate({
    transform: 't0,-20'
  }, 500);
  setTimeout(function() {
    bottomArea.text(253, 235, '칼날 인').attr({
      'font-size': 20
    });
  }, 500);
}

var textGoong = bottomArea.text(158, 348, '弓').click(handler03).attr({
  'font-size': 55,
  'stroke': 'black',
  'cursor': 'pointer'
});

function handler03() {
  bottomArea.rect(135, 265, 90, 125).attr({
    'fill': 'white'
  });
  textGoong.use().transform('t0, 0').click(handler03).appendTo(Paper).animate({
    transform: 't0,-20'
  }, 500);
  setTimeout(function() {
    bottomArea.text(160, 375, '활 궁').attr({
      'font-size': 20
    });
  }, 500);
}

var textGong = bottomArea.text(58, 490, '工').click(handler04).attr({
  'font-size': 55,
  'stroke': 'black',
  'cursor': 'pointer'
});

function handler04() {
  bottomArea.rect(35, 405, 90, 125).attr({
    'fill': 'white'
  });
  textGong.use().transform('t0, 0').click(handler04).appendTo(Paper).animate({
    transform: 't0,-20'
  }, 500);
  setTimeout(function() {
    bottomArea.text(53, 517, '장인 공').attr({
      'font-size': 20
    });
  }, 500);
}

var textJi = bottomArea.text(258, 490, '至').click(handler05).attr({
  'font-size': 55,
  'stroke': 'black',
  'cursor': 'pointer'
});

function handler05() {
  bottomArea.rect(235, 405, 90, 125).attr({
    'fill': 'white'
  });
  textJi.use().transform('t0, 0').click(handler05).appendTo(Paper).animate({
    transform: 't0,-20'
  }, 500);
  setTimeout(function() {
    bottomArea.text(253, 517, '칼날 인').attr({
      'font-size': 20
    });
  }, 500);
}

cha.use().transform('t167, 177').appendTo(bottomArea);
intro.use().transform('t63, 310').appendTo(bottomArea);
intro2.use().transform('t265, 310').appendTo(bottomArea);
end.use().transform('t147, 455').appendTo(bottomArea);

// 보상 구슬 영역
// var rewardArea = Paper.g();
// var redCircle = rewardArea.circle(-20, -20, 20).attr({
//   'fill': 'red',
//   'opacity': 0.5,
//   'stroke': 'none'
// });
//
// tray.use().transform('t10, 545').appendTo(rewardArea);
//
// redCircle.use().transform('t200,0').appendTo(rewardArea).animate({
//   transform: 't200,560'
// }, 1000, mina.bounce);
//
// setTimeout(function() {
//   rewardArea.text(169, 545, '나01').attr({
//     'fill': 'black',
//     'font-size': 12,
//     'font-weight': 'bold'
//   });
// }, 1050);

// larva.use().transform('t310, 560').appendTo(bottomArea);
larva.use().transform('t310, 560').appendTo(Paper).animate({
  transform: 't20,560'
}, 25000, mina.bounce);

arrow1.use().transform('t10, 610').click(handler).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});
