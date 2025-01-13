
// 기준이 되는 box
const standard = document.querySelector("#standard");

// 버튼 5개
const btns = document.querySelectorAll(".btn");

let count = 1; // 요소 내용

// 모든 버튼에 클릭 이벤트 리스너를 추가
for(let btn of btns){

  btn.addEventListener("click", (e) => {
    // e : 이벤트 관련 정보가 담긴 객체
    // e.target : 이벤트가 발생한 객체 (클릭된 버튼)

    // 클릭된 버튼에 작성된 내용 얻어오기
    const str = e.target.innerText;

    switch(str){
      case "prepend" :
        // span 요소를 생성
        const span1 = document.createElement("span");

        // TextNode 생성
        const text1 = document.createTextNode(count);

        // 생성된 TextNode를 span1의 자식으로 추가
        span1.appendChild(text1);

        // span1에 배경색 추가
        span1.style.backgroundColor = "skyblue";

        // #standard 요소의 첫 번째 자식으로 추가
        standard.prepend(span1);
      break;


      case "append" : 
        const span2 = document.createElement("span"); // span 요소 생성
        const text2 = document.createTextNode(count); // text node 생성
        span2.appendChild(text2); // span2의 자식으로 text node 추가
        span2.style.backgroundColor = "lightsalmon";
        standard.append(span2); // standard의 마지막 자식으로 span2 추가
      break;


      case "before": 
        const div1 = document.createElement("div"); // div 요소 생성
        div1.className = "box"; // div 요소에 box 클래스 추가
        div1.style.backgroundColor = "orange";
        div1.innerText = count; // div의 내용으로 count 추가
                                // (TextNode 사용 안하는 방법)
        standard.before(div1); // #standard 앞쪽에 요소를 추가
      break;


      case "after" :
        const div2 = document.createElement("div");
        div2.className = "box";
        div2.style.backgroundColor = "springgreen";
        div2.innerText = count;
        standard.after(div2); // #standard의 뒤쪽에 추가
      break;


      case "remove":
        // .box 중 #standard를 제외한 요소를 모두 선택
        const boxes = document.querySelectorAll(".box:not(#standard)");

        // #standard의 모든 자식 span 요소 선택
        const spans = document.querySelectorAll("#standard > span");

        // boxes.remove(); // 배열.remove() -> 존재 X

        for(let box of boxes){
          // 요소.remove() : 선택된 요소 제거
          box.remove(); // 선택된 요소(.box) 삭제
        }

        for(let span of spans){
          span.remove(); // 선택된 요소(#standard > span) 삭제
        }

        count = 0;  // 카운트 초기화

      break;
    } // switch end

    count++; // count 1증가

  });

}