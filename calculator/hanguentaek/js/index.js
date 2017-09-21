var btns = document.getElementsByClassName('btn');
var iptEquation = document.getElementById('ipt-equation');
var equalBtn = document.getElementById('btn-equal');
var resetBtn = document.getElementById('btn-reset');

function addValue() {
  var value = this.innerHTML;
  var currentEquation = document.getElementById('ipt-equation');
  var newEquation = currentEquation.value + value;
  currentEquation.value = newEquation;
}

function runCalculate() {
  var equation = document.getElementById('ipt-equation').value;
  var result = '';
  try {
    result = eval(equation);
  } catch(e) {
    result = '계산 오류!';
  } finally {
    document.getElementById('result-value').innerHTML = result;
  }
}

function resetInput() {
  iptEquation.value = '';
}

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', addValue, false);
}

iptEquation.addEventListener("keyup", function(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    runCalculate();
  } else if (e.keyCode === 27) {
    resetInput();
  }
});

equalBtn.addEventListener("click", runCalculate);
resetBtn.addEventListener("click", resetInput);
