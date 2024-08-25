const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("#controls input");
const boxEl = document.querySelector("#boxes");

function createBoxes(amount) {
  boxEl.innerHTML = "";
  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxEl.append(box);
  }
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
  const amount = inputEl.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
