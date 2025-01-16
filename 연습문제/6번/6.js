const resName = document.querySelector("#resName");
const resNameInput = document.querySelector("#resNameInput");

// 버튼 4개
const updateBtn  = document.querySelector("#updateBtn");
const addMenu    = document.querySelector("#addMenu");
const deleteMenu = document.querySelector("#deleteMenu");
const exitBtn    = document.querySelector("#exitBtn");

// 버튼 영역
const normalContainer = document.querySelector(".normal-container");
const editContainer = document.querySelector(".edit-container");

// 메뉴판
const menuContainer = document.querySelector(".menu-container");




/* 식당명 관련 기능 구현*/


/* #resName (span) 이 클릭된 경우
  #resName을 숨기고
  #resNameInput을 보이게 만들기*/
resName.addEventListener("click", () => {

  // span 숨기기 클래스 추가
  resName.classList.add("res-name-hidden"); 
  
  // input 숨기기 클래스 제거
  resNameInput.classList.remove("res-name-hidden"); 

  resNameInput.focus(); // input에 포커스 맞추기
});



/* #resNameInput이 포커스를 잃었을 때(blur) 
  #resNameInput을 숨기고
  #resName을 보이게 만들기*/
resNameInput.addEventListener("blur", () => {
  resNameInput.classList.add("res-name-hidden");
  resName.classList.remove("res-name-hidden");

  // input에 입력된 값이 없다면
  if(resNameInput.value.trim() === ""){
    resName.innerText = "식당명을 입력하세요";
    return;
  }

  // input에 작성된 내용을 span에 그대로 대입
  resName.innerText = resNameInput.value;
});


// -----------------------------------------------
/* 수정 버튼 클릭 시 */
updateBtn.addEventListener("click", () => {

  // 1) 버튼 영역 변경
  normalContainer.classList.toggle("b-hidden");
  editContainer.classList.toggle("b-hidden");

  // 2) .menu 모두 얻어오기
  const menus = document.querySelectorAll(".menu");

  // 3) 모든 .menu를 순차 접근
  menus.forEach(item => {

    // 4) 기존 메뉴판에 작성된 메뉴명, 가격 얻어오기
    const menuName = item.children[0].innerText;
    const menuPrice = item.children[1].innerText.replace('원','');
    
    // 5) .menu 내부에 추가될 input요소를 모아둔 JS객체 얻어오기
    const menuContent = createMenuContent();

    // 삼항 연산자
    // -> 조건식 ? true인 경우 : false인 경우;
    // -> 조건식 결과에 따라 둘 중 하나를 선택!

    menuContent.menuNameInput.value 
      = (menuName === "미입력") ? "" : menuName;

    menuContent.menuPriceInput.value
      = (menuPrice === "0") ? "" : menuPrice;

    // .menu(li) 내부 내용 모두 삭제
    item.innerHTML = "";

    // menuContent 객체에 저장된 input 요소를
    // 모두 .menu(li) 의 자식으로 추가
    for(let key in menuContent){
      item.append(menuContent[key]);
    }

  });

});

// -----------------------------------------------
/* 종료 버튼 클릭 시 */
exitBtn.addEventListener("click", () => {

  // 1) 버튼 영역 변경
  normalContainer.classList.toggle("b-hidden");
  editContainer.classList.toggle("b-hidden");

  // 2) .menu 모두 얻어오기
  const menus = document.querySelectorAll(".menu");

  // 3) 모든 .menu를 순차 접근
  menus.forEach(item => {
    
    // 4) input에 작성된 메뉴명, 가격 얻어오기
    const menuName = item.children[1].value;
    const menuPrice = item.children[2].value;

    // 5) span 요소 생성
    const span1 = newEl("span", {}, ["menu-name"]);
    span1.innerText
      = (menuName.trim() === "" ? "미입력" : menuName);

    const span2 = newEl("span", {}, ["menu-price"])
    span2.innerText
      = (menuPrice.trim() === "" ? "0" : menuPrice) + "원";

    // .menu(li) 내부 내용 모두 삭제
    item.innerHTML = "";

    // span 모두 .menu(li) 자식으로 추가
    item.append(span1, span2);

  });
}); 


// ------------------------------------------------------

/* 추가 버튼 클릭 시
  메뉴에 입력 칸 추가 (최대 15개) */
addMenu.addEventListener("click", () => {

  // 메뉴가 15개 이상인지 확인
  if(document.querySelectorAll(".menu").length >= 15){
    alert("더 이상 메뉴를 추가할 수 없습니다");
    return;
  }

  // li 요소 생성 (+ class명 : menu)
  const li = newEl("li", {}, ["menu"]);

  // li에 들어갈 input 3개 만들어서 객체로 반환 받기
  const menuContent = createMenuContent();

  // li에 menuContent 값을 모두 추가
  for(let key in menuContent){
    li.append(menuContent[key]);
  }

  // li를 menuContainer(메뉴판)에 추가
  menuContainer.append(li);
});


// ----------------------------------------------------
/* 삭제 버튼 클릭 시
  체크된 메뉴만 모두 remove() */
deleteMenu.addEventListener("click", () => {

  // .menu-check (체크박스) 중 체크된 요소만 얻어오기
  const menus = document.querySelectorAll(".menu-check:checked");

  // 체크된 요소 순차 접근
  menus.forEach(item => {

    // item(체크박스)의 부모(.menu)요소를 제거
    item.parentElement.remove();
  });
});








// ------------------------------------------------------

/* 요소 생성 + 속성 추가 + 클래스 추가 함수 */
function newEl(tag, attr, cls){
  const el = document.createElement(tag);

  // attr 매개 변수는 객체 형태
  for(let key in attr){
    el.setAttribute(key, attr[key]); // 속성 추가
  }

  // cls 매개 변수는 배열 형태
  for(let className of cls){ // 클래스 추가
    el.classList.add(className);
  }
  
  return el;
}


/* 메뉴 내부 체크박스 요소를 만들어 객체로 반환하는 함수 */
function createMenuContent(){

  // 체크박스 생성
  const check = newEl("input", {type:"checkbox"}, ["menu-check"]);

  // 메뉴명 input 생성
  const menuNameInput 
    = newEl("input", 
      {type:"text", placeholder:"메뉴명"}, 
      ["menu-name-input"]);

  // 메뉴 가격 input 생성
  const menuPriceInput
    = newEl("input", 
      {type:"text", placeholder:"가격"}, 
      ["menu-price-input"]);

  return {
    "check" : check,
    "menuNameInput" : menuNameInput,
    "menuPriceInput" : menuPriceInput
  }
}