/* 
Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
*/

const form = document.getElementById("form");
const inputEmail = document.querySelector(".input");
const btnSubmit = document.getElementById("btnSubmit");
const btnConfirmation = document.getElementById("btnConfirmation");

const cardSubscription = document.getElementById("cardSubscription");
const cardConfirmation = document.getElementById("cardConfirmation");
const emailUser = document.getElementById("emailUser");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = inputEmail.value;
  const validation = validate_email(emailValue);

  if (!validation || inputEmail.value == "") {
    form.classList.add("error-state");
  }
  if (validation) {
    emailUser.textContent = emailValue;
    form.classList.remove("error-state");
    inputEmail.value = "";

    cardConfirmation.classList.toggle("hidden");
    cardSubscription.classList.toggle("hidden");
  }
});


btnConfirmation.addEventListener("click", () => {
  cardSubscription.classList.toggle("hidden");
  cardConfirmation.classList.toggle("hidden");
});

function validate_email(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(regex)) {
    return true;
  } else {
    return false;
  }
}

