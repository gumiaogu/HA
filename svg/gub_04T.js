// Quiz
var HT002 = {
  paper: Paper.g(),
  type: 0, // 0: 한자 gen, 1: 뜻음 gen
  count: 0,
  repeatCount: 4,
  progress: {},
  gen: {},
  condition: {
    grade: '급',
    setRange: 8
  },
  choiceCount: 4,
  result: [],
  configure: function() {
    var self = HT002;

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
    var self = HT002;
    self.gen.generate();
  },

  makeQuestion: function() {
    var self = HT002;
    type = self.type;
    self.questionInfo = type === 0 ? self.gen.hanja : self.gen.mean;

    Library.drawQuestion({
      paper: self.paper,
      type: self.type,
      questionInfo: self.questionInfo
    });
  },

  makeChoice: function() {
    var self = HT002;
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
    var self = HT002;

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
    var self = HT002;
    self.paper.clear();
    self.progress.remove();

    console.log(self.result);

    var result = self.result;
    var reportG = self.paper.g();
    var rightCount = 0;
    result.forEach(function(el) {
      if (el.result) rightCount += 1;
    });

    //스코어
    reportG.image('../img/report01.png', 130, 170, 115, 110);

    var score = rightCount / result.length * 100;
    reportG.rect(130, 280, 100, 65).attr({
      'fill': '#86e07f',
      'rx': 8,
      'ry': 8
    });
    reportG.text(180, 323, score + ' %').attr({
      'font-size': 30,
      'font-wieght': 'bold',
      'text-anchor': 'middle'
    });

    reportG.image('../img/thumb.png', 235, 283, 45, 45);

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

    function handler01() {
        location.reload();
    }

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

    function handler02() {
    location.replace('gub_01.html');
    }
  },

  start: function() {
    var self = HT002;
    self.configure();
    self.generate();
    self.makeQuestion();
    self.makeChoice();
  }
};

HT002.start();
