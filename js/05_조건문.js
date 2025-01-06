/** if 예제 - 양수인지 검사 */
function check1(){

  // id가 "input1"인 요소를 얻어와 in1 상수에 저장
  const in1 = document.getElementById("input1");

  // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여
  // val 상수에 저장
  const val = Number(in1.value);

  // 양수(0보다 큰 수)가 맞는지 검사
  if(val > 0){
    // 조건식이 true인 경우 수행할 코드;

    alert(`${val} 은/는 양수 입니다.`); 
    // alert : 브라우저 알림창 띄우기
  }

  // 양수가 아닌 경우
  if(val <= 0){
    alert(`${val}은 양수가 아닙니다.`);
  }

}


/** 1 ~ 100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){

  // 난수 발생 : Math.random()
  //   0.0 <= 난수 < 1.0

  // 1 ~ 100 사이 난수 발생
  // Math.random()   ->    0.0 <= 난수 < 1.0
  // Math.random() *100  ->  0.0 *100 <= 난수 *100 < 1.0 *100
  //                     ->  0.0 <= 난수*100 < 100.0
  
  // Math.random() *100 +1  ->  1.0 <= 난수*100+1 < 101.0
 
  // 내림 처림 : Math.floor(실수);
  // Math.floor(Math.random() *100 +1) ->  1 <= 난수 < 101


  // 1~100 사이 난수를 발생시켜 randomNumber 변수에 저장
  const randomNumber = Math.floor(Math.random() *100 +1);


  // 발생된 난수가 홀수인지 검사
  if(randomNumber % 2 === 1){
    alert(`${randomNumber}은/는 [홀수] 입니다`);
  }

  else{ // 홀수가 아닌 경우 == 짝수인 경우
    alert(`${randomNumber}은/는 [짝수] 입니다`);
  }

}


/** 양수, 음수, 0 판별기 */
function check3(){
  
  const input3 = document.getElementById("input3");
  const val = Number(input3.value);

  let result; // 결과를 저장할 변수 선언 (현재 undefined)

  // 양수 판별
  if(val > 0){
    result = "양수";
  }
  
  // 음수 판별
  else if(val < 0){
    result = "음수";
  }

  // 양수, 음수 아닌 경우
  else{
    result = "0";
  }

  // if / else if / else에 모두 result 값 대입 코드 작성
  // -> 무조건 result에는 값이 대입되도록 되어있다!!

  alert(`${val}은/는 ${result} 입니다.`);
}


/**(실습문제) 어린이, 청소년, 성인 구분하기 */ 
function ageCheck() {
  const inputAge = document.getElementById("inputAge");
  const value = Number(inputAge.value);

  let result;
  if (value >= 0 && value <= 13) {
    result = "어린이";
  }

  else if (value >= 14 && value <= 19) {
    result = "청소년";
  }

  else if (value >= 20 && value <= 120) {
    result = "성인";
  }

  else {
    result = "잘못 입력 하셨습니다";
  }

  alert(result);
}



/**(실습문제) 어린이, 청소년, 성인 구분하기 2 */ 
function ageCheck2(){

  const inputAge = document.getElementById("inputAge");

  const age = Number(inputAge.value); // 입력 받은 나이

  let result; // 결과 저장용 변수

  // 잘못 입력된 경우
  if(age < 0 || age > 120){
    result = "잘못 입력 하셨습니다";
 
  } else if(age <= 13) { // (age >= 0 && age <= 13) 같음
    result = "어린이";
  
  } else if(age <= 19){ // (age >= 14 && age <= 19) 같음
    result = "청소년"

  } else{
    result = "성인";
  }

  alert(result);
}


/* 
  input 요소에 작성된 값 얻어오기 : input요소.value
  html 요소에 작성된 내용 얻어오기 : html요소.innerText
*/


/** 두 수 A, B를 입력 받아 A가 B의 배수가 맞는지 확인 */
function check4(){

  // id가 inputA, inputB인 요소를 얻어와 변수에 저장
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");

  //1) A, B 중 하나라도 입력되지 않을 경우
  //   -> "입력되지 않은 값이 존재합니다"

  // "string".length : 문자열의 길이 반환

  // inputA 또는 inputB 중 하나라도 입력되지 않은 경우
  if(inputA.value.length === 0 || inputB.value.length === 0){
    alert("입력되지 않은 값이 존재합니다");
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
            // -> 함수를 수행할 수 없는 상태여서 미리 종료
  }

  
  // 위 if문을 건너 뜀 == 둘 다 입력된 상태
  const v1 = Number(inputA.value);
  const v2 = Number(inputB.value);

  // 2) A가 B 보다 작을 경우
  //  -> "A가 B보다 작습니다"
  if(v1 < v2){
    alert("A가 B보다 작습니다");
    return; 
  }

  // 위 if문 건너뜀 
  //  == A,B가 모두 입력됨 + A가 B보다 크거나 같음

  // 3) A가 B보다 클 경우
  //  -> 배수 판별 수행
  if(v1 % v2 === 0){ // A가 B의 배수가 맞을 경우
    alert(`${v1}은 ${v2}의 배수가 맞습니다`);
    return;
  }

  alert(`${v1}은 ${v2}의 배수가 아닙니다`);
}



/** 입력된 수가 3,4,5 의 배수가 맞는지 확인  */
function check5(){
  const input5 = document.getElementById("input5");
  
}

