
var num1,num2 = 0;

var add = function sum(num1, num2) {
  return num1 + num2 ;
}

var minus = function substract(num1, num2){
  var mresult = null;
  var number1 = Number(num1);
  var number2 = Number(num2);
  return number1 - number2 ;
}

var result1 = add(2,3);
var result2 = minus(5,3);

console.log(result1);
console.log(result2);
