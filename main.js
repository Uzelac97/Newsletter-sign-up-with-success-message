const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const signUpForm = document.querySelector(".sign-up-form");
const dismissButton = document.querySelector(".dismiss-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (validateEmail(emailValue)) {
    errorMessage.style.display = "none";
    emailInput.classList.remove("invalid-email");
    signUpForm.style.display = "none";
    successMessage.classList.remove("hidden");
    document.querySelector(".confirmation-message span").textContent =
      emailValue;
  } else {
    errorMessage.style.display = "block";
    emailInput.classList.add("invalid-email");
    emailInput.value = "";
    emailInput.placeholder = "ash#loremcompany.com";
  }
});

dismissButton.addEventListener("click", function () {
  successMessage.classList.add("hidden");
  signUpForm.style.display = "block";
  emailInput.value = "";
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}
