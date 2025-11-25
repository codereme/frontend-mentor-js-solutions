const emailForm = document.querySelector(".form");
const emailInput = document.querySelector(".input");
const errorMessage = document.querySelector(".error-message");
const btnSubmit = document.querySelector(".button");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showError("Whoops! It looks like you forgot to add your email");
  } else if (!regexEmail.test(emailValue)) {
    showError("Please provide a valid email address");
  } else {
    showSuccess("Valid email. Submitting...");
  }
});

function showError(message) {
  /* show error message if is empty input or invalid email*/
  errorMessage.textContent = message;

  /* show red input border */
  emailInput.classList.add("error-state");
}

/* show success message and valid states for input and message using a setTimeout of 3s */
function showSuccess(message) {
  /* shows success message */
  errorMessage.textContent = message;

  /* shows valid states: add green input border and green text message */
  emailInput.classList.add("valid-state");
  errorMessage.classList.add("valid-state");

  /* remove error states: remove red input border */
  emailInput.classList.remove("error-state");

  btnSubmit.disabled = true;

  setTimeout(() => {
    emailInput.classList.remove("valid-state");
    errorMessage.classList.remove("valid-state");

    errorMessage.textContent = "";
    emailForm.reset();

    btnSubmit.disabled = false;
  }, 3000);
}
