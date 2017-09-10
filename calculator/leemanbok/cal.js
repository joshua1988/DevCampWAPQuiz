

var live_0="",live_1="",cal_unit="";
var isFirstLine = true;



function initPanel(str){
var textarea =  document.getElementsByClassName('cal_result_box')[0].getElementsByTagName('textarea')[0];
  textarea.value =textarea.value + str;
  if(isFirstLine){
    live_0 = live_0 + str + "";
  }else{
    live_1 = live_1 + str + "";
  }

}

function calPenel(str){
  switch (str) {
    case '+':
      if(!isFirstLine){
        return false;
      }
      isFirstLine = false;
      cal_unit = "+";
      var textarea =  document.getElementsByClassName('cal_result_box')[0].getElementsByTagName('textarea')[0];
      textarea.value = textarea.value + "\n+\n"
      break;
    case '-':
      if(!isFirstLine){
      //  return false;
      }
      isFirstLine = false;
      cal_unit = "-";
      var textarea =  document.getElementsByClassName('cal_result_box')[0].getElementsByTagName('textarea')[0];
      textarea.value = textarea.value + "\n-\n"
      break;
    case '=':
      if(isFirstLine){
        //return false;
      }
      var textarea =  document.getElementsByClassName('cal_result_box')[0].getElementsByTagName('textarea')[0];
      textarea.value = textarea.value + "\n = \n"
      if(cal_unit=="+"){
        textarea.value = textarea.value + cal_p() + "\n";
      }
      if(cal_unit=="-"){
        textarea.value = textarea.value + cal_m() + "\n";
      }
      break;

  }
}
function cal_p(){
  var result = ((live_0*1) + (live_1*1));
  live_0=result;
  live_1='';
  return result;
}
function cal_m(){
  var result = ((live_0*1) - (live_1*1));
  live_0=result;
  live_1='';
  return result;
}
