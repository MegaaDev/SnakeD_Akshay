let soundEffect = new Audio("clickMainMenu.wav");

document.querySelector(".click a").addEventListener("click", (event) => {
  if (event.target.classList.contains("click")) {
    soundEffect.play();
  }
});
