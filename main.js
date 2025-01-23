/* Navbar */
// 쿼리 셀렉터는 기본적으로 가장 위 1개만 찾아주기 때문에 중복 class명이 있다면 All과 [index]를 붙여서 지정해줘야한다
// document.querySelectorAll('.navbar-toggler')[1]
document.querySelector('.navbar-toggler').addEventListener('click', function(){
  document.querySelector('.list-group').classList.toggle('show');
}) //classList.toggle('show')는 해당 클래스에 show가 없으면 추가하고 있으면 제거하는 기능이다.

/* 모달창 */
document.querySelector('.btn-login').addEventListener('click', function(){
  document.querySelector('.black-bg').classList.toggle('show');
  document.querySelector('.white-bg').classList.toggle('show');
})

// 닫기 클릭 시 토클 활성화
document.getElementById('close').addEventListener('click', function(){
  document.querySelector('.black-bg').classList.toggle('show');
  document.querySelector('.white-bg').classList.toggle('show');
})