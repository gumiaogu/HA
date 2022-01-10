var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

var Library = {

  //SVG 외곽선
  drawLayout: function() {
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

    topBox.text(300, 27, '나 R02').attr({
      'font-size': 18
    });

    function handlerBon() {
      location.replace('bon_03.html');
    }
  },

  //////////////////////////////////////////////////////////////////////////////////////////////
  GenerateVoca: function(params) {
    var condition = params.condition;
    var choiceCount = params.choiceCount;
    var type = params.type;

    this.hanja = '';
    this.mean = '';
    this.choiceInfo = {};

    var conData = data.slice();

    this.generate = function() {
      conData = conData.filter(function(el) {
        if (el.jei_set.indexOf(condition.grade) === -1) return false;
        var setNum = Number(el.jei_set.slice(1, 3));
        if (setNum < condition.setRange[0] || condition.setRange[1] < setNum) return false;
        return true;
      });
      conData = shuffle(conData);

      this.hanja = conData[0].hanja;
      this.mean = conData[0].mean;
      var que = type === 0 ? this.hanja : this.mean;
      this.choiceInfo = makeChoiceVoca(que);

      conData.shift();
    };

    // 전체 보기
    function makeChoiceVoca(que) {

      var choiceData = getChoiceDataVoca(que);
      var answerIndex = getAnswerIndexVoca(que);

      var answer = type === 0 ? data[answerIndex].mean : data[answerIndex].hanja;
      var wholeChoice = choiceData.concat([answer]);

      return {
        choices: shuffle(wholeChoice),
        rightAnswer: shuffle(wholeChoice).indexOf(answer)
      };
    }

    // 정답 인덱스
    function getAnswerIndexVoca(que) {
      var index;
      data.forEach(function(el, i) {
        if (type === 0) {
          if (el.hanja === que) {
            index = i;
          }
        } else {
          if (el.mean === que) {
            index = i;
          }
        }
      });
      return index;
    }

    // 오답 보기
    function getChoiceDataVoca(que) {

      var answerIndex = getAnswerIndexVoca(que);
      var copyData = data.slice(150, 182);
      var newData = [];

      for (var i = 0; i < copyData.length; i++) {
        if (type === 0) {
          if (i !== answerIndex) {
            newData.push(copyData[i].mean);
          }
        } else {
          if (i !== answerIndex) {
            newData.push(copyData[i].hanja);
          }
        }
      }

      var choiceData = shuffle(newData).slice(0, choiceCount - 1);
      return choiceData;
    }

    function shuffle(arr) {
      return arr.sort(function() {
        return Math.random() - 0.5;
      });
    }
  },

  Progress: function(totCount) {
    var paper = Paper.g();
    var count = 1;
    var countText = count + ' / ' + totCount;

    var text = paper.text(180, 75, countText).attr({
      'fill': 'gray',
      'font-size': 20,
      'text-anchor': 'middle'
    });

    this.countUp = function(bool) {
      count += 1;
      text.attr({
        'text': count + ' / ' + totCount,
      });
    };

    this.remove = function() {
      paper.remove();
    };
  },

  // 문제 만들기 함수
  drawQuestion: function(params) {
    var paper = params.paper.g();
    var type = params.type;
    var questionInfo = params.questionInfo;
    var endCallback = params.endCallback;

    if (type === 0) {
      paper.text(180, 195, questionInfo).attr({
        'font-size': 90,
        'text-anchor': 'middle'
      });
    } else {
      paper.text(175, 180, questionInfo).attr({
        'font-size': 60,
        'text-anchor': 'middle'
      });
    }
    return paper;
  },

  // 보기 만들기 함수
  drawChoice: function(params) {
    var paper = params.paper.g();
    var exampleInfo = params.exampleInfo;
    var choices = [];
    if (type === 0) {
      paper.rect(30, 245, 300, 350).attr({
        'fill': '#cadddd'
      });

      for (var i = 0; i < exampleInfo.choices.length; i++) {
        choices[i] = paper.g();
        choices[i].attr({
          'cursor': 'pointer'
        });

        choices[i].rect(55, (i * 75) + 275, 250, 60).attr({
          'fill': '#eff5f5',
          'rx': 8,
          'ry': 8
        });

        choices[i].text(180, (i * 75) + 320, exampleInfo.choices[i]).attr({
          'font-size': 35,
          'fill': '#777777',
          'text-anchor': 'middle'
        });
      }
    } else {
      paper.rect(30, 245, 300, 350).attr({
        'fill': '#ffe6cc'
      });

      for (var k = 0; k < exampleInfo.choices.length; k++) {
        choices[k] = paper.g();
        choices[k].attr({
          'cursor': 'pointer'
        });

        choices[k].circle(110 + (k % 2) * 140, 340 + Math.floor(k / 2) * 160, 55).attr({
          'fill': 'white'
        });

        choices[k].text(110 + (k % 2) * 140, 360 + Math.floor(k / 2) * 160, exampleInfo.choices[k]).attr({
          'font-size': 55,
          'fill': '#777777',
          'text-anchor': 'middle'
        });
      }
    }
    return choices;
  },

  // 정답 체크 함수
  choiceCheck: function(params) {
    var choices = params.choices;
    var rightAnswer = params.exampleInfo.rightAnswer;
    var callback = params.callback;

    // 이벤트 설정
    for (var i = 0; i < choices.length; i++) {
      choices[i].data('i', i).click(handler);
      choices[i].mouseup(handler2);
    }

    function handler() {
      choices.forEach(function(el) {
        el.attr({
          'pointer-events': 'none'
        });
      });

      var userChoice = this.data('i');
      var check = userChoice === rightAnswer;
      var fdEl;
      if (check) {
        fdEl = Paper.circle(180, 408, 135).attr({
          'stroke': 'tomato',
          'stroke-width': 35,
          'fill': 'none',
          'opacity': 0.5
        });
      } else {
        var fdEl1 = Paper.line(55, 275, 304, 542).attr({
          'stroke': '#bbbbbb',
          'stroke-width': 30,
          'stroke-linecap': 'round',
          'opacity': 0.5
        });
        var fdEl2 = Paper.line(304, 275, 55, 542).attr({
          'stroke': '#bbbbbb',
          'stroke-width': 30,
          'stroke-linecap': 'round',
          'opacity': 0.5
        });
        fdEl = Paper.g(fdEl1, fdEl2);
      }

      // 다음 문제
      setTimeout(function() {
        fdEl.remove();
        callback(check, userChoice);
      }, 1000);
    }

    function handler2() {
      var text = this.select('text');
      text.attr({
        'font-weight': 'bold'
      });
      if (type === 0) {
        var rect = this.select('rect');
        rect.attr({
          'fill': '#ffe6cc'
        });
      } else {
        var cir = this.select('circle');
        cir.attr({
          'fill': '#edf3f3'
        });
      }
    }
  },
};

Library.drawLayout();
