//순수 자바스크립트

// 1. 선언적 함수 : () 괄호 뒤에 이름이 있다
                // 함수호출 위치에 관계없이 어디서나 호출 가능
함수1();
function 함수1(){
  console.log('선언적 함수 호출 실행 위치 관계없이 실행 가능');

} 
함수1();

// 2. 리터럴 함수 : 괄호옆에 이름이 없는 함수 (익명함수)
                // 함수호출은 반드시 함수 아래에서만 호출 가능
                // 변수이름에 괄호를 사용 ex) 변수1()
const 변수1 = function(){
  console.log('리터럴함수(이름없는함수)반드시 함수선언 아래에서만 실행 가능');
}
변수1();

//ES6
// 3. 화살표 표현형식 함수 : 화살함수 : 익명함수와 모두 같지만 function 키워드가 없어지고 
                                    // 괄호 뒤에 화살표가 붙는다 const 변수2 = () => {}

const 변수2 = () => {
  console.log('화살표함수도 반드시 함수선언 아래에서만 실행 가능');
}
변수2();

// 4. 즉시표현식 함수 = 즉시실행함수 IIFE (이피)

(function(){
  console.log('즉시표현식 함수 즉 즉시실행함수는 함수가 곧바로 실행');
})();

// 5. 제이쿼리 $ 충돌방지

(function($){
  console.log('즉시표현식 함수 즉 즉시실행함수 & 제이쿼리 매개변수 받아서 즉시실행'+ $);
})(jQuery);

// 외부호출 : 버튼 클릭 호출 실행
let cnt=0; //로딩시 : 홈페이지가 열릴때
function count(){
  cnt++; //1
  console.log(cnt);
}

// 버튼2 클릭 호출실행
cnt=0;
function count2(){
  cnt+=100; //100씩
  alert(cnt);
  return; //리턴문 이후로는 실행이 안된다.
  cnt+=1000;
  alert(cnt);
}

function count3 (){
  cnt += 1000;
  return console.log(cnt); //여기까지는 실행 되고 끝
  cnt += 2000;
  
}
//타이머함수로 호출 실행
setInterval(count3, 500);