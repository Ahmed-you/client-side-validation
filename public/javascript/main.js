const passwordInp = document.querySelector(".password-inp");
const confirmPasswordInp = document.querySelector(".confirm_password-inp");
const formContainer = document.querySelector(".form-container");
const closedEye = document.querySelector(".closed_eye-icon");
const openedEye = document.querySelector(".opened_eye-icon");

formContainer.addEventListener("click", (e) => {
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
