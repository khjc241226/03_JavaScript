/* window.setTimeout(함수, 지연시간(ms)) */
const check1 = document.querySelector("#check1");
check1.addEventListener("click", ()=>{

  console.log("바로 출력되는 문자열");

  // 3초 후에 수행
  window.setTimeout(()=>{
    console.log("3초 후에 출력되는 문자열");
  }, 3000);


  setTimeout(()=>{
    console.log("2초 후에 출력되는 문자열");
  }, 2000);

  setTimeout(()=>{
    console.log("1초 후에 출력되는 문자열");
  }, 1000);

  setTimeout(()=>{
    console.log("4초 후에 출력되는 문자열");
  }, 4000);

});


/* setInterval(함수, 지연시간(ms)) :
  지연시간이 흐른 후 함수 수행 (반복)
*/

// 즉시 실행 함수
(()=>{
  const clock = document.querySelector("#clock");

  // 페이지가 로딩 되자마자 화면에 시간 출력
  // 0 ~ 1초 커버
  clock.innerText = new Date();

  // 1초가 지날 때 마다 반복
  setInterval(()=>{
    clock.innerText = new Date();
  }, 1000);

})();