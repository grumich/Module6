const link = document.querySelector("#link");

function Handler(event) {
  event.preventDefault();
  let newtext = prompt("Ссылка изменит текст на введеный");
  link.textContent = newtext;
}

link.addEventListener("click", Handler);
