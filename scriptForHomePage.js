let bgMusic = new Audio("bgmusicMainPage.mp3");
bgMusic.play();
bgMusic.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

const rainEffect = () => {
  let dropCount = 180;
  let bg = document.querySelector(".background-container");
  console.log("worings");

  let rainCount = 0;
  while (rainCount < dropCount) {
    let drop = document.createElement("i");

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = `${0.5 + size}px`;
    drop.style.left = `${posX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;

    bg.appendChild(drop);
    rainCount++;
  }
};
rainEffect();
