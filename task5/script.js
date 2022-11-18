const inputValue = document.querySelector("#inputVal");
const textBlock = document.querySelector("#duplicateField");
const form = document.querySelector("#form");

inputValue.addEventListener("input", Handler);

function Handler(event) {
  textBlock.textContent = inputValue.value;
}

form.addEventListener("submit", Handler1);

function Handler1(event) {
  event.preventDefault();
  console.log(inputValue.value);
  inputValue.value = "";
  textBlock.textContent = "";
}
