const applyBtn = document.querySelector("#applyBtn"); // 적용 버튼

const box = document.querySelector("#box"); // 적용 대상

const boxWidth = document.querySelector("#boxWidth"); // 너비
const boxHeight = document.querySelector("#boxHeight"); // 높이
const fs = document.querySelector("#fs"); // 글자 크기
const fontColor = document.querySelector("#boxFontColor"); // 글자색
const bgColor = document.querySelector("#boxBgColor"); // 배경색


/* 전역 변수로 특정 상태의 요소 선택 시 문제점 */
// 처음 HTML 로딩 시 체크된 요소가 없어서 null이 저장된 상태로 고정
// const fw = document.querySelector("[name=fw]:checked");


// 적용 버튼 클릭 시
applyBtn.addEventListener("click", () => {

  // 너비를 입력하는 input에 값이 작성되어 있다면
  if(boxWidth.value.trim().length > 0){
    box.style.width = boxWidth.value + "px";
  }

  // 높이를 입력하는 input에 값이 작성되어 있다면
  if(boxHeight.value.trim().length > 0){
    box.style.height = boxHeight.value + "px";
  }

  // 글자 크기를 입력하는 input에 값이 작성되어 있다면
  if(fs.value.trim().length > 0){
    box.style.fontSize = fs.value + "px";
  }

  // 글자 색을 입력하는 input에 값이 작성되어 있다면
  if(fontColor.value.trim().length > 0){
    box.style.color = fontColor.value;
  }

  // 배경 색을 입력하는 input에 값이 작성되어 있다면
  if(bgColor.value.trim().length > 0){
    box.style.backgroundColor = bgColor.value;
  }
  
  // content에 작성된 값이 있을 때
  if(content.value.trim().length > 0){
    box.innerText = content.value;
  }


  // -------------------------------------------------------------
  /* 왜 이벤트 핸들러 안에 요소 선택 구문을 작성했을까??
    -> 클릭되는 시점에 체크된 요소를 얻어오기 위해서!
  
   :checked -> 체크된 요소만 선택(상태 선택자)
  */


  const fw = document.querySelector("[name=fw]:checked");   // 굵기
  // name 속성이 fw인 요소 중 체크 되어있는 요소 1개만 선택
  // -> 체크된 요소가 없으면 null 반환

  const row = document.querySelector("[name='align-row']:checked"); // 가로 정렬
  const col = document.querySelector("[name='align-col']:checked"); // 세로 정렬

  if(fw != null){ // 글자 굵기가 체크 되었을 때
    box.style.fontWeight = fw.value;
  }

  // 가로 정렬 체크 되었을 때
  if(row != null){ 
    box.style.justifyContent = row.value;
  }

  // 세로 정렬 체크 되었을 때
  if(col != null){ 
    box.style.alignItems = col.value;
  }
});