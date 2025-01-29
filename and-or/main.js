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

/*전송버튼 눌렀을 때 input에 입력값이 공백이면 alert 띄워주는 것*/
document.querySelector('.btn-primary').addEventListener('click', function(event){
  const input = document.querySelector('.form-control');
  const pw = document.querySelector('#pw');

  /* .value라는 속성을 사용해 값을 가져올 수 있음 */
  if(input.value === ''){
    /* .preventDefault()는 폼 전송을 막아줌 */
    event.preventDefault();
    alert('아이디를 입력해주세요');
  }
 
  if(pw.value === ''){
    event.preventDefault();
    alert('비밀번호를 입력해주세요');
  } else if(pw.value.length < 6){
    event.preventDefault();
    alert('비밀번호는 6글자 이상으로 작성해주세요');
  }

/* && = and 연산자, || or 연산자 */
})
