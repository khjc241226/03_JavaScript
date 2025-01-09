
// 준비한 이미지 파일명을 배열에 저장
const images = ["짱구1.gif", "짱구2.gif", "짱구3.gif", "짱구4.gif", "짱구5.gif"];


// 클래스가 key인 요소를 모두 얻어와 keys 변수에 저장
const keys = document.querySelectorAll(".key");
// 입력키 : Q W E R
// 인덱스 : 0 1 2 3
// 이미지 : 0 1 2 3


/* HTML 문서 자체에 keydown 이벤트 리스너(감지기) 추가  */
document.addEventListener("keydown", function(e){

  // 매개 변수 e : 발생한 이벤트 관련 정보를 저장한 객체
  // e.key : 어떤 key가 눌러졌는지 출력

  // console.log(e);
  // console.log(e.key);

  // 문자열.toUpperCase() : 대문자로 변환 
  // 문자열.toLowerCase() : 소문자로 변환

  let index; // 인덱스를 저장할 변수
  switch(e.key.toLowerCase()){
    case "q" : index = 0; break;
    case "w" : index = 1; break;
    case "e" : index = 2; break;
    case "r" : index = 3; break;
    default : return; // 다른 키 입력 시 함수(이벤트핸들러) 종료
  }

  // 눌러진 키의 배경 이미지를 변경
  keys[index].style.backgroundImage
    = `url('../images/${images[index]}')`;
});



/* 키를 땠을 때 배경 이미지 지우기 */
document.addEventListener("keyup", function(e){

  let index; // 인덱스를 저장할 변수
  switch(e.key.toLowerCase()){
    case "q" : index = 0; break;
    case "w" : index = 1; break;
    case "e" : index = 2; break;
    case "r" : index = 3; break;
    default : return; // 다른 키 입력 시 함수(이벤트핸들러) 종료
  }

  // 배경 이미지 제거
  keys[index].style.backgroundImage = "none";
});



/* 마우스 따라다니는 이미지 */
const cursorImage = document.querySelector("#cursorImage");

/* 문서 자체에 마우스가 움직였을 때(mousemove)에 대한 동작 */
document.addEventListener("mousemove", function(e){

  // console.log(e);

  cursorImage.style.left = `${e.pageX - 5}px`;
  cursorImage.style.top  = `${e.pageY + 10}px`;

});