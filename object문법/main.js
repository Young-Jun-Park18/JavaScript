// 버튼 0을 누르면 
// - 모든 클래스에 오렌지 제거
// - 버튼 0에 오랜지 클래스 추가
// - 모든 div 설명 제거
// - 버튼 0의 div show

document.addEventListener("DOMContentLoaded", function () {
  // 모든 탭 버튼과 탭 콘텐츠 요소 가져오기
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // 각 버튼에 클릭 이벤트 추가
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      // 모든 버튼에서 'orange' 클래스 제거
      tabButtons.forEach(btn => btn.classList.remove("orange"));

      // 모든 탭 콘텐츠에서 'show' 클래스 제거
      tabContents.forEach(content => content.classList.remove("show"));

      // 클릭한 버튼에 'orange' 클래스 추가
      tabButtons[index].classList.add("orange");

      // 해당하는 탭 콘텐츠에 'show' 클래스 추가
      tabContents[index].classList.add("show");
    });
  });
});

// 이벤트 버블링 (하위 요소를 누르면 상위 요소도 실질적으로 눌리는 것)
document.querySelector('.black-bg').addEventListener('click', function(e){
  e.target; // 유저가 실제로 누른 것
  e.currentTarget; // 이벤트리스너 달린 곳
  e.preventDefault(); // 이벤트 동작을 막아줌
  e.stopPropagation(); // 상위요소 이벤트 버블링을 막아줌
})

function 탭열기(구멍){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(구멍).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(구멍).addClass('show');
}

$('.list').click(function(e){
  // e.target과 dataset으로 축약가능
  탭열기(e.target.dataset.id)
});

// array 사용법 : 여러개의 값을 하나의 변수에 저장할 수 있음, 정렬 가능, 순서 있음
var car = ['박영준', 50000, 'white'];
// array 호출 방법
console.log(car[1]);
// array 수정 방법
car[1] = 20000;

// object 사용법 : 키와 값을 매칭되게 중괄호 사용, 정렬 불가능, 순서 없음
var car2 = {name : '소나타', price : 50000};
// object 호출 방법
console.log(car2.price);
// object 수정 방법
car2.price = 20000;

// 백틱기호 : 문자와 문자 사이에 변수를 넣고 싶을 때 사용
var a = '안녕';
console.log(`문자 ${a} 문자`);
