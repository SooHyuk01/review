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
    fetch()
}