/* SELECTOR : 셀렉터 실습문제 */

/*document.getElementById("ID이름").innerHTML 명령어로, 내용 변경 가능*/
document.getElementById("hello").innerHTML = "김주은 바보";

/*document.getElementsByClassName("hi")[index].innerHTML 명령어로, 내용 변경 가능*/
/*ID는 고유하지만 CALSS는 중복이 가능하기에 꼭 [index]를 적어주어야 한다.*/
document.getElementsByClassName("hi")[0].innerHTML = "메롱";

/*css를 변경할 때에는 앞에 .style."css속성"을 입력하면 된다*/
document.getElementById("hello").style.fontSize = "60px";
