// Voca Quiz
var HT004 = {
  paper: Paper.g(),
  type: 0, // 0: 한자 gen, 1: 뜻음 gen
  count: 0,
  repeatCount: 5,
  progress: {},
  gen: {},
  condition: {
    grade: '다',
    setRange: [30]
  },
  choiceCount: 4,
  result: [],
  configure: function() {
    var self = HT004;

    // progress 인스턴스 생성
    self.progress = new Library.Progress(self.repeatCount);

    // generate 인스턴스 생성
    self.gen = new Library.GenerateVoca({
      type: self.type,
      condition: self.condition,
      choiceCount: self.choiceCount
    });
  },

  generate: function() {
    var self = HT004;
    self.gen.generate();
  },

  makeQuestion: function() {
    var self = HT004;
    type = self.type;
    self.questionInfo = type === 0 ? self.gen.hanja : self.gen.mean;

    Library.drawQuestion({
      paper: self.paper,
      type: self.type,
      questionInfo: self.questionInfo
    });
  },

  makeChoiceVoca: function() {
    var self = HT004;
    var exampleInfo = self.gen.choiceInfo;

    var choices = Library.drawChoice({
      paper: self.paper,
      type: self.type,
      exampleInfo: exampleInfo
    });

    Library.choiceCheck({
      type: self.type,
      choices: choices,
      exampleInfo: exampleInfo,
      callback: self.control
    });
  },

  control: function(bool, userChoice) {
    var self = HT004;

    self.result.push({
      result: bool,
      userChoice: userChoice,
      question: self.questionInfo,
      choiceInfo: self.gen.choiceInfo
    });

    self.count += 1;

    if (self.count === self.repeatCount) {
      self.report();
    } else {
      self.paper.clear();
      self.generate();
      self.makeQuestion();
      self.makeChoiceVoca();
      self.progress.countUp();
    }
  },

  report: function() {
    var self = HT004;
    self.paper.clear();
    self.progress.remove();

    console.log(self.result);

    var result = self.result;
    var reportG = self.paper.g();

    var rightCount = 0;
    result.forEach(function(el) {
      if (el.result) rightCount += 1;
    });

    reportG.image('../img/report01.png', 140, 90, 95, 90);

    var score = rightCount / result.length * 100;
    reportG.rect(140, 180, 80, 45).attr({
      'fill': '#86e07f',
      'rx': 8,
      'ry': 8
    });
    reportG.text(180, 210, score + ' %').attr({
      'font-size': 20,
      'font-wieght': 'bold',
      'text-anchor': 'middle'
    });

    reportG.image('../img/thumb.png', 220, 185, 35, 35);

    var menu = ['번호', '문제', '정오답'];
    for (var i = 0; i < menu.length; i++) {
      reportG.rect(22, (i * 40) + 260, 50, 40).attr({
        'stroke': 'gray',
        'fill': '#eaeaea'
      });
      reportG.text(48, (i * 40) + 285, menu[i]).attr({
        'font-size': 13,
        'text-anchor': 'middle'
      });
    }

    for (var k = 0; k < result.length; k++) {
      reportG.rect(72 + (k * 53), 260, 53, 40).attr({
        'stroke': 'gray',
        'fill': 'none'
      });
      reportG.text(93 + (k * 53), 287, k + 1).attr({
        'font-size': 16
      });
      reportG.rect(72 + (k * 53), 300, 53, 40).attr({
        'stroke': 'gray',
        'fill': 'none'
      });
      reportG.text(99 + (k * 53), 326, result[k].question).attr({
        'font-size': 18,
        'text-anchor': 'middle'
      });
      reportG.rect(72 + (k * 53), 340, 53, 40).attr({
        'stroke': 'gray',
        'fill': 'none'
      });
      reportG.text(93 + (k * 53), 365, result[k].result ? 'O' : 'X').attr({
        'font-size': 16
      });
    }

    var redB = reportG.rect(36, 410, 120, 30).attr({
      'fill': '#f8371f',
      'rx': 8,
      'ry': 8
    });
    var redBT = reportG.text(70, 430, '다시 풀기').attr({
      'fill': 'white',
      'font-size': 13
    });
    var red = reportG.g(redB, redBT).click(handler01).attr({
      'cursor': 'pointer'
    });
    var orangeB = reportG.rect(200, 410, 120, 30).attr({
      'fill': '#fe9b00',
      'rx': 8,
      'ry': 8
    });
    var orangeBT = reportG.text(245, 430, '끝내기').attr({
      'fill': 'white',
      'font-size': 13
    });
    var orange = reportG.g(orangeB, orangeBT).click(handler02).attr({
      'cursor': 'pointer'
    });

    function handler01() {
      location.reload();
    }

    function handler02() {
      location.replace('bon_03.html');
    }
  },

  start: function() {
    var self = HT004;
    self.configure();
    self.generate();
    self.makeQuestion();
    self.makeChoiceVoca();
  }
};

HT004.start();
