/* break 확인 */
function check1(){

  const stopNumber 
    = Number(prompt("1~20 사이 멈추고 싶은 숫자 입력"));

  for(let num=1 ; num<=20 ; num ++){
    console.log(num);

    if(num == stopNumber){ // num과 입력 받은 수가 같을 때
      break; // 반복 멈춤(for문 종료)
    }
  }
}


/* 무한 반복 멈추기 */
function check2(){

  let num = 1;
  while(true){ //  조건식 항상 true -> 계속 반복
    // 조건식이 true일 경우 반복할 코드
    console.log(num++);

    if(num === 100){
      break;
    }
  }
}


/* 무한 반복 멈추기2 */
function check3(){

  // prompt에 취소가 입력 될 때 까지 숫자를 입력 받아
  // 합계 구하기

  let sum = 0;

  while(true){
    const value = prompt("숫자 입력(취소 시 종료)");
  
    // prompt 취소 클릭 === null
    if(value === null){
      break;
    }

    // if 수행 x === 확인 클릭
    sum += Number(value);
  
  } // while end

  alert(`합계 : ${sum}`);
}

/* 중첩 반복문에서 break 사용(분기문 작용 범위) */
function check4(){
  // 12345
  // -----
  // 12345
  // -----
  // 12345
  // -----
  for(let row=1 ; row<=3 ; row++){

    let result = "";
    for(let col=1 ; col<=5 ; col++){
      result += col;

      if(col === 4){ // 4일 때 멈춤
        break; // 안쪽 for문에 작용
      }
    }

    console.log(result);
    console.log("-----");

    if(row === 2){
      break; // 바깥쪽 for문에 작용
    }
  }
}


/* continue 확인하기 */
function check5(){

  // 1부터 20까지 1씩 증가하는 반복문을 이용해서 숫자 출력
  // 단, 3과 5의 배수는 건너뛰기
  // 1 2 4 7 8 11 13 14 16 17 19

  for(let num=1 ; num<=20 ; num++){
    
    // 1) continue 사용 X
    // if(num % 3 !== 0 && num % 5 !== 0){
    //   console.log(num);
    // }

    // 2) continue 사용 O
    if(num % 3 === 0 || num % 5 === 0){
      continue;
    }
    console.log(num);
  }
}

/* continue 확인하기2 */
/* 
  - 123456789 를 5줄 출력
  단, 
  1번 줄 출력 시  1 제외
  2번 줄 출력 시  2 제외
  3번 줄 출력 시  3 제외
  4번 줄 출력 시  4 제외
  5번 줄 출력 시  5 제외
  (continue 이용)
*/
function check6(){

  for(let row=1 ; row<=5 ; row++){

    let result = "";
    for(let col=1 ; col<=9 ; col++){

      if(col === row){ 
        continue;
      }

      result += col;
    }
    console.log(result);
  }

  // ---------------------------------------

  console.log("******************");

  // for문 하나로~
  
  // "문자열".replace("검색어", "바꿀단어")
  // -> 문자열 내에 검색어를 찾아서 "바꿀단어"로 변경

  for(let num = 1 ; num <= 5 ; num++){
    let str = "12345679";

    // num과 일치하는 숫자를 str에서 찾아 '' 으로 변경
    str = str.replace(num, '');
    console.log(str);
  }
}

// ---------------------------------------------------------

/** UP & DOWN 게임 */
function startGame(){

  // Math.floor(실수) -> 소수점 내림 처림(정수로 변함) 
  // Math.random() -> 0.0 ~ 1.0 사이 난수 발생 (1.0 미만)
  
  // 맞춰야되는 정답(1 ~ 200 사이 난수) 생성
  const answer = Math.floor( Math.random() * 200 + 1);

  // 테스트 후 삭제
  console.log("정답 : ", answer);

  // ---------------------------------------------------
  
  // 정답 시도 횟수를 세기 위한 변수 
  let count = 0;
  
  // ---------------------------------------------------

  while(true){ // 무한 반복

    const input = prompt("1부터 200 사이 숫자 입력");
    
    // - 취소를 클릭한 경우 
    if(input === null){
      alert(`${count}번째에서 포기 하셨습니다(정답:${answer})`);
      break; // 반복 종료
    }

    // - 미입력한 경우 (카운트 증가 X)
    if(input.length === 0){
      alert("다시 입력해주세요");
      continue; // 카운트 증가 구문 수행 X, 다음 반복으로 넘어감
    }
    
    const value = Number(input); // 입력된 값 number 타입 변경
   
    // - 잘못 입력한 경우(1 ~ 200 사이 X) - (카운트 증가 X)
    if(value < 1 || value > 200){
      alert("1 ~ 200 사이 숫자만 입력");
      continue;
    }

    count++; // 정상 입력 시 카운트 증가

    // 정답 판별 -> break
    if(value === answer){
      alert(`정답!!! ${answer} / 시도 횟수 : ${count}`);
      break;
    }

    // UP / DOWN (단, 7회째면 실패)
    if(count === 7){
      alert(`7회 입력 - 실패! (정답:${answer})`);
      break;
    }

    if(value > answer){
      alert(`DOWN (현재 ${count})회`);
    } else{
      alert(`UP (현재 ${count})회`);
    }

  } // while end
  // 함수 끝
}

