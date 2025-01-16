/* 속성 관련 메서드 확인 */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {

  const input1 = document.querySelector("#input1");

  // 요소.getAttribute("속성명") : 속성 값 얻어오기
  console.log("input의 name 속성 값 : ", input1.getAttribute("name"));


  // 요소.setAttribute("속성명", "속성값") : 요소에 새로운 속성 추가 

  // type 속성의 값을 "checkbox"로 설정(추가) -> 체크박스로 변경됨
  input1.setAttribute("type", "checkbox");

  // class 속성의 값을 "big" 으로 설정
  input1.setAttribute("class", "big");
  // JS 속성 설정 방법 중 class 관련
  // + CSS의 class 기반 설계를 이용해서
  // HTML 요소의 스타일을 변경할 수 있다!!
  
  /* 이미 같은 속성이 존재하면 덮어쓰기된다! */
  input1.setAttribute("type", "number");
  input1.setAttribute("class", "bg-skyblue");



  // 요소.removeAttribute("속성명") : 속성 제거하기
  
  // class 속성 제거
  input1.removeAttribute("class");


  // 요소.hasAttribute("속성명") : 속성 존재 여부 확인(T/F)

  // placeholder 속성이 없을 경우
  if( !input1.hasAttribute("placeholder") ){
    input1.setAttribute("placeholder", "placeholder 추가됨");
  } 
  
  else{ // 있을 경우
    input1.removeAttribute("placeholder");
  }

});



/* 요소 직접 접근 확인 */
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {

  // [tip]
  // 브라우저 콘솔에서
  // 특정 요소가 가지고있는 DOM 속성을 
  // 직접 확인하고 싶을 경우
  // -> 복수 형태로 요소를 얻어오는
  //  querySelectAll(), getElementsByClassName() 등을 이용

  const inputs = document.querySelectorAll("#input2");
  const divs = document.querySelectorAll("#div2");

  console.log(inputs);
  console.log(divs);

  // id 얻어오기
  console.log(inputs[0].getAttribute("id"));
  console.log(inputs[0].id);

  // name 얻어오기
  console.log("#input2의 name : ", inputs[0].getAttribute("name"));
  console.log("#input2의 name : ", inputs[0].name);
  console.log("#div2의 name : ", divs[0].name);

  // value 얻어오기
  console.log("#input2의 value : ", inputs[0].getAttribute("value"));
  console.log("#input2의 value : ", inputs[0].value);
  console.log("#div2의 value : ", divs[0].value);

});



/* classList 테스트 */
const addBtn = document.querySelector("#addBtn");
const closBtn = document.querySelector("#closeBtn");
const btnContainer = document.querySelector(".btn-container");

// 추가 버튼 클릭 시
addBtn.addEventListener("click", () => {
  
  // 요소.classList.contains("클래스명");
  // -> "클래스명"을 포함하고 있으면 true, 없으면 false
  console.log(btnContainer.classList.contains("hidden"));

  // .btn-container에 hidden 클래스가 포함되어 있을 경우
  // == 화면에 안보이는 경우
  if(btnContainer.classList.contains("hidden")){
    
    // 요소.classList.remove("클래스1" [, ...]) 
    // -> 클래스 제거
    btnContainer.classList.remove("hidden");

    // 요소.classList.add("클래스1" [, ...]) 
    // -> 클래스 추가
    addBtn.classList.add("hidden");
  }
});



// 종료 버튼 클릭 시
closBtn.addEventListener("click", () => {

  // .btn-container가 hidden 클래스를 포함하지 않을 경우
  if( !btnContainer.classList.contains("hidden") ){
    btnContainer.classList.add("hidden"); // hidden 추가
    addBtn.classList.remove("hidden"); // hidden 제거
  }
});

/* 
 - 클래스를 이용한 CSS 스타일 제어하는 방법이 제일 많이 사용됨!!
  -> HTML 복잡도가 낮아짐(깔끔~)

 - 요소.style.css속성 방법은 
   inline-style로 적용되기 때문에 
   HTML의 복잡도가 늘어나는 문제가 발생!!!

   단, class를 이용한 css를 덮어 씌울 목적인 경우 사용!!
   
   * 왜? css 선택자 우선순위 참고
   (1에 가까울 수록 우선!)
   1) !important
   2) inline-style
   3) id 선택자
   4) class 선택자
   5) tag 선택자
*/
addBtn.addEventListener("click", () => {
  const container = document.querySelector(".container-3");

  /* inline-style로 css 변경 */
  // container.style.backgroundColor = "pink";
  // container.style.border = "5px double red";
  // container.style.width = "300px";
  // container.style.height = "150px";
  
  /* class를 추가하여 css 변경 */
  container.classList.add("test");

});


/* red, yellow, green 버튼 클릭 시 */
const container3 = document.querySelector(".container-3");
const btns = document.querySelectorAll(".btn");

// 향상된 for문
btns.forEach((btn) => {
  // btn === btns에 하나씩 꺼낸 요소

  btn.addEventListener("click", () => {
    const color = btn.innerText; // 버튼에 작성된 내용(색상)

    // 기존에 클릭한 색상 클래스 존재하는지 확인
    // -> 있으면 true, 없으면 false
    const classExist
       = container3.classList.contains(`bg-${color}`);

    // container3가 가지고 있는 bg-로 시작하는 class 모두 제거
    //  ==
    // container3의 클래스 모두 지우고
    container3.removeAttribute("class");

    // container-3 클래스를 추가
    container3.classList.add("container-3");

      // !classExist와 같음
    if(classExist === false){
      // 요소.classList.toggle("클래스명")
      // -> 클래스가 없으면 추가, 있으면 제거
      container3.classList.toggle(`bg-${color}`);
      // container3.classList.add(`bg-${color}`);
    }
  });
});

// 수정 버튼 클릭 시
const modifyBtn = document.querySelector("#modifyBtn");
modifyBtn.addEventListener("click", () => {

  // 클래스 bg-green <-> bg-red 변경하기(replace 이용)

  // green -> red
  if(modifyBtn.classList.contains("bg-green")){
    modifyBtn.classList.replace("bg-green", "bg-red");
  
  } else {
    modifyBtn.classList.replace("bg-red", "bg-green");
  }


}); 