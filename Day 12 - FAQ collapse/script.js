const chevrons = document.querySelectorAll(".chevron");
const answers = document.querySelectorAll(".answer");

chevrons.forEach((chevron, index) => {
  chevron.addEventListener("click", () => {
    chevron.classList.toggle("chevron-down");
    answers[index].classList.toggle("answer-show");
  });
});
