function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(getRandomHexColor());

const btn = document.querySelector("button");
btn.addEventListener("click", changeBGC);

function changeBGC() {
  const color = getRandomHexColor();
  const colorName = document.querySelector(".color");
  colorName.innerHTML = color;
  document.body.style.backgroundColor = color;
}
