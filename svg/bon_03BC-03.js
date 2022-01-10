var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var blade = Paper.image('../img/03_in.png', 0, 0, 90, 100).toDefs();


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

topBox.text(305, 27, '나 01').attr({
  'font-size': 18
});

function handlerBon() {
  location.replace('bon_03.html');
}


// 본문
Paper.text(180, 70, '3 / 5').attr({
  'fill': 'gray',
  'font-size': 15,
  'text-anchor': 'middle'
});

var body = Paper.g().click(handler);
body.rect(45, 110, 270, 420, 10).attr({
  'fill': 'LemonChiffon',
  'stroke': 'gray',
  'opacity': 0.7
});
blade.use().transform('t140, 150').appendTo(body);
body.text(180, 440, '刃').attr({
  'font-size': 150,
  'text-anchor': 'middle'
});

function handler() {
  this.addClass('flipCard');
  setTimeout(function() {
    location.replace('bon_03BC-03(2).html');
  }, 1000);
}

Paper.path('M30,285 L10,300 L30,315').click(handlerPre).attr({
  'stroke': '#e4e7ea',
  'fill': '#bbbbbb'
});

function handlerPre() {
  location.replace('bon_03BC-02.html');
}

Paper.path('M330,285 L350,300 L330,315').click(handlerAft).attr({
  'stroke': '#e4e7ea',
  'fill': '#bbbbbb'
});

function handlerAft() {
  location.replace('bon_03BC-04.html');
}
