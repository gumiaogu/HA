// 선생님 점검 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var book = Paper.image('../img/book.png', 0, 0, 30, 30).toDefs();
var arrow1 = Paper.image('../img/arrow1.png', 0, 0, 20, 20).toDefs();
// var arrow2 = Paper.image('../img/arrow2.png', 0, 0, 20, 20).toDefs();


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

topBox.text(300, 27, '나 01').attr({
  'font-size': 18
});

function handlerBon() { // 처음으로
  location.replace('bon_03.html');
}


// 상단
var topArea = Paper.g();
login.use().transform('t30, 50').appendTo(topArea);

topArea.text(65, 80, '앞에서 배운 한자들이에요.').attr({
  'font-size': 15,
  'font-weight': 'bold'
});

// 하단
var bottomArea = Paper.g();
bottomArea.rect(30, 120, 60, 30, 5).attr({
  'fill': '#9bc3ff'
});
bottomArea.text(45, 140, '세트').attr({
  'font-size': 15
});
bottomArea.rect(100, 120, 230, 30, 5).attr({
  'fill': '#9bc3ff'
});
bottomArea.text(180, 140, '학 습 목 표').attr({
  'font-size': 15
});

var set = ['가 01', '가 02', '가 03', '가 04', '가 05', '가 06', '가 07', '가 08', '가 09', '가 10'];
for (var i = 0; i < set.length; i++) {
  bottomArea.rect(30, (i * 45) + 160, 60, 35, 5).attr({
    'fill': '#f1f3f4'
  });
  bottomArea.text(43, (i * 45) + 184, set[i]).attr({
    'font-size': 15
  });
  bottomArea.rect(100, (i * 45) + 160, 230, 35, 5).attr({
    'fill': '#f1f3f4'
  });
}

var copyData = data.slice();
var hanjaEl = [];
var meanEl = [];
for (var i = 0; i < 50; i++) {
  hanjaEl.push(copyData[i].hanja);
}
for (var k = 0; k < 50; k++) {
  bottomArea.text(115 + (k % 5) * 45, 185 + Math.floor(k / 5) * 45, hanjaEl[k]).attr({
    'font-size': 24,
    'cursor': 'pointer'
  });
}

///////////////////////////////////////////////////
bottomArea.rect(100, 160, 230, 35, 5).attr({
  'fill': '#f1f3f4'
});

var hanjaT = bottomArea.text(115, 185, ['口', '目', '耳', '手', '力']).attr({
  'font-size': 24,
  'cursor': 'pointer'
});
hanjaT.selectAll('tspan')[0].click(handler02).attr({
  x: 115
});
hanjaT.selectAll('tspan')[1].click(handler03).attr({
  x: 160
});
hanjaT.selectAll('tspan')[2].click(handler04).attr({
  x: 205
});
hanjaT.selectAll('tspan')[3].click(handler05).attr({
  x: 250
});
hanjaT.selectAll('tspan')[4].click(handler06).attr({
  x: 295
});


function handler02() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '입 구').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler03() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '눈 목').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler04() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '귀 이').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler05() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '손 수').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler06() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '힘 력').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}


bottomArea.rect(100, 340, 230, 35, 5).attr({
  'fill': '#f1f3f4'
});

var hanjaTT = bottomArea.text(115, 365, ['人', '大', '女', '子', '立']).attr({
  'font-size': 24,
  'cursor': 'pointer'
});
hanjaTT.selectAll('tspan')[0].click(handler07).attr({
  x: 115
});
hanjaTT.selectAll('tspan')[1].click(handler08).attr({
  x: 160
});
hanjaTT.selectAll('tspan')[2].click(handler09).attr({
  x: 205
});
hanjaTT.selectAll('tspan')[3].click(handler10).attr({
  x: 250
});
hanjaTT.selectAll('tspan')[4].click(handler11).attr({
  x: 295
});
arrow1.use().transform('t10, 610').click(handlerBon).appendTo(bottomArea).attr({
  'cursor': 'pointer'
});


function handler07() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '사람 인').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler08() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '큰 대').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler09() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '여자 녀').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler10() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '아들 자').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
function handler11() {
  var PR = Paper.rect(50, 250, 255, 180, 5).attr({
    'fill': '#ffc5d0',
    'opacity': 0.9
  });
  var PT = Paper.text(180, 350, '설 립').attr({
    'font-size': 45,
    'text-anchor': 'middle'
  });
  var group = Paper.g(PR, PT);
  setTimeout(function() {
    group.remove();
  }, 1000);
}
// arrow2.use().transform('t330, 610').appendTo(bottomArea);
