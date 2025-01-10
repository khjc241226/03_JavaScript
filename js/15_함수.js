/* 전달 인자, 매개 변수 확인 */
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

/** 전달 받은 값이 양수/음수/0인지 판별해서 출력 
 * @param num : 전달 받은 숫자
*/
function testFn1(num){
  let str = "";

  if(num === 0){
    str = "0";

  } else if(num > 0){
    str = "양수";

  } else {
    str = "음수";
  }

  alert(`${num}은/는 ${str} 입니다`);
}

/* #btn1이 클릭 되었을 때 */
btn1.addEventListener("click", function(){

  // #input1인 요소에 작성된 값을 얻어와 number 타입으로 변화
  const val = Number(input1.value);

  // 함수 호출(입력 값 전달)
  testFn1(val);
});


/** 전달 받은 배열 내 요소의 합 출력하기 
 * @param arr : number만 저장된 1차원 배열
*/
function sumArr(arr){
  let sum = 0;
  for(let num of arr){ 
    // arr 배열에 저장된 요소를 
    // 0번 부터 순서대로 하나씩 꺼내 num에 저장
    sum += num;
  }
  alert(`합계 : ${sum}`);
}

/* 합계 구하기 */
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function(){
  const inputs = document.querySelectorAll("[name = input2]");

  // input에 작성된 값을 얻어와 배열 하나 생성
  const arr = []; // 빈 배열

  for(let input of inputs){
    // 배열.push(값) : 값을 배열 마지막 요소로 추가
    arr.push(  Number(input.value) );
  }

  // 함수 호출
  sumArr(arr);
});


/** 배수 확인 함수
 * @param a : 비교(기준) 되는 수 (큰수)
 * @param b : 확인해야되는 수 (작은수)
 */
function multipleFn(a, b){
  let str = "";

  if(a % b === 0){
    str = "맞습니다";
  }else{
    str = "아닙니다";
  }

  alert(`${a}은/는 ${b}의 배수가 ${str}`);
}


const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function(){

  const inputs = document.querySelectorAll("[name=input3]");

  const a = Number(inputs[0].value);
  const b = Number(inputs[1].value);

  multipleFn(a, b);
});


/* return 확인 1 */

/** num의 x 제곱 값을 반환하는 함수
 * @param num : 곱해질 정수
 * @param x : 지수
 * @return : num의 x 제곱
 */
function pow(num, x){
  // 곱셈, 나눗셈 시 영향 없는 수 === 1
  let result = 1;

  for(let i=0 ; i<x ; i++){
    result *= num; // result에 num을 계속 곱함
  }

  return result; // 함수 종료 + 호출한 곳으로 result 가지고 돌아감
}

/** 제곱의 결과를 문자열로 변환해서 반환하는 함수
 * @param num
 * @param x
 * @param result : num의 x제곱
 * @return "num의 x제곱은 result 입니다"
 */
function createStr(num, x, result){
  return `${num}의 ${x}제곱은 ${result}입니다`;
}


// 버튼 클릭 시 prompt를 이용해서 정수, 지수 입력 받아 결과 출력
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", function(){

  const num = Number(prompt("정수 입력"));
  const x   = Number(prompt("지수 입력"));

  alert( createStr(num, x, pow(num, x)) );
});


/** prompt에 입력된 값을 숫자 배열로 바꿔서 반환하는 함수 
 * @param num : 입력 받을 수의 개수
 * @return arr : 입력 받은 수가 저장된 배열
*/
function createArray(num){
  const arr = [];

  for(let i=0 ; i<num ; i++){
    const val = Number(prompt(`${i}번째 인덱스에 대입할 숫자`));
    arr.push(val); // 배열 마지막 요소로 val 추가
  }

  return arr;
}


const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){

  const arr = createArray(5); // 생성된 배열을 반환 받아 저장

  // 합계 출력 함수 호출(함수 재사용)
  sumArr(arr); 
});



/* 함수를 반환하는 함수 */
function createCounter(){

  let count = 5;

  const fn = function(){
    count++;
    return count;
  }
  return fn; // 함수를 반환
}

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function(){
  
  // createCounter() 호출 시 반환 값 :
  // function(){
  //   count++;
  //   return count;
  // }

  // 반환된 함수를 counter에 저장(함수명 == counter)
  const counter = createCounter(); 

  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
  console.log(counter()); // 4
  console.log(counter()); // 5
});


/* Closure(클로저)
  - 외부 함수에서
    종료된 내부 함수에 선언된 변수를 사용하는 기술
*/