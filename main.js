/* addEventListener는 왼쪽에 있는 코드가 'click'이 되면 function(){}을 실행해주세요 라는 뜻이다*/ 
document.getElementById('close').addEventListener('click', function(){
  document.getElementById('alert').style.display = 'none';
});

/*첫 번째 parameter에 click, keydown, scroll, mouseover 등등을 넣을 수 있다*/