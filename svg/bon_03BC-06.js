var SVG = Snap('#my-svg');


// 최상위 그룹
var Paper = SVG.g();


//이미지
var end = Paper.image('../img/end.png', 0, 0, 250, 160).toDefs();


// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

end.use().transform('t60, 180').appendTo(Paper);

// function handler() { // 급수한자
//   location.replace('card00.html');
// }

var redB = Paper.rect(36, 410, 120, 30).attr({
  'fill': '#f8371f',
  'rx': 8,
  'ry': 8
});
var redBT = Paper.text(75, 430, '처음으로').click(handler01).attr({
  'fill': 'white',
  'font-size': 13
});
var red = Paper.g(redB, redBT).attr({
  'cursor': 'pointer'
});
var orangeB = Paper.rect(200, 410, 120, 30).attr({
  'fill': '#fe9b00',
  'rx': 8,
  'ry': 8
});
var orangeBT = Paper.text(250, 430, '퀴즈').click(handler02).attr({
  'fill': 'white',
  'font-size': 13
});
var orange = Paper.g(orangeB, orangeBT).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('bon_03.html');
}

function handler02() {
  location.replace('bon_03BQ.html');
}
