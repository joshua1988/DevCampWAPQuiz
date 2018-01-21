/* 연산 과정이 저장되는 함수 */
function FuncProccess(operation,instance){
  var val = document.querySelector(instance).value;

  //숫자가 아닐경우에만 값을 추가한다.
  if(isNaN(val[val.length-1]) == false) {
    proccess = val + operation;
    document.querySelector(instance).value = proccess;
  }
}

/*포커스 마지막으로*/
function focusCampo(instance){
    var inputField =document.querySelector(instance); //document.getElementById(id);
    if (inputField != null && inputField.value.length != 0){
        if (inputField.createTextRange){
            var FieldRange = inputField.createTextRange();
            FieldRange.moveStart('character',inputField.value.length);
            FieldRange.collapse();
            FieldRange.select();
        }else if (inputField.selectionStart || inputField.selectionStart == '0') {
            var elemLen = inputField.value.length;
            inputField.selectionStart = elemLen;
            inputField.selectionEnd = elemLen;
            inputField.focus();
        }
    }else{
        inputField.focus();
    }
}

/*결과연산*/
function FuncOperationResult(val){
  var NumArr = new Array();
  var Num = "";
  var Total = 0;
  //마지막 값이 연산자가 아닐 때, 결과 계산
  if(isNaN(val[val.length-1]) == false) {
    //연산자와 숫자를 분리하기 위함.
    for(var count = 0; count < val.length;count++){
        switch (val[count]) {
          case '+':
            NumArr.push(Num);
            NumArr.push('+');
            Num="";
            break;
          case '-':
            NumArr.push(Num);
            NumArr.push('-');
            Num="";
            break;
          default:
            Num += val[count];
            if(count == val.length-1)
              NumArr.push(Num);
            break;
        }
    }

      // 연산 진행.
      Total = Number(NumArr[0]);
      for(var count =0; count < NumArr.length; count ++){
          switch (NumArr[count]) {
            case '+':
              Total = Number(Total) + Number(NumArr[count + 1]);
              break;
            case '-':
              Total = Number(Total) - Number(NumArr[count + 1]);
              break;
            default:
              break;
          }
          document.querySelector('.txt_result').value = Total;
      }
  }
}


//Load일 경우, 로딩이느려짐, 따라서 DOM로드가 완료되면 바로 이벤트를 실행하라는 의미
window.addEventListener('DOMContentLoaded',function(){

  document.querySelector('.txt_proccess').addEventListener('click',function(){
    focusCampo('.txt_proccess');
  });

  document.querySelector('.txt_proccess').addEventListener('change',function(){
    FuncOperationResult(this.value);
    focusCampo('.txt_proccess');
  });

  document.querySelector('.AddClick').addEventListener('click',function(){
    FuncProccess('+','.txt_proccess');
    focusCampo('.txt_proccess');
  });

  document.querySelector('.SubClick').addEventListener('click',function(){
    FuncProccess('-','.txt_proccess');
  });
});
