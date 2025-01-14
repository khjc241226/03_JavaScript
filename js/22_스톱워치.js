/* 스톱워치 관련 요소 모두 얻어와 전역 변수로 선언 */
const display         = document.querySelector("#display");
const startBtn        = document.querySelector("#startBtn");
const recordBtn       = document.querySelector("#recordBtn");
const resetBtn        = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// 분, 초, 1/100초를 출력하는 span
const timeList = document.querySelectorAll("#display > span");

let count = 0; // 1/100 초마다 1씩 증가
// count === 10000 -> 100초 -> 1분 40초 00
// count === 100   -> 1초

// START 버튼 클릭 시 수행되는 setInterval() 저장 변수
let currentInterval;

/* START 버튼이 클릭된 경우
  - START <-> PAUSE 버튼으로 변경
  - START가 클릭된 경우 10ms 마다 count가 1씩 증가
  - count 증가 후 화면에 시간을 계산해서 출력(별도 함수)
*/
startBtn.addEventListener("click", () => {

  // START <-> PAUSE 버튼으로 변경
  if(startBtn.innerText === "PAUSE"){
    startBtn.innerText = "START";
    recordBtn.disabled = true; // 비활성화 

    // setInterval()을 깨끗이 치워버림
    // -> clearInterval() 이용
    clearInterval(currentInterval); // 멈춤

    return;
  }

  // startBtn.innerText === "START" 인 경우
  startBtn.innerText = "PAUSE"; // 일시 정지로 버튼 변경
  recordBtn.disabled = false; // 비활성화 취소 -> 활성화


  /* START가 클릭된 경우 10ms 마다 count가 1씩 증가 */
  currentInterval = setInterval(() => {
    count++;
    displayOutput();
  }, 10);

});  //  startBtn 클릭 이벤트 리스너 end


// ---------------------------------------------------

/* reset 버튼이 클릭된 경우
  - START 버튼 형태로 변경
  - RECORD 버튼 비활성화
  - count = 0;
  - clearInterval() 수행
  - recordContainer에 기록된 내용 모두 삭제
  - 화면 숫자 00:00:00  (별도 함수)
*/
resetBtn.addEventListener("click", () => {
  startBtn.innerText = "START"; // START 버튼 형태로 변경
  recordBtn.disabled = true; // RECORD 버튼 비활성화
  count = 0; // 시간 카운트 변수 0으로 초기화
  clearInterval(currentInterval); // 반복 종료
  recordContainer.innerHTML = ""; // recordContainer 내용 모두 삭제

  // 00:00:00 함수 호출()
  displayOutput();
});

// -----------------------------------------------------

/** 전달 받은 수가 10 미만이면 앞에 "0" 붙여 반환하는 함수
 * @param num : 숫자
 */
function attachZero(num){
  if(num < 10) return "0" + num; // "04"
  return num + ""; // string 타입으로 변환
}

/** 시계 화면 출력 함수 
 * - count 값을 계산하여 분, 초, 1/100초 출력
*/
function displayOutput(){

  // 화면에 출력될 시간 분, 초, 1/100초 계산 후 변수에 저장

  const minute = attachZero( Math.floor(count / 100 / 60) );
  const second = attachZero( Math.floor(count / 100 % 60) );
  const ms     = attachZero( count % 100 );

  // 화면 출력

  // minute 변수에 저장된 값과
  // 현재 화면에 출력된 내용이 다를 경우
  if(minute !== timeList[0].innerText){
    timeList[0].innerText = minute;
  }

  // second 변수에 저장된 값과
  // 현재 화면에 출력된 내용이 다를 경우
  if(second !== timeList[1].innerText){
    timeList[1].innerText = second;
  }

  // ms 단위는 계속 변함
  // -> if 불필요
  timeList[2].innerText = ms;
}


// ------------------------------------------------------
/* RECORD 버튼 클릭 시 
  - #display에 작성된 내용을 모두 읽어와
    <li>읽어온 시간</li> 형태를 만들어
    #recordContainer의 마지막 자식으로 추가
*/
recordBtn.addEventListener("click", () => {

  // console.log(display.innerText);
  // console.log(display.innerHTML); // 태그까지 모두 얻어옴

  /* li 태그 생성 */
  const li = document.createElement("li");
  li.innerText = display.innerText; // 현재 시간을 li 내용으로 추가
  recordContainer.append(li); // 화면에 추가
});


















/* clearInterval() 사용 방법

  1. setInterval() 수행 후 반환 되는 값을 변수에 대입
   ex) const currentInterval = setInterval();
   
  2. clearInterval(변수명) 수행
   ex) clearInterval(currentInterval); 
      // -> setInterval() 동작 멈춤
*/
