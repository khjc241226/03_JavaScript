const numbers = document.querySelectorAll(".number"); // 버튼
const result = document.querySelector("#result"); // 결과
const reset = document.querySelector("#reset"); // 초기화

// 향상된 for문
for(let num of numbers){
  num.addEventListener("click", (e) => {

    if(result.textContent.length >= 10){
      alert("10자 까지만 입력할 수 있습니다");
      return;
    }
    // e.target : 이벤트가 발생된 요소
    // textContent == innerText
    result.textContent += e.target.textContent; // 버튼 내용 누적
  });
}

// 초기화 버튼 클릭 시
reset.addEventListener("click", ()=>{
  result.textContent = ""; // 누적된 번호 모두 삭제
});