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

// 아이디 비밀번호 형식검사
document.querySelector('.btn-primary').addEventListener('click', function(event){
  const input = document.querySelector('.form-control');
  const pw = document.querySelector('#pw');

  /* .value라는 속성을 사용해 값을 가져올 수 있음 */
  // 만약 아이디 입력창이 비었다면,
  if(input.value === '') {
    /* .preventDefault()는 폼 전송을 막아줌 */
    event.preventDefault();
    alert('아이디를 입력해주세요');
  }

  // 만약 이메일 형식이 거짓이라면,
  if(!(/\S+@\S+\.\S+/.test(input.value))){
    event.preventDefault();
    alert('이메일 형식이 잘못되었습니다.');
  }

  // 패스워드가 공백이면
  if(pw.value === '') {
    event.preventDefault();
    alert('비밀번호를 입력해주세요');
  // 패스워드가 6글자 미만이면
  } else if(pw.value.length < 6) {
      event.preventDefault();
      alert('비밀번호는 6글자 이상으로 작성해주세요');
  // 패스워드에 영어 대문자가 없다면
  } else if(!(/[A-Z]/.test(pw.value))){
      event.preventDefault();
      alert('영어 대문자가 1개 이상 포함되어야 합니다.');
  }
 
})

/* && = and 연산자, || or 연산자 */



var count = 0;

document.querySelector('.badge').addEventListener('click', function(){
  count += 1;
  console.log(count)
  if (count % 2 == 1) {
    document.querySelector('.badge').innerHTML = 'Light';
  } else {
    document.querySelector('.badge').innerHTML = 'Dark';
  }
})

// let은 재선언은 못하지만 재할당을 할 수 있음.
// const는 재선언과 재할당이 불가하다.
// 함수 밖에서 선언된 변수는 함수 안에서 사용이 가능하다
// 하지만 반대로 함수 안에서 선언된 변수는 밖에서 사용이 불가능하다


// 몇초후에 단발성으로 함수 실행하는 셋타임아웃 내장함수
setTimeout(function(){
  document.querySelector('.alert').style.display = 'block';
}, 5000)

// 몇초마다 지속적으로 함수 실행하는 셋인터벌 내장함수
setInterval(function(){
  console.log('h')
}, 10000)

// 5초에 걸쳐서 창이 사라지게 만드는 기능
let buy = 6;
setInterval(function(){
  buy -= 1;
  document.querySelector('.alert').innerHTML = buy + "초 이내 구매시 사은품 증정";
  if(buy == 0){
    document.querySelector('.alert').style.display = 'none';
  }
}, 1000)

// 정규식의 장점1 
// /[a-z]/.test('abcedA') a부터z까지 하나라도 우측에 들어있냐 검사하는 것
// 모든 한국어 문자를 검사하고 싶으면 /[ㄱ-ㅎ가-힣]/.test('바보')
// [\S] = 아무 문자 딱 1개가 있냐
// [\S+] = 아무 문자가 끝날때까지 게속 검사
// [^A] = A로 시작하냐
// [A&] = A로 끝나냐
// [A|B] = A OR B가 있냐
// [\.] = .이 들어있냐

// 캐러셀(carousel)이란? -> 슬라이드되는 UI
document.querySelector('.slide-1').addEventListener('click', function(){
  // none은 제자리로 돌아오게 하는 것
  document.querySelector('.slide-container').style.transform = "none";
})

document.querySelector('.slide-2').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = "translateX(-100vw)";
})

document.querySelector('.slide-3').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = "translateX(-200vw)";
})


// 다음 버튼을 누르면 알아서 넘어가는
// 확장성 좋은 코드 : 갑자기 사진이 추가되어도 기능이 되는
var now = 1;
  document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.slide-container').style.transform = 'translateX(-' + now + '00vw)';
    now += 1;
 })