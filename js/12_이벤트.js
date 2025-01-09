/* 인라인 이벤트 모델 확인 + this 확인 */

// 전달 인자(Argument) : 함수 호출 시 () 안에 작성하는 값
//                       함수 매개변수로 전달됨

// 매개 변수(Parameter) : 함수 정의 시 ()에 작성하는 변수
//                        호출 시 전달된 값을 저장
function check1(div){
  // 매개 변수 div : 클릭된 div 요소
  //console.log(div);

  /* 클릭이 되면 클릭된 숫자를 버튼(div)에 출력 */

  // 1) 버튼에 작성된 내용 얻어오기
  let num = Number(div.innerText);
  // -> 숫자 또는 NaN

  // 2) 얻어온 내용이 숫자가 아닌 경우
  // isNaN(값) : 값이 NaN 인 경우 true, 숫자면 false
  if( isNaN(num) ){ // 숫자가 아닌 경우
    div.innerText = 1; 
    return;
  }

  // 3) 얻어온 내용이 숫자인 경우
  div.innerText = ++num; // 1씩 증가 (num + 1)
}


/* 고전 이벤트 모델 확인 */

// id가 "testA"인 요소를 얻어와 변수에 저장
// const testA = document.getElementById("testA");
const testA = document.querySelector("#testA");

/* 고전 이벤트 모델 작성법
  
  요소.이벤트리스너 = 이벤트 핸들러
*/
testA.onclick = function(){
  // testA 요소가 가지고 있는 
  // onclick 변수에 --> (이벤트 리스너)
  // function(){} 을 대입 --> (이벤트 핸들러)

  /* 고전 이벤트 모델에서 this == 이벤트가 발생한 요소 */
  console.log(this);
  alert("고전 이벤트 모델 확인됨");
};



/* 고전 이벤트 모델 제거 */
// #testB 버튼 클릭 시 #testA의 클릭 이벤트 핸들러 제거

const testB = document.querySelector("#testB");

testB.onclick = function(){

  // testA가 클릭 되었을 때의 동작(핸들러)을 null로 덮어씌움
  // -> 이벤트 핸들러가 사라짐(제거)
  testA.onclick = null; 

  alert("확인 버튼 클릭 이벤트 핸들러 제거");
}



/* 고전 이벤트 모델 단점 확인 */
const testC = document.querySelector("#testC");

// onclick 이벤트 리스너에  이벤트 핸들러 대입
testC.onclick = function(){
  testC.style.backgroundColor = "pink";
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// onclick 이벤트 리스너에 이벤트 핸들러 다시 대입(덮어쓰기)
testC.onclick = function(){
  testC.style.fontSize = "40px";
}



/* 표준 이벤트 모델 */

/* 클릭할수록 투명 + 클릭 횟수 증가 */

const test1 = document.querySelector("#test1");

// 클릭할수록 투명
test1.addEventListener("click", function(){
  // click -> 감지할 이벤트 종류
  // function(){} 
  //   -> 이벤트가 감지 되었을 때 수행할 이벤트 핸들러

  // opacity : 불투명 정도를 설정하는 속성
  // 0 : 투명
  // 1 : 불투명(선명하게 보임)
  let current = test1.style.opacity;

  console.log("현재 투명도 : ", current);
  // 처음엔 "" (빈칸)

  if(current === ""){
    current = 1; // 불투명
  }

  // 투명도를 0.05 감소
  test1.style.opacity = current - 0.05;

  // 투명도가 0 미만이 된 경우(완전히 투명해진 이후)
  if(test1.style.opacity < 0){
    test1.style.opacity = 1; // 다시 불투명하게 변경
  }
});


// 클릭 시 숫자 1씩 증가
test1.addEventListener("click", function(){

  // #test1에 작성된 내용 얻어와 숫자로 변경
  let num = Number(test1.innerText);

  // #test1에 num을 1 증가 시킨 값을 대입
  test1.innerText = ++num;
});


/* 버튼 배경색 변경 + 클릭 시 #rseult2 배경색 변경 */

// querySelectorAll() -> 선택자가 일치하는 요소를 모두 반환(배열)
const btns = document.querySelectorAll(".btn-container > button");
// btns <= 배열

// 배경색이 변경될 영역
const result2 = document.querySelector("#result2");

for(let i = 0 ; i < btns.length ; i++){
  // 각 버튼의 배경색을 버튼에 작성된 색상으로 변경
  btns[i].style.backgroundColor = btns[i].innerText;

  // 각 버튼에 클릭 되었을 때(이벤트 리스너)의 
  // 동작(이벤트 핸들러)을 추가
  btns[i].addEventListener("click", function(){
    
    // this == 클릭된 요소

    // #result2의 배경색을 클릭된 버튼에 작성된 색상으로 변경
    // result2.style.backgroundColor = btns[i].innerText;
    result2.style.backgroundColor = this.innerText;
  });
}


/* 실습 문제 */

/*
  "변경하기" 버튼 클릭 시
  input 요소에 작성된 색상 값을 얻어와
  바로 위 .display 요소의 배경색 변경하기
*/

/* 변경하기버튼 */
const changeBtn = document.querySelector("#changeBtn");
const inputs = document.querySelectorAll(".inputColor"); // input 5개
const displays = document.querySelectorAll(".display"); // 출력화면 5개
// -> 위 아래로 연결된 .display와 .inputColor의 인덱스 번호가 같아요!!

// 변경하기 버튼이 클릭 되었을 때
changeBtn.addEventListener("click", function(){
  for(let i=0 ; i < inputs.length ; i++){

    // i번째 .inputColor에 작성된 값을 얻어와
    // i번째 .display의 배경색으로 대입
    displays[i].style.backgroundColor = inputs[i].value;
  }
});