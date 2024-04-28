function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
createBtn.addEventListener("click", function () {
  const num = input.value;
  for (let i = 0; i < num; i++) {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = getRandomColor();
    boxesContainer.appendChild(box);
  }
  input.value = "";
});
destroyBtn.addEventListener("click", function () {
  boxesContainer.innerHTML = "";
});
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
