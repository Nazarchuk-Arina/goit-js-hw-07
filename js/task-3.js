const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const handleInput = (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = trimmedValue;
  }
};

inputEl.addEventListener("input", handleInput);
