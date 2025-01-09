/* 
  JS를 이용해서 CSS 변경하는 방법

  * 요소.style.css속성 = 값
  
  -> inline 스타일로 CSS가 추가됨
      (시작태그에 style 속성이 추가됨)
*/


/** class를 이용한 요소(DOM 객체) 접근 방법 */
function classTest(){

  /* 유사 배열이란?
    배열 처럼 index, length를 제공하지만
    배열 전용 함수(메서드)를 제공하지 않음 
  */

  // class 속성 값이 "cls-test"인 요소를 모두 얻어와
  // (유사)배열 형태로 반환
  const divs = document.getElementsByClassName("cls-test");
  console.log(divs);

  // divs에 저장된 요소를 하나씩 순차 접근
  for(let i = 0 ; i < divs.length ; i++){
    
    // 각 요소에 작성된 내용 얻어와 콘솔에 출력
    console.log(divs[i].innerText);

    // 각 요소에 배경색을 작성된 내용으로 변경
    divs[i].style.backgroundColor = divs[i].innerText;
  }
}



/** 배경색 초기화(흰색) */
function classInit(){
  const divs = document.getElementsByClassName("cls-test");
  
  for(let i = 0 ; i < divs.length ; i++){
    divs[i].style.backgroundColor = "white";
  }
}


/** input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){

  // "cls-input" 클래스를 가지는 요소를 모두 얻어와 저장
  const inputs = document.getElementsByClassName("cls-input");

  // 합계를 저장할 변수 선언
  let sum = 0;

  for(let i = 0 ; i < inputs.length ; i++){
    // 각 요소(input)에 작성된 값을 얻어와
    // number 타입으로 변환하여 sum에 누적
    sum += Number(inputs[i].value);
  }

  // id가 sumResult인 요소의 내용으로 sum 출력
  document.getElementById("sumResult").innerText = sum;

}


/* tag명으로 접근하여 배경색 변경 */
function tagNameTest(){ 

  // 문서 내에 존재하는 모든 li 태그 선택
  const lists = document.getElementsByTagName("li");

  for(let i = 0 ; i < lists.length ; i++){
    // 각 요소에 저장된 값을 얻어와 rgb 변경에 이용

    // li 요소에 작성된 내용을 숫자로 변환
    const num = Number(lists[i].innerText);

    lists[i].style.backgroundColor 
      = `rgb(240, 0, ${20 * num})`;
  }
}



/** 선택한 취미만 출력하기 */
function nameTest(){

  // name 속성 값이 "hobby"인 요소만 모두 얻어오기
  const hobbyList = document.getElementsByName("hobby");

  let content = ''; // 화면에 출력할 내용을 누적할 변수
  let count = 0; // 체크된 체크박스의 개수를 세기위한 변수

  for(let i = 0 ; i < hobbyList.length ; i++){

    // 체크박스.checked  -> 체크 여부를 true/false로 반환
    // console.log(hobbyList[i].checked);

    if(hobbyList[i].checked === true ){ // 체크가 되어있을 경우
      
      // 체크박스의 value 속성 값 얻어와 출력하기
      console.log(hobbyList[i].value);

      count++; // count 1 증가
      
      content += hobbyList[i].value + " "; // 내용 누적
    }
  }

  content += `<br><br>선택된 취미 개수 : ${count}`;


  // 클래스가 "name-result"인 요소 중 0번째 요소에 내용으로 출력
  // -> "name-result" 가 1개 밖에 없으므로 0번 인덱스만 선택
  const div = document.getElementsByClassName("name-result")[0];

  // 내부에 내용 작성(HTML 코드를 해석 O)
  div.innerHTML = content;
}