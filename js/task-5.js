const changeColorButton = document.querySelector(".change-color");
const bodyBg = document.querySelector("body");
// console.log(changeColorButton);
const fnlog = () => {
  const randomColor = getRandomHexColor();
  bodyBg.style.backgroundColor = randomColor;
  const colorSpan = document.querySelector(".color");

  colorSpan.textContent = randomColor;
};
changeColorButton.addEventListener("click", fnlog);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
