
// 이벤트 처리 순서
// 1) 객체 찾기
// 2) 이벤트 생성
// 3) 객체 붙이기

// 이벤트 처리 방법
// 1) 이벤트 처리기를 등록하는 방법
// <input type = "button" onclick = "changeColor()"/>

// 2) DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정
// const btn = document.getElementById("btn"); // id
// const btn = document.querySelector("#btn"); // id -> 좀 더 자주 쓰임
// const btn = document.querySelector(".colorBox"); // class
// btn.onclick = changeColor();

// 3) addEventListener 메소드를 사용하는 방법
// const btn1 = document.getElementById("btn"); // id
// const btn1 = document.querySelector("#btn"); // id -> 좀 더 자주 쓰임
// const btn1 = document.querySelector(".colorBox"); // class
// addEventListenr("click", () => {
//     do something;
// })

document.addEventListener("DOMContentLoaded", ()=> {
    // alert("확인!")
    const boxEle = document.querySelector("#box");
    const colorBtnEle = document.querySelector(".colorBtn");
    const btnEle = document.querySelector("button");

    // 각각 Ele에 이벤트 연결
    boxEle.addEventListener("click", function(e){
        e.currentTarget.style.backgroundColor = "red";
    });
    colorBtnEle.addEventListener("click", function(e){
        e.currentTarget.style.backgroundColor = "blue";
    });
    btnEle.addEventListener("click", function(e){
        e.currentTarget.style.backgroundColor = "grey";
    });

});



















