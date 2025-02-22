const formContainer = document.querySelector(".form-container");
const closedEye = document.querySelector(".closed_eye-icon");
const openedEye = document.querySelector(".opened_eye-icon");
const singInForm = document.querySelector(".sing_in-form");
const confirmPasswordInp = singInForm.passwordInpCheck;
const passwordInp = singInForm.passwordInp;
const emailInp = singInForm.emailInp;

const errorMsg = document.createElement("div");
errorMsg.classList.add("error_msg-style");

singInForm.addEventListener("click", (e) => {
  if (e.target.closest(".closed_eye-icon")) {
    passwordInp.type = "text";
    confirmPasswordInp.type = "text";
    closedEye.classList.add("hide");
    openedEye.classList.remove("hide");
  } else if (e.target.closest(".opened_eye-icon")) {
    passwordInp.type = "password";
    confirmPasswordInp.type = "password";
    closedEye.classList.remove("hide");
    openedEye.classList.add("hide");
  }
});

emailInp.addEventListener("blur", (e) => {
  if (!emailInp.value.includes("@") && emailInp.value.length > 0) {
    emailInp.classList.add("errorStyle");
    errorMsg.innerHTML = "Please Include an '@' in your Email";
    errorMsg.style.top = "260px";
    emailInp.after(errorMsg);
  }
});
emailInp.addEventListener("focus", (e) => {
  emailInp.classList.remove("errorStyle");
  document.querySelector(".error_msg-style")?.remove();
});

passwordInp.addEventListener("focus", (e) => {
  passwordInp.classList.remove("errorStyle");
  document.querySelector(".error_msg-style")?.remove();
});

confirmPasswordInp.addEventListener("blur", (e) => {
  if (confirmPasswordInp.value !== passwordInp.value) {
    confirmPasswordInp.classList.add("errorStyle");
    errorMsg.innerHTML = "Your Password Does Not Match";
    errorMsg.style.top = "560px";
    errorMsg.style.left = "50px";

    confirmPasswordInp.after(errorMsg);
  }
});
confirmPasswordInp.addEventListener("focus", (e) => {
  confirmPasswordInp.classList.remove("errorStyle");
  document.querySelector(".error_msg-style")?.remove();
});

singInForm.addEventListener("submit", (e) => {
  if (singInForm.contains(errorMsg)) {
    e.preventDefault();
  }
  if (emailInp.value.length == 0) {
    e.preventDefault();
    emailInp.classList.add("errorStyle");
    errorMsg.innerHTML = "Email Required!";
    errorMsg.style.top = "260px";
    emailInp.after(errorMsg);
  } else if (passwordInp.value.length == 0) {
    e.preventDefault();
    passwordInp.classList.add("errorStyle");
    errorMsg.innerHTML = "Password Required!";
    errorMsg.style.top = "120px";
    errorMsg.style.left = "5px";
    passwordInp.after(errorMsg);
  } else {
    e.preventDefault();
    singInForm.style.height = "400px";
    singInForm.innerHTML =
      "<h1 style=' position:relative; top:180px;' class='form-title'>Wellcom To Site</h1>";
  }
});
