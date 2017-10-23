function Developer(specialty, language, tool) {
  this.specialty = specialty;
  this.language = language;
  this.tool = tool;
  this.githubPage = function () {
    alert("http://username.github.io/");
  };
  this.gcp = function () {
    alert('http://firebase.com/');
  };
}
var me = new Developer("front-end", "javascript", "atom");
console.log(me);


// 퀴즈 - 위 생성자 함수의 githubPage() 와 gcp() 를 Prototype 으로 분리하고,
//        자신의 분야(specialty), 주력언어(language), 개발툴(tool) 을 갖는 student 객체를 생성해보세요.
function Developer(specialty, language, tool) {
  this.specialty = specialty;
  this.language = language;
  this.tool = tool;
}

Developer.prototype = {
  githubPage: function () {
    alert("http://username.github.io/");
  },
  gcp: function () {
    alert("http://username.github.io/");
  }
};
var student = new Developer("front-end", "javascript", "atom");
// 리뷰 #1. 아래 student 객체와 13줄의 me 객체를 콘솔에 각각 찍어보시고, __proto__ 속성을 펼쳐서 어떤 점이 다른지 확인해보세요.
console.log(student);

// 리뷰 #2. 1번을 확인하고 나서 아래 주석을 해제하면서 수행해보세요 :)
// student.githubPage();
// student.gcp();
