
//Load일 경우, 로딩이느려짐, 따라서 DOM로드가 완료되면 바로 이벤트를 실행하라는 의미
window.addEventListener('DOMContentLoaded',function(){
      document.querySelector(".p_pro").innerHTML = student.specialty;
      document.querySelector(".p_lang").innerHTML = student.language;
      document.querySelector(".p_devtool").innerHTML = student.tool;

      document.querySelector('.btnPink').addEventListener('click',function(){
        student.__proto__.githubPage();

      });

      document.querySelector('.btnBlue').addEventListener('click',function(){
        student.__proto__.gcp();
      });
});
