const colorInput = document.querySelector(".view_input_color");
const colorName = document.querySelector(".view_name_color");

const body = document.querySelector("body");

const cacheColor = localStorage.getItem("color");

if (cacheColor) {
  colorInput.value = cacheColor;
}

body.style.backgroundColor = cacheColor || colorInput.value;
colorName.innerHTML = cacheColor || colorInput.value;

function onChangeColor(val) {
  localStorage.setItem("color", val);
  colorName.innerHTML = val;
  body.style.backgroundColor = val;
}
