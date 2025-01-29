
//3 6 9 게임
function game369(num){
  const input = document.querySelector('.select');
  if(num % 3 == 0){
    console.log('박수');
  }
  else{
    console.log('통과');
  }
}
game369(3);
game369(5);


// 9의 배수에서는 박수 x 2 가 출력되도록
function 삼육구게임(num){
  if (num % 9 == 0) {
    console.log("박수x2");
  } else if (num % 3 == 0){
    console.log('박수');
  } else {
    console.log('통과');
  }
}
game369(3);
game369(9);
game369(11);

// 공인중개사 합격 여부
function eduwill(score1, score2){
  if((score1 < 40 ) || (score2 < 40 )){
    console.log('불합격');
  } else if (score1 + score2 >= 120){
    console.log('합격');
  } else {
    console.log('불합격');
  }
}

eduwill(70, 70);
eduwill(30, 100);
eduwill(50, 50);