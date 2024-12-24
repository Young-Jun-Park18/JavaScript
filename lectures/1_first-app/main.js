console.log("hello", "world", "javascript");

alert('경고창 생성은 alert("경고 내용")');

//  한줄 주석

/*
    여러줄 주석
*/

// let과 const
let name = "박영준"; // let은 변수 중복 방지를 위해 사용
const PI = 3.14; // const는 불변 상수에 사용 + 대문자로 써야함

// ${}과 백틱``
console.log(`백틱 안에는 변수를 넣을 수 있습니다. 제 이름은 ${name} 입니다`);

// 함수 선언
function sayName() {
  console.log("안녕하세요");
  console.log("제 이름은");
  console.log(`${name} 입니다.`);
}

// 함수 호출
sayName();

// 객체 생성
let obj = {
  //객체 변수
  age: 30, // 프로퍼티(객체가 가진 속성)
  // 객체 함수
  sayHello: function () {
    console.log("hello1");
    console.log("hello2");
    console.log("hello3");
  },
};

// 객체 호출
console.log(obj.age); // 부분 출력
obj.sayHello(); // 객체 함수 출력

// 이벤트란 HTML 요소에서 발생한 사건
