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


