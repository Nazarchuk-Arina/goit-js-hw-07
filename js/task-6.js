const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("#controls input");
const boxEl = document.querySelector("#boxes");

function createBoxes(amount) {
  boxEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
  }
  boxEl.append(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function destroyBoxes() {
  boxEl.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = inputEl.value.trim();

  if (
    amount === "" ||
    isNaN(amount) ||
    Number(amount) > 0 ||
    Number(amount) <= 100
  ) {
    createBoxes(amount);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
