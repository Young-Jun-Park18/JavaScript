// DOM API (HTML 문서를 구조화한 객체 모델, 자바스크립트로 HTML 요소에 접근하거나 조작할 수 있도록 도와줌)

// get method의 id를 통한 접근 방법
let title = document.getElementById("title");
console.log(title);

// 요소의 텍스트 내용 변경 방법
title.textContent = "헬스 3대 운동";

// get method의 ClassName을 통한 접근 방법
let items = document.getElementsByClassName("item");
console.log(items);
console.log("얘는 스쿼트", items[0]);

// get method의 태그이름을 통한 접근 방법
let liList = document.getElementsByTagName("li");
console.log(liList);

// query method로 id 접근 방법
let h2 = document.querySelector("#title"); // id는 #으로, class는 .으로 구분한다. css요소를 여기 넣는다
console.log("h2: ", h2);

// query method로 class 접근 방법
let item = document.querySelector(".item"); // 하나만 가져옴, 전부 가져오려면 SelectorAll 사용해야함
console.log("query item", item);
let item2 = document.querySelectorAll(".item"); // 전부 가져옴
console.log(item2);

// query method로 태그 접근 방법
let tag = document.querySelector("input");

// 정리
// DOM API = document object model api의 약자
// HTML의 요소에 구조와 내용을 관리한다

// 정리2
// BOM API = browser object model api의 약자
// 브라우저 창이나 화면과 상호작용할 수 있도록 기능을 제공

// 정리3
// API = application programming interface
// 애플리케이션과 프로그램이 서로 통신할 수 있도록 도와주는 인터페이스

// 정리4
// HTML 코드 수정하면 되는데 굳이 JS method 사용하는 이유
// 사용자와 실시간 상호작용이 가능

// textContent는 전부 문자로 인식
title.textContent = "<strong>운동</strong>";

// innerHTML은 태그 인식
title.innerHTML = "<strong>@운동@</strong>";

// setAttribute('속성이름', '바꿀 값')로 속성 변경하기
let input = document.querySelector("input");
input.setAttribute("placeholder", "변경된 placeholder");

// removeAttribute('속성이름')로 속성 지우기
input.removeAttribute("placeholder");

let hello = document.querySelector(".hello");
console.log(hello);

// style.color = 'color'로 html 요소 스타일링하기
// hello.style.color = "blue";

// style.backgroundColor = 'color'로 html 요소 스타일링하기
// hello.style.backgroundColor = "white";

// classList.add()로 js에서 html에 css 설정 추가
hello.classList.add("dark");
hello.classList.add("one", "two");

// classList.remove()로 js에서 html에 css 설정 삭제
hello.classList.remove("dark");

// 다른 DOM 속성 공부하는 곳
// https://developer.mozilla.org/en-US/docs/Web/API/Element
