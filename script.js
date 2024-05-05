// --------- 유저 이름 등록 함수 ---------
const loginForm = document.querySelector(".user form");
const loginInput = document.querySelector(".user input");
const userGreeting = document.querySelector(".hello");
const greeting = document.querySelector(".user h1");

const USERNAME_KEY = "username";

// userName 받기
const onLoginSubmit = (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
};

// userName값 출력
const savedUserName = localStorage.getItem(USERNAME_KEY);

const paintGreeting = () => {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `반갑습니다! ${username}님`;
    userGreeting.classList.remove("hidden");
};

if (savedUserName === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting();
}

// --------- 현재시간 관련 함수 ---------
const clockNow = document.querySelector(".clock h1");

const getTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clockNow.innerText = `${hours}:${min}:${sec}`;
};

getTime();
setInterval(getTime, 1000);

// ---------  랜덤으로 명언 보여주기 ---------
import quotes from "./quotes.js";

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;

// --------- 랜덤으로 배경화면 변경하기 ---------
const imgs = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "32.jpg",
    "33.jpg",
    "34.jpg",
    "35.jpg",
];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.querySelector(".wrap");
bgImg.style.backgroundImage = `url(./img/${chosenImg})`;
