// 한능원 급수한자 8급 배정한자 표
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var arrow1 = Paper.image('../img/arrow1.png', 0, 0, 20, 20).toDefs();
var arrow2 = Paper.image('../img/arrow2.png', 0, 0, 20, 20).toDefs();


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
var topArea = Paper.g();
login.use().transform('t30, 50').appendTo(topArea);

topArea.text(68, 85, '배정한자 표 (8급)').attr({
    'font-size': 18,
    'font-weight': 'bold'
});

topArea.rect(260, 67, 80, 25, 5).attr({
'fill': 'LemonChiffon',
'stroke': 'gray'
});
topArea.text(270, 84, '카드로 보기').click(handlerCard).attr({
  'font-size': 13,
  'cursor': 'pointer'
});

function handlerCard() {
    location.replace('gub_02-02.html');
}

// 급수한자 부분
var bottomArea = Paper.g();

for (var i = 0; i < 10; i++) {
    bottomArea.rect(30, (i * 50) + 110, 300, 40, 5).attr({
        'fill': '#f1f3f4'
    });
}

var copyData = data.slice(187, 233);
var hanjaEl = [];
var meanEl = [];
for (var i = 0; i < 45; i++) {
    hanjaEl.push(copyData[i].hanja);
    meanEl.push(copyData[i].mean);
}
// console.log(hanjaEl[1]);

var hanjaChoices = Paper.g();

hanjaChoices.text(70, 140, '校').click(handler05).attr({
    'font-size': 24,
    'cursor': 'pointer'
});

hanjaChoices.text(120, 140, '敎').click(handler06).attr({
    'font-size': 24,
    'cursor': 'pointer'
});

hanjaChoices.text(170, 140, '九').click(handler07).attr({
    'font-size': 24,
    'cursor': 'pointer'
});

hanjaChoices.text(220, 140, '金').click(handler08).attr({
    'font-size': 24,
    'cursor': 'pointer'
});

hanjaChoices.text(270, 140, '己').click(handler09).attr({
    'font-size': 24,
    'cursor': 'pointer'
});


for (var k = 0; k < 45; k++) {
    hanjaChoices.text(70 + (k % 5) * 50, 190 + Math.floor(k / 5) * 50, hanjaEl[k]).attr({
        'font-size': 24,
        'cursor': 'pointer'
    });
}

// 하단 화살표 부분
arrow1.use().transform('t10,610').appendTo(bottomArea).click(handler03).attr({
    'cursor': 'pointer'
});
arrow2.use().transform('t330,610').appendTo(bottomArea).click(handler04).attr({
    'cursor': 'pointer'
});

// 핸들러 함수

function handler03() {
    location.replace('gub_01.html');
}

function handler04() {
    location.replace('gub_03.html');
}

function handler05() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#ffc5d0',
        'opacity': 0.9
    });
    group.text(180, 350, '학교/교정할 교').attr({
        'fill' : 'black',
        'font-size': 40,
        'text-anchor': 'middle'
    });

    setTimeout(function() {
        group.remove();
    }, 1000);
}
function handler06() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#ffc5d0',
        'opacity': 0.9
    });
    group.text(180, 350, '가르칠 교').attr({
        'fill' : 'black',
        'font-size': 40,
        'text-anchor': 'middle'
    });

    setTimeout(function() {
        group.remove();
    }, 1000);
}
function handler07() {
    var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#ffc5d0',
        'opacity': 0.9
    });
    group.text(180, 350, '아홉 구').attr({
        'fill' : 'black',
        'font-size': 40,
        'text-anchor': 'middle'
    });

    setTimeout(function() {
        group.remove();
    }, 1000);
}
function handler08() {
var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#ffc5d0',
        'opacity': 0.9
    });
    group.text(180, 350, '쇠 금').attr({
        'fill' : 'black',
        'font-size': 40,
        'text-anchor': 'middle'
    });

    setTimeout(function() {
        group.remove();
    }, 1000);
}

function handler09() {
var group = Paper.g();
    group.rect(50, 250, 255, 180, 5).attr({
        'fill': '#ffc5d0',
        'opacity': 0.9
    });
    group.text(180, 350, '몸 기').attr({
        'fill' : 'black',
        'font-size': 40,
        'text-anchor': 'middle'
    });

    setTimeout(function() {
        group.remove();
    }, 1000);
}
