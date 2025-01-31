// 1. 나이와 지역을 변수로 만들기, 나이는 가변, 출신지는 불변
let age = 27;
const locate = "busan";

// 2. 이 코드를 실행하면 콘솔창에 나오는 것.
// 내 예상 : kim, 0
// 이유 : 함수 안에서 선언한 변수는 함수 안에서 끝나기 때문에 id = 0이 나오고, 함수 자체를 불러왔을 때 안에서 호출한 name은 kim이 나온다.
var name = 'park';
var id = 0;

function showName(){
  var name = 'kim';
  var id = 1;
  console.log(name);
}

showName();
console.log(id);

// 3. 첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
// 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.
// 변수에 예금액을 넣으면 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능

var cost = 60000;
var f_cost = 0;

function calculate(cost){
  if(cost < 50000){
    cost += (cost * 0.15);
    cost += (cost * 0.15);
    f_cost = cost;
    console.log(f_cost);
  }
  else if(cost >= 50000){
    cost += (cost * 0.20);
    cost += (cost * 0.20);
    f_cost = cost;
    console.log(f_cost);
  }
}

calculate(60000);
calculate(10000);


// 1. 유저가 답을 맞추면 alert('성공');
// 2. 유저가 답을 3번 찍어서 못맞추면 alert('멍청아') 를 띄워봅시다.
// .value 를 항상 기억하자
let count = 0;
document.getElementById('send-answer').addEventListener('click', function(){
  if(document.getElementById('answer').value == 1335){
    alert('성공');
  } else {
    count += 1;
    if(count > 3){
      alert('멍청아');
    }
  }
})

