// Quiz 2
var HT0022 = {
  paper: Paper.g(),
  type: 1, // 0: 한자 gen, 1: 뜻음 gen
  count: 0,
  repeatCount: 5,
  progress: {},
  gen: {},
  condition: {
    grade: '나',
    setRange: [1]
  },
  choiceCount: 4,
  result: [],
  configure: function() {
    var self = HT0022;

    // progress 인스턴스 생성
    self.progress = new Library.Progress(self.repeatCount);

    // generate 인스턴스 생성
    self.gen = new Library.Generate({
      type: self.type,
      condition: self.condition,
      choiceCount: self.choiceCount
    });
  },

  generate: function() {
    var self = HT0022;
    self.gen.generate();
  },

  makeQuestion: function() {
    var self = HT0022;
    type = self.type;
    self.questionInfo = type === 0 ? self.gen.hanja : self.gen.mean;

    Library.drawQuestion({
      paper: self.paper,
      type: self.type,
      questionInfo: self.questionInfo
    });
  },

  makeChoice: function() {
    var self = HT0022;
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
    var self = HT0022;

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
      self.makeChoice();
      self.progress.countUp();
    }
  },

  report: function() {
    var self = HT0022;
    self.paper.clear();
    self.progress.remove();

    console.log(self.result);

    var result = self.result;
    var reportG = self.paper.g();

    var rightCount = 0;
    result.forEach(function(el) {
      if (el.result) rightCount += 1;
    });

    var score = rightCount / result.length * 100;
    // reportG.rect(140, 180, 80, 45).attr({
    //   'fill': '#86e07f',
    //   'rx': 8,
    //   'ry': 8
    // });
    reportG.text(90, 140, score + ' %').attr({
      'font-size': 50,
      'font-wieght': 'bold',
      'text-anchor': 'middle'
    });

    reportG.line(20, 160, 340, 160).attr({
      'stroke': 'gray'
    });

    for (var k = 0; k < result.length; k++) {
      var hanjaText = ['矢', '弓', '刃', '工', '至'];
      reportG.text(50, 212 + (k * 50), hanjaText[k]).attr({
        'font-size': 30
      });
      var hanjaT = result[k].question.length < 2;
      reportG.text(120, 210 + (k * 50), result[k].question).attr({
        'font-size': (hanjaT ? 20 : 18)
      });
      reportG.image('../img/star.png', 290, 190 + (k * 50), 20, 20).click(handlerColor);
    }

    function handlerColor() {
      reportG.image('../img/star2.png', 290, 190, 20, 20);
    }

    var redB = reportG.rect(36, 480, 120, 30).attr({
      'fill': '#f8371f',
      'rx': 8,
      'ry': 8
    });
    var redBT = reportG.text(70, 500, '다시 풀기').attr({
      'fill': 'white',
      'font-size': 13
    });
    var red = reportG.g(redB, redBT).click(handler02).attr({
      'cursor': 'pointer'
    });

    function handler02() {
      location.reload();
    }

    var orangeB = reportG.rect(200, 480, 120, 30).attr({
      'fill': '#fe9b00',
      'rx': 8,
      'ry': 8
    });
    var orangeBT = reportG.text(245, 500, '끝내기').attr({
      'fill': 'white',
      'font-size': 13
    });
    var orange = reportG.g(orangeB, orangeBT).click(handler03).attr({
      'cursor': 'pointer'
    });

    function handler03() {
      location.replace('bon_04.html');
    }
  },

  start: function() {
    var self = HT0022;
    self.configure();
    self.generate();
    self.makeQuestion();
    self.makeChoice();
  }
};

HT0022.start();
