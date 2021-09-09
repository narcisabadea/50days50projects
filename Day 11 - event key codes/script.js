const press = document.querySelector(".press");
const list = document.querySelector(".event");

const keyDescription = document.querySelector(".keyDescription");
const keyCodeDescription = document.querySelector(".keyCodeDescription");
const codeDescription = document.querySelector(".codeDescription");

window.addEventListener("keydown", (e) => {
  press.style.display = "none";
  list.style.display = "flex";
  keyDescription.innerHTML = e.key == " " ? "Space" : e.key;
  
  keyCodeDescription.innerHTML = e.keyCode;
  codeDescription.innerHTML = e.code
});
