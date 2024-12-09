"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };

//  데이터를 서버에게 전송해주는 메소드 fetch()    
//  fetch()는 서버로 요청을 보내고 Promise를 반환해.
//  res.json()은 응답 데이터를 JSON으로 파싱하는 비동기 작업이기 때문에 또 다른 Promise를 반환해.
//  then()을 사용해서 그 결과를 처리할 수 있어.
    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생")); // Error: 로그인 중 에러 발생
        console.error("로그인 중 에러 발생"); // 로그인 중 에러 발생
    });
}