/* 숙제 1번 방법 */
function button_open_close1(parameter) {
  document.getElementsByClassName('alertBox1')[0].style.display = parameter;
}

function button_open_close2(parameter) {
  document.getElementsByClassName('alertBox2')[0].style.display = parameter;
}

/* 숙제 2번 방법 */ 
function asd(parameter2){
  document.getElementById('alert').style.display = 'block';
  document.getElementById('alert').innerHTML = parameter2;
}