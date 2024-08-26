const formEl = document.querySelector(".login-form");
function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const emailEl = formElements.email.value;
  const passwordEl = formElements.password.value;
  if (emailEl === "" || passwordEl === "") {
    return alert("All form fields must be filled in");
  }
  const data = {
    email: emailEl,
    password: passwordEl,
  };
  console.log("data:", data);
  formEl.reset();
}
formEl.addEventListener("submit", handleSubmit);
