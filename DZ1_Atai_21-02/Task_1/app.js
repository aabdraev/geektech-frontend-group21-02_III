const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const loginResult = document.querySelector(".loginResult");
const loginCheck = document.querySelector(".loginCheck");
const showPassword = document.querySelector("#showPassword");

const regExpEmail = /^\w+@(\w+\.)+com|ru|info.{0,25}$/;
const regExpPassword = /^(?=.*\d)(?=.*[a-z]).{4,8}$/;

loginCheck.addEventListener("click", () => {
    if (
        regExpEmail.test(emailInput.value) &&
        regExpPassword.test(passwordInput.value)
    ) {
        loginResult.innerHTML = "Correct login and password";
    } else {
        loginResult.innerText = "Check login and password";
    }
});

showPassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
