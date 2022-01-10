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

    // 상단 박스
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
  },

  //////////////////////////////////////////////////////////////////////////////////////////////
  generatePairGame: function(params) {
    var condition = params.condition;
    var pairInfo = {};
    var gameData = data.slice();
    var paper = Paper.g();

    gameData = gameData.filter(function(el) {
      if (el.jei_set.indexOf(condition.grade) === -1) return false;
      var setNum = Number(el.jei_set.slice(1, 3));
      if (setNum < condition.setRange[0] || condition.setRange[1] < setNum) return false;
      return true;
    });
    gameData = shuffle(gameData).slice(0, 6);

    return gameData;

    function shuffle(arr) {
      return arr.sort(function() {
        return Math.random() - 0.5;
      });
    }
  },

  drawPairGame: function(params) {
    var paper = params.paper.g();
    var questionInfo = params.questionInfo;

    var gameEl = [];
    for (var i = 0; i < questionInfo.length; i++) {
      gameEl.push({
        text: questionInfo[i].hanja,
        data: i
      });
      gameEl.push({
        text: questionInfo[i].mean,
        data: i
      });
    }
    gameEl = shuffle(gameEl);
    console.log(gameEl);

    function shuffle(arr) {
      return arr.sort(function() {
        return Math.random() - 0.5;
      });
    }

    var questions = [];
    for (var j = 0; j < gameEl.length; j++) {
      questions[j] = paper.g();
      questions[j].attr({
        'cursor': 'pointer'
      });
      questions[j].rect(20 + (j % 3) * 110, 85 + (j % 4) * 110, 100, 100, 6, 6).attr({
        'fill': 'white',
        'stroke': '#ffd136',
        'stroke-width': 1.5
      });
      var isTooShort = gameEl[j].text.length < 2;
      questions[j].text(70 + (j % 3) * 110, 145 + (j % 4) * 110, gameEl[j].text).attr({
        'font-size': (isTooShort ? 35 : 22),
        'text-anchor': 'middle'
      });
      questions[j].data('i', gameEl[j].data);
    }

    // 시간 체크
    paper.rect(40, 584, 280, 7, 5).attr({
      'fill': '#dcdcdc'
    });
    var maskBar = paper.mask();
    var mBar = maskBar.rect(40, 583, 280, 8, 5).attr({
      'fill': 'white'
    });
    mBar.animate({
      'width': 8
    }, 50000);
    var myBar = paper.rect(40, 583, 280, 8, 5).attr({
      'fill': '#b4b4dc',
      'mask': maskBar
    });
    paper.image('../img/clock.png', 32, 578, 17, 17);

    return questions;

  },

  checkPairGame: function(params) {
    var questions = params.questions;
    var pair = [];
    var correctCount = [];
    var callback = params.callback;
    var startTime = new Date().getTime();
    var paper = Paper.g();

    for (var i = 0; i < questions.length; i++) {
      questions[i].click(handler);
    }

    function handler() {
      this.attr({
        'pointer-events': 'none'
      });
      this.select('rect').attr({
        'fill': 'LemonChiffon'
      });

      pair.push(this.data('i'));

      setTimeout(function() {
        if (pair.length === 2) { //두 개를 선택
          if (pair[0] === pair[1]) { //정답일 때
            pairRemove(pair[0]);
            var userTime = new Date().getTime() - startTime;
            correctCount.push(userTime);
            if (correctCount.length === questions.length / 2) { //다 없어졌는지 체크
              callback(userTime);
            }
          } else {
            clearAttr();
          }
          pair = [];
        }
      }, 300);
    }

    function pairRemove(index) {
      for (var i = 0; i < questions.length; i++) {
        if (questions[i].data('i') === index) {
          questions[i].remove();
        }
      }
    }

    function clearAttr() {
      for (var i = 0; i < questions.length; i++) {
        questions[i].select('rect').attr({
          'fill': 'white'
        });
        questions[i].attr({
          'pointer-events': 'auto'
        });
      }
    }
  },
};

Library.drawLayout();
