function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");

createBtn.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = document.querySelector('[type="number"]').value;

  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  const containerForBoxes = document.querySelector("#boxes");

  let side = 30;
  let boxes = "";
  for (let i = 0; i < amount; i++) {
    boxes += `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${side}px; height:${side}px"></div>`;
    side += 10;
  }

  if (boxes.length > 0) {
    containerForBoxes.insertAdjacentHTML("beforeend", boxes);
  }
  /* resetting input field */
  document.querySelector('[type="number"]').value = "";
}

const destroyBtn = document.querySelector("[data-destroy]");

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  document.querySelectorAll(".box").forEach((box) => {
    box.remove();
  });
}
