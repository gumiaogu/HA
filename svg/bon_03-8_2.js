// 보상 페이지
var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var login = Paper.image('../img/login.png', 0, 0, 30, 45).toDefs();
var tray = Paper.image('../img/tray.png', 0, 0, 339, 60).toDefs();
var boy = Paper.image('../img/boy.png', 0, 0, 80, 120).toDefs();
var plant1 = Paper.image('../img/plant1.png', 0, 0, 100, 80).toDefs();
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

topArea.text(65, 80, '잘하고 있어요!').attr({
  'font-size': 15
});
topArea.text(180, 230, '(콩 키우기)').attr({
  'font-size': 25,
  'text-anchor': 'middle',
  'font-style': 'italic'
});


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

// 식물
var plantArea = Paper.g();
plant1.use().transform('t120, 470').click(handlerAft).appendTo(plantArea);

function handlerAft() {
  location.replace('bon_03-8_2(1).html');
}

boy.use().transform('t230, 400').appendTo(plantArea);

arrow1.use().transform('t10, 610').click(handler).appendTo(Paper).attr({
  'cursor': 'pointer'
});
