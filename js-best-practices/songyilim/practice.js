// 1. 아래 문장을 삼항연산자로 변환해보세요.
var dust = 150;
var alertMsg = "";

if(dust > 140) {
  alertMsg = "stay inside";
} else {
  alertMsg = "free to go";
}

// 아래에 1번 답안 작성

var alertMsg = (dust>140) ? "stay inside" : "free to go";
console.log(alertMsg);

// 2. 아래 data 값을 OR 연산자를 이용하여 값이 유효한지 확인하는 코드를 작성하세요.
function fetchData(data) {
  if (data === null) {
    data = {};
  } else {
    console.log("This data already had its value");
  }
}

// 아래에 2번 답안 작성
function fetchData(data) 
  // 기존에 작성하신 코드와 비교해보세요. || 연산자의 역할은 함수의 인자 값의 유효성을 검사하는데 사용할 수 있습니다 :)
  this.data = data || {};
}

// 3. 아래 반복문을 메모리 관점에서 연산수를 줄이는 최적화를 해보세요.
var arr = {
  fruits: ["apple", "banana", "cherry", "dragon fruit"]
};

for (var i = 0; i < arr.fruits.length; i++) {
  console.log(arr.fruits[i]);
}

// 아래에 3번 답안 작성
var list = arr.fruits;

for (var i=0, x=arr.fruits.length; i < x; i++) {
      console.log(list[i]);
}
