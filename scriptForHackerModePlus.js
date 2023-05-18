let arrayWords = [
  "DELTA",
  "PRAGYAN",
  "TRICHY",
  "NIT",
  "CODE",
  "WEBDEV",
  "FEST",
  "DESIGN",
  "INDUCT",
  "SPACE",
  "NODE",
  "CANVAS",
  "EXPRESS",
  "DEEP",
  "REACT",
  "GOLANG",
  "JQUERY",
  "MONGO",
  "APPLE",
  "ANDROID",
  "BOTTLE",
  "MOUSE",
];

let loadBool = true;
let deleteBooster = [];
let boolForBooster = false;
let boostBool = false;
let timerForBooster;
let timerForBoosterTime;
let randomWord;
let randomIndex;
let letters;
let boardSelector = document.querySelector(".game-container");
let targetSelector = document.querySelector(".sequence");
let letterX, letterY;
let started = false;
let boolTimer = true;
let velocityX = 0;
let velocityY = 0;
let seconds = 60;
let scoreSelector = document.querySelector(".scoreit .score");
let highscoreSelector = document.querySelector(".scoreit .HighScore");
let timerSelector = document.querySelector(".timer");
let gameBoxSelector = document.querySelector(".gameBox");
let gridSelector = document.querySelector(".game-container");
let resumeButtonSelector = document.querySelector(".resume");
let pauseButtonSelector = document.querySelector(".fa-pause");
let mobilePauseSelector = document.querySelector(".fa-circle-pause");
let obstotalNumber = 3;
let colorIndex;
let boolforListener = true;
let boolUp = true;
let boolDown = true;
let boolColor = -1;
let heartNumber = 1;
let heartBool = true;
let score = 0;
let headBoolean = true;
let ReloadGameNumber = 0;
let highScore = localStorage.getItem("high-score") || 0;
scoreSelector.textContent = "Score = " + String(score);
highscoreSelector.textContent = "HighScore = " + String(highScore);
let boolForBoosterMega = false;
let speedBoosterMegaX;
let speedBoosterMegaY;
let boolNow = false;
let letterSoundEffect = new Audio("cartoonBite.mp3");
let loseLifeSoundEffect = new Audio("loseLife.mp3");
let bonusSoundEffect = new Audio("bonus.mp3");
let wrongSoundEffect = new Audio("incorrect.mp3");
let bgMusic = new Audio("bgmusic-01.mp3");
let clickSoundEffect = new Audio("click.wav");
let gameoverSoundEffect = new Audio("gameover.mp3");
let r = document.querySelector(":root");
let clickSoundBool = true;
let displaySet = r.style.setProperty("--display", "none");
document.querySelector(".fa-volume-high").addEventListener("click", (event) => {
  if (event.target.classList.contains("emptyList")) {
    displaySet = r.style.setProperty("--display", "block");
    event.target.classList.remove("emptyList");
    clickSoundBool = false;
    clickSoundEffect.play();
    bgMusic.pause();
  } else if (!event.target.classList.contains("emptyList")) {
    displaySet = r.style.setProperty("--display", "none");
    event.target.classList.add("emptyList");
    clickSoundBool = true;
    clickSoundEffect.play();
    bgMusic.play();
  }
});
let startedBoolean = true;
bgMusic.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);

let arrayOfLetters = [];
let boostBoolTime = false;
let gridX = 40;
let gridY = 40;
let gridMultiplier = 15;
let targetX;
let targetY;
targetX = 1;
targetY = 1;
let RedColorBool = false;
let speed = 140;
r.style.setProperty("--speed", `${speed}ms`);
speed = Math.max(speed, 10);
let obstacleNumber = 9;
let speedBoosterX;
let speedBoosterY;

let speedBoosterTimeX;
let speedBoosterTimeY;

let speedBoostBool = false;
let speedBoostTimeBool = false;
let boolVolume = true;
let boolForBoosterTime = false;

let diagNumber = 5;
let horiNumber = 7;
let vertiNumber = 6;
let abcda;

let gameBoxSelectorForSnakes = document.querySelector(".gameBox");
let htmlSelectorForSnakes = ``;
const snakeCreator = () => {
  for (let i = 1; i <= 35; i++) {
    abcda = document.createElement(`div`);
    abcda.className = `snake${i} hideSnake`;
    document.querySelector(".gameBox").append(abcda);
  }
};
snakeCreator();
let a;
let b;
let c;
let bool1;
let bool2;
let bool3 = true;
let bool4;
let bool5;
let bool6;
let bool7 = true;
let bool8;

document.querySelector(".grid-state-20").addEventListener("click", () => {
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  bool1 = true;
  bool2 = false;
  bool3 = false;
  bool4 = false;
  bool5 = false;
  bool6 = false;
  bool7 = false;
  bool8 = false;
  diagNumber = 4;
  horiNumber = 6;
  vertiNumber = 5;
  obstotalNumber = 1;
  gridX = 20;
  gridY = 20;
  resetAllReloadNoAudio();
  clickSoundEffect.play();
  obstacleNumber = 4;
  a = r.style.setProperty(
    "--grid-template",
    "repeat(20, 1fr) / repeat(20, 1fr)"
  );
  b = r.style.setProperty("--mobile-size", "17.5px");
  c = r.style.setProperty("--main-size", "30px");
  gridMultiplier = 30;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});
document.querySelector(".grid-state-30").addEventListener("click", () => {
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  bool1 = false;
  bool2 = true;
  bool3 = false;
  bool4 = false;
  bool5 = false;
  bool6 = false;
  bool7 = false;
  bool8 = false;
  diagNumber = 5;
  horiNumber = 7;
  vertiNumber = 6;
  obstotalNumber = 2;
  gridX = 30;
  gridY = 30;
  resetAllReloadNoAudio();
  clickSoundEffect.play();
  a = r.style.setProperty(
    "--grid-template",
    "repeat(30, 1fr) / repeat(30, 1fr)"
  );
  b = r.style.setProperty("--mobile-size", "11.6666667px");
  c = r.style.setProperty("--main-size", "20px");
  gridMultiplier = 20;
  obstacleNumber = 5;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});

document.querySelector(".grid-state-40").addEventListener("click", () => {
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  bool1 = false;
  bool2 = false;
  bool3 = true;
  bool4 = false;
  bool5 = false;
  bool6 = false;
  bool7 = false;
  bool8 = false;
  diagNumber = 6;
  horiNumber = 8;
  vertiNumber = 7;
  obstotalNumber = 3;
  gridX = 40;
  gridY = 40;
  resetAllReloadNoAudio();
  clickSoundEffect.play();
  a = r.style.setProperty(
    "--grid-template",
    "repeat(40, 1fr) / repeat(40, 1fr)"
  );
  b = r.style.setProperty("--mobile-size", "8.75px");
  c = r.style.setProperty("--main-size", "15px");
  gridMultiplier = 15;
  obstacleNumber = 6;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});
document.querySelector(".grid-state-60").addEventListener("click", () => {
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  bool1 = false;
  bool2 = false;
  bool3 = false;
  bool4 = true;
  bool5 = false;
  bool6 = false;
  bool7 = false;
  bool8 = false;
  diagNumber = 7;
  horiNumber = 9;
  vertiNumber = 8;
  obstotalNumber = 5;
  gridX = 60;
  gridY = 60;
  resetAllReloadNoAudio();
  obstacleNumber = 10;
  a = r.style.setProperty(
    "--grid-template",
    "repeat(60, 1fr) / repeat(60, 1fr)"
  );
  b = r.style.setProperty("--mobile-size", "5.833333px");
  c = r.style.setProperty("--main-size", "10px");
  gridMultiplier = 10;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});

document.querySelector(".grid-state-menu-20").addEventListener("click", () => {
  bool1 = false;
  bool2 = false;
  bool3 = false;
  bool4 = false;
  bool5 = true;
  bool6 = false;
  bool7 = false;
  bool8 = false;
  // numberReverse = 3;
  // addObs();
  // removeObs();
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  numbermoveOne = 4;
  numbermoveTwo = 6;
  numbermoveThree = 5;
  numbermoveFour = 6;
  numbermoveFive = 5;
  placeObstacle1();
  placeObstacle2();
  placeObstacle3();
  placeObstacle4();
  placeObstacle5();
  obstotalNumber = 1;
  gridX = 20;
  gridY = 20;
  resetAllReloadNoAudio();
  obstacleNumber = 4;
  a = r.style.setProperty(
    "--grid-template",
    "repeat(20, 1fr) / repeat(20, 1fr)"
  );
  c = r.style.setProperty("--main-size", "30px");
  gridMultiplier = 30;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});
document.querySelector(".grid-state-menu-30").addEventListener("click", () => {
  bool1 = false;
  bool2 = false;
  bool3 = false;
  bool4 = false;
  bool5 = false;
  bool6 = true;
  bool7 = false;
  bool8 = false;
  // numberReverse = 4;
  // addObs();
  // removeObs();
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  numbermoveOne = 5;
  numbermoveTwo = 7;
  numbermoveThree = 6;
  numbermoveFour = 7;
  numbermoveFive = 6;
  placeObstacle1();
  placeObstacle2();
  placeObstacle3();
  placeObstacle4();
  placeObstacle5();
  obstotalNumber = 2;
  gridX = 30;
  gridY = 30;
  resetAllReloadNoAudio();
  obstacleNumber = 6;
  a = r.style.setProperty(
    "--grid-template",
    "repeat(30, 1fr) / repeat(30, 1fr)"
  );
  c = r.style.setProperty("--main-size", "20px");
  gridMultiplier = 20;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});

document.querySelector(".grid-state-menu-40").addEventListener("click", () => {
  bool1 = false;
  bool2 = false;
  bool3 = false;
  bool4 = false;
  bool5 = false;
  bool6 = false;
  bool7 = true;
  bool8 = false;
  // numberReverse = 5;
  // addObs();
  // removeObs();
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  numbermoveOne = 6;
  numbermoveTwo = 8;
  numbermoveThree = 7;
  numbermoveFour = 8;
  numbermoveFive = 7;

  placeObstacle1();
  placeObstacle2();
  placeObstacle3();
  placeObstacle4();
  placeObstacle5();
  obstotalNumber = 3;
  gridX = 40;
  gridY = 40;
  resetAllReloadNoAudio();
  obstacleNumber = 9;
  a = r.style.setProperty(
    "--grid-template",
    "repeat(40, 1fr) / repeat(40, 1fr)"
  );
  c = r.style.setProperty("--main-size", "15px");
  gridMultiplier = 15;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
  clickSoundEffect.play();
});
document.querySelector(".grid-state-menu-60").addEventListener("click", () => {
  bool1 = false;
  bool2 = false;
  bool3 = false;
  bool4 = false;
  bool5 = false;
  bool6 = false;
  bool7 = false;
  bool8 = true;
  // numberReverse = 0;
  // addObs();
  // removeObs();
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  numbermoveOne = 7;
  numbermoveTwo = 9;
  numbermoveThree = 8;
  numbermoveFour = 9;
  numbermoveFive = 8;
  placeObstacle1();
  placeObstacle2();
  placeObstacle3();
  placeObstacle4();
  placeObstacle5();
  obstotalNumber = 5;
  gridX = 60;
  gridY = 60;
  resetAllReloadNoAudio();
  clickSoundEffect.play();
  a = r.style.setProperty(
    "--grid-template",
    "repeat(60, 1fr) / repeat(60, 1fr)"
  );
  c = r.style.setProperty("--main-size", "10px");
  gridMultiplier = 10;
  obstacleNumber = 14;
  placeObstacles();
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clearInterval(timerr);
  startedTimer = false;
});

let velocityXofObs2v1 = 0;
let velocityYofObs2v1 = 0;
let velocityXofObs2v2 = 0;
let velocityYofObs2v2 = 0;
let portalX;
let portalY;

let booldad1 = false;
let booldad2 = false;
let booldad3 = false;
let portals = [];

const portalDrop = () => {
  portals = [];
  for (let i = 0; i < 2; i++) {
    portalX = Math.floor(Math.random() * gridX) + 1;
    portalY = Math.floor(Math.random() * gridY) + 1;

    if (
      portals
        .map((ele) => `${ele[0]},${ele[1]}`)
        .includes(`${letterY},${letterX}`) &&
      arrayOfLetters
        .map((ele) => `${ele[0]},${ele[1]}`)
        .includes(`${letterY},${letterX}`)
    ) {
      i--;
    } else {
      portals.push([portalY, portalX]);
    }
  }
  console.log(portals);
};

// const boosterTimeRandomPosition = () => {
//   for (let i = 0; i < 1; i++) {
//     speedBoosterTimeX = Math.floor(Math.random() * gridX) + 1;
//     speedBoosterTimeY = Math.floor(Math.random() * gridY) + 1;
//     if (
//       arrayOfLetters.includes([speedBoosterTimeY, speedBoosterTimeX]) &&
//       speedBoosterTimeX === speedBoosterX &&
//       speedBoosterTimeY === speedBoosterY
//     ) {
//       i--;
//     }
//   }
// };

let startedTimer = true;
document.addEventListener("keydown", (event) => {
  timerBool = true;
  if (timerBool && boolTimer) {
    timerr = setInterval(timerFunction, 1000);
  }
  boolTimer = false;

  if (
    event.key == "ArrowUp" ||
    event.key == "ArrowDown" ||
    event.key == "ArrowRight" ||
    event.key == "ArrowLeft" ||
    event.key == "w" ||
    event.key == "a" ||
    event.key == "s" ||
    event.key == "d" ||
    event.key == "W" ||
    event.key == "A" ||
    event.key == "A" ||
    event.key == "D"
  ) {
    started = true;
  }

  if (event.key == "r" || event.key == "R") {
    clearInterval(timerr);
    startedTimer = false;

    startedBoolean = false;

    clickSoundEffect.play();
    console.log(timerr);

    bgMusic.currentTime = 0;

    resetAllReloadNoAudio();
    document.querySelector(".bgBlur").classList.add("hideIt");
    document.querySelector(".threelivesover").classList.add("hideMe");
    megaObs = setInterval(MovingObstacleLoad, 200);

    bgMusic.play();
    resetAllReloadNoAudio();
    boolforListener = true;
    started = true;
  }

  if (event.key == "Escape") {
    clearInterval(megaObs);
    clearInterval(timerr);
    clickSoundEffect.play();
    document.querySelector(".bgBlur").classList.remove("hideIt");
    document.querySelector(".pauseMenu").classList.remove("hideIt");
    bgMusic.pause();
    velocityX = 0;
    velocityY = 0;
    boolforListener = false;
    started = false;
  }
  if (boolforListener) {
    if ((event.key == "ArrowUp" || event.key == "w") && velocityY !== 1) {
      startedBoolean = true;
      velocityX = 0;
      velocityY = -1;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.23;
      }
    } else if (
      (event.key == "ArrowDown" || event.key == "s") &&
      velocityY !== -1
    ) {
      startedBoolean = true;
      velocityX = 0;
      velocityY = 1;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.23;
      }
    } else if (
      (event.key == "ArrowRight" || event.key == "d") &&
      velocityX !== -1
    ) {
      startedBoolean = true;
      velocityX = 1;
      velocityY = 0;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.23;
      }
    } else if (
      (event.key == "ArrowLeft" || event.key == "a") &&
      velocityX !== 1
    ) {
      startedBoolean = true;
      velocityX = -1;
      velocityY = 0;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
      if (clickSoundBool) {
        bgMusic.play();
        bgMusic.volume = 0.23;
      }
    }
  }
});

let timerBool = false;
let timerr;

///
var gesuredZone = document.querySelector(".background-container");
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
gesuredZone.addEventListener(
  "touchstart",
  function (event) {
    bgMusic.volume = 0.23;
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    console.log(touchstartX);
    console.log("started");
    started = true;
    bgMusic.play();
  },
  false
);

gesuredZone.addEventListener(
  "touchend",
  function (event) {
    console.log("ended");

    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    console.log(touchendX);
    startedBoolean = true;
    timerBool = true;
    if (timerBool && boolTimer) {
      timerr = setInterval(timerFunction, 1000);
      console.log(timerr);
    }
    boolTimer = false;
    handleGesure();
  },
  false
);

function handleGesure() {
  console.log("function callled");

  if (boolforListener) {
    console.log("boolOn");

    if (touchendX < touchstartX && velocityX !== 1) {
      console.log("yes x");

      velocityX = -1;
      velocityY = 0;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    } else if (touchendX > touchstartX && velocityX !== -1) {
      velocityX = 1;
      velocityY = 0;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    } else if (touchendY < touchstartY && velocityY !== 1) {
      velocityX = 0;
      velocityY = -1;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    } else if (touchendY > touchstartY && velocityY !== -1) {
      velocityX = 0;
      velocityY = 1;
      if (!startedTimer) {
        timerr = setInterval(timerFunction, 1000);
      }
      startedTimer = true;
    }
  }
}
////
// Array.from(document.querySelectorAll(".arrowit")).forEach((ele) =>
//   addEventListener("click", (event) => {
//     startedBoolean = true;
//     timerBool = true;
//     if (timerBool && boolTimer) {
//       timerr = setInterval(timerFunction, 1000);
//       console.log(timerr);
//     }
//     boolTimer = false;

//     if (
//       event.target.classList.contains("clickup") ||
//       event.target.classList.contains("clickdown") ||
//       event.target.classList.contains("clickright") ||
//       event.target.classList.contains("clickleft")
//     ) {
//       started = true;
//       bgMusic.play();
//       bgMusic.volume = 0.23;
//     }
//     console.log("hi");

//     if (boolforListener) {
//       if (event.target.classList.contains("clickup") && velocityY !== 1) {
//         velocityX = 0;
//         velocityY = -1;
//         if (!startedTimer) {
//           timerr = setInterval(timerFunction, 1000);
//         }
//         startedTimer = true;
//       } else if (
//         event.target.classList.contains("clickdown") &&
//         velocityY !== -1
//       ) {
//         velocityX = 0;
//         velocityY = 1;
//         if (!startedTimer) {
//           timerr = setInterval(timerFunction, 1000);
//         }
//         startedTimer = true;
//       } else if (
//         event.target.classList.contains("clickright") &&
//         velocityX !== -1
//       ) {
//         velocityX = 1;
//         velocityY = 0;
//         if (!startedTimer) {
//           timerr = setInterval(timerFunction, 1000);
//         }
//         startedTimer = true;
//       } else if (
//         event.target.classList.contains("clickleft") &&
//         velocityX !== 1
//       ) {
//         velocityX = -1;
//         velocityY = 0;
//         if (!startedTimer) {
//           timerr = setInterval(timerFunction, 1000);
//         }
//         startedTimer = true;
//       }
//     }
//   })
// );

pauseButtonSelector.addEventListener("click", (event) => {
  clearInterval(megaObs);
  clearInterval(timerr);
  clickSoundEffect.play();
  document.querySelector(".bgBlur").classList.remove("hideIt");
  document.querySelector(".pauseMenu").classList.remove("hideIt");
  bgMusic.pause();
  velocityX = 0;
  velocityY = 0;
  boolforListener = false;
  started = false;
});

mobilePauseSelector.addEventListener("click", (event) => {
  clearInterval(timerr);
  clickSoundEffect.play();
  document.querySelector(".bgBlur").classList.remove("hideIt");
  document.querySelector(".pauseMenu").classList.remove("hideIt");
  bgMusic.pause();
  velocityX = 0;
  velocityY = 0;
  boolforListener = false;
  started = false;
});

resumeButtonSelector.addEventListener("click", (event) => {
  megaObs = setInterval(MovingObstacleLoad, 200);
  clickSoundEffect.play();
  boolforListener = true;
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");

  // started = true;
  timerr = setInterval(timerFunction, 1000);
});

const randomIt = () => {
  randomIndex = Math.floor(Math.random() * arrayWords.length);
  randomWord = arrayWords[randomIndex];
  letters = randomWord.split("");
  // arrayWords.splice(randomIndex, 1);
};

let snakeX = Math.floor(Math.random() * gridX) + 1;
let snakeY = Math.floor(Math.random() * gridY) + 1;

const changeFoodPosition = () => {
  letterX = Math.floor(Math.random() * gridX) + 1;
  letterY = Math.floor(Math.random() * gridY) + 1;
};
randomIt();
console.log(letters);
const placeObstacles = () => {
  obstacles = [];
  for (let i = 0; i < obstacleNumber; i++) {
    obstacleX = Math.floor(Math.random() * gridX) + 1;
    obstacleY = Math.floor(Math.random() * gridY) + 1;
    if (
      arrayOfLetters
        .map((ele) => `${ele[0]},${ele[1]}`)
        .includes(`${letterY},${letterX}`) &&
      snakeX === obstacleX &&
      snakeY === obstacleY &&
      portals
        .map((ele) => `${ele[0]},${ele[1]}`)
        .includes(`${letterY},${letterX}`)
    ) {
      i--;
    } else {
      obstacles.push([obstacleY, obstacleX]);
    }
  }
};

let nonClashBool = true;

const placeLetters = () => {
  nonClashBool = true;
  arrayOfLetters = [];
  for (let i = 0; i < letters.length; i++) {
    changeFoodPosition();
    if (
      letterX === snakeX &&
      letterY === snakeY &&
      arrayOfLetters
        .map((ele) => `${ele[0]},${ele[1]}`)
        .includes(`${letterY},${letterX}`) &&
      portals
        .map((ele) => `${ele[0]},${ele[1]}`)
        .includes(`${letterY},${letterX}`) &&
      obstacles
        .map((ele) => `${ele[0]},${ele[1]}`)
        .includes(`${letterY},${letterX}`)
    ) {
      i--;
    } else {
      for (let i = 0; i < obstacles.length; i++) {
        if (arrayOfLetters.includes(obstacles[i])) {
          i--;
          nonClashBool = false;
        }
      }
      if (nonClashBool) {
        arrayOfLetters.push([letterY, letterX]);
      }
    }
  }
};
let obstacles = [];
let obstacleX;
let obstacleY;

placeLetters();
let boosterArray = [];
const timerFunction = () => {
  seconds--;
  if (seconds <= 15) {
    timerSelector.style.color = "red";
  }

  if (seconds < 10 && seconds >= 0) {
    timerSelector.textContent = `0${seconds}`;
  } else if (seconds >= 10) {
    timerSelector.textContent = `${seconds}`;
  } else {
    pauseButtonSelector.style.fontSize = "0rem";
    document.querySelector(".irotatePc .fa-solid").style.fontSize = "2.7rem";
    seconds = 0;
    timerSelector.textContent = `00`;
    velocityX = 0;
    velocityY = 0;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    started = false;
    boolforListener = false;
  }

  if (seconds % 20 == 0 && seconds !== 0 && seconds !== 60) {
    speedBoosterTimeX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterTimeY = Math.floor(Math.random() * gridY) + 1;
    boosterArray.push();
    boolForBoosterTime = true;
    booldad2 = true;
    setTimeout(() => {
      boolForBoosterTime = false;
      booldad2 = false;
    }, 4000);
  }

  if (seconds % 15 == 0 && seconds !== 0 && seconds !== 60) {
    speedBoosterX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterY = Math.floor(Math.random() * gridY) + 1;
    boolForBooster = true;
    boosterArray.push();
    booldad1 = true;
    setTimeout(() => {
      boolForBooster = false;
      booldad1 = false;
    }, 8000);
  }
  if (seconds % 30 == 0 && seconds !== 0 && seconds !== 60) {
    speedBoosterMegaX = Math.floor(Math.random() * gridX) + 1;
    speedBoosterMegaY = Math.floor(Math.random() * gridY) + 1;
    boolForBoosterMega = true;
    boosterArray.push();
    booldad3 = true;
    setTimeout(() => {
      boolForBoosterMega = false;
      booldad3 = false;
    }, 7000);
  }
  if (seconds === 0) {
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(() => {
        clearInterval(megaObs);
        clearInterval(timerr);
        bgMusic.pause();
        velocityX = 0;
        velocityY = 0;
        boolforListener = false;
        started = false;
        document.querySelector(".yourscore").textContent = `Score: ${score} `;
        document.querySelector(".bgBlur").classList.remove("hideIt");
        document.querySelector(".threelivesover").classList.remove("hideMe");
        boolNow = true;
        gameoverSoundEffect.play();
      }, 600);
    } else {
      resetAll();
    }
  }
};
if (timerBool) {
  setInterval(timerFunction, 1000);
}

document.querySelector(".irotatePc").addEventListener("click", () => {
  clickSoundEffect.play();
  console.log(timerr);
  bgMusic.pause();
  bgMusic.currentTime = 0;

  resetAllReload();

  clearInterval(timerr);
  startedTimer = false;
});

document.querySelector(".restart").addEventListener("click", () => {
  megaObs = setInterval(MovingObstacleLoad, 200);
  clearInterval(timerr);
  startedTimer = false;

  startedBoolean = false;
  document.querySelector(".bgBlur").classList.add("hideIt");
  document.querySelector(".pauseMenu").classList.add("hideIt");
  clickSoundEffect.play();
  console.log(timerr);
  bgMusic.pause();
  bgMusic.currentTime = 0;

  resetAllReloadNoAudio();
});

let htmlSelector;
let boolLetter = false;
let boolLoop = false;
let arrayFollow = [[snakeY, snakeX]];
let letterKillCounter = 0;
let arrayOfLettersReversed = [...arrayOfLetters].reverse();
let index = 0;

let timerForAbitily;

boolForBooster = false;

let gridSize;

let initialX = r.style.setProperty("--initialX", `15px`);
let initialY = r.style.setProperty("--initialY", `300px`);
// r.style.setProperty("--finalX", `15px`);
// r.style.setProperty("--finalY", `15px`);
const resetLetters = () => {
  RedColorBool = false;
  boolColor = -1;
  gameBoxSelector.classList.add("animationAddGreen");
  setTimeout(() => {
    gameBoxSelector.classList.remove("animationAddGreen");
  }, 1000);
  timerSelector.style.color = "rgb(18, 236, 2)";
  setTimeout(() => {
    timerSelector.style.color = "white";
  }, 1000);
  index = 0;
  speed += 10;
  speed = Math.max(speed, 10);
  r.style.setProperty("--speed", `${speed}ms`);
  randomIt();
  placeLetters();
  targetValueChanger();
  targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
};
let testNumber = 0;
let boolSet = true;
portalDrop();
placeObstacles();
// movingObstacle1();
let d;
let velocityXofObs1 = 0;
let velocityYofObs1 = 0;

const gameLoad = () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    if (bool1) {
      gridMultiplier = 17.5;
    } else if (bool2) {
      gridMultiplier = 11.6666667;
    } else if (bool3) {
      gridMultiplier = 8.75;
    } else if (bool4) {
      gridMultiplier = 5.83333333;
    }
  } else {
    if (bool5) {
      gridMultiplier = 30;
    } else if (bool6) {
      gridMultiplier = 20;
    } else if (bool7) {
      gridMultiplier = 15;
    } else if (bool8) {
      gridMultiplier = 10;
    }
  }

  snakeX += velocityX;
  snakeY += velocityY;
  htmlSelector = ``;

  if (boolForBooster) {
    htmlSelector += `<div style = "grid-area: ${speedBoosterY}/${speedBoosterX}"><div class="booster"></div></div>`;
  }

  if (boolForBoosterTime) {
    htmlSelector += `<div style = "grid-area: ${speedBoosterTimeY}/${speedBoosterTimeX}"><div class="boosterTime"></div></div>`;
  }

  if (boolForBoosterMega) {
    htmlSelector += `<div style = "grid-area: ${speedBoosterMegaY}/${speedBoosterMegaX}"><div class="boosterMega"></div></div>`;
  }

  for (let i = 0; i < portals.length; i++) {
    htmlSelector += `<div class = "portal" style = "grid-area: ${portals[i][0]}/${portals[i][1]}"></div>`;
  }

  if (snakeX === portals[0][1] && snakeY === portals[0][0]) {
    document
      .querySelector(".headsnake")
      .parentElement.removeChild(document.querySelector(".headsnake"));
    headBoolean = false;

    // for (let i = 1; i < arrayFollow.length - 1; i++) {
    //   document
    //     .querySelector(`.snake${i}`)
    //     .parentElement.removeChild(document.querySelector(`.snake${i}`));
    // }
    for (let i = 1; i <= arrayFollow.length; i++) {
      document.querySelector(`.snake${i}`).style.transition = "none";
    }

    console.log("i=0");

    snakeX = portals[1][1];
    snakeY = portals[1][0];
    abcda = document.createElement(`div`);
    abcda.className = `headsnake`;
    document.querySelector(".gameBox").append(abcda);
    setTimeout(() => {
      for (let i = 1; i <= 35; i++) {
        document.querySelector(
          `.snake${i}`
        ).style.transition = ` all var(--speed) linear`;
      }
      // for (let i = 1; i < arrayFollow.length; i++) {
      //   abcda = document.createElement(`div`);
      //   abcda.className = `snake${i} hideSnake`;
      //   document.querySelector(".gameBox").append(abcda);
      // }
    }, arrayFollow.length * speed);
  } else if (snakeX === portals[1][1] && snakeY === portals[1][0]) {
    document
      .querySelector(".headsnake")
      .parentElement.removeChild(document.querySelector(".headsnake"));
    headBoolean = false;
    // for (let i = 1; i < arrayFollow.length - 1; i++) {
    //   document
    //     .querySelector(`.snake${i}`)
    //     .parentElement.removeChild(document.querySelector(`.snake${i}`));
    // }
    for (let i = 1; i <= arrayFollow.length; i++) {
      document.querySelector(`.snake${i}`).style.transition = "none";
    }

    //   console.log("i=1");

    snakeX = portals[0][1];
    snakeY = portals[0][0];
    abcda = document.createElement(`div`);
    abcda.className = `headsnake`;
    document.querySelector(".gameBox").append(abcda);
    setTimeout(() => {
      for (let i = 1; i <= 35; i++) {
        document.querySelector(
          `.snake${i}`
        ).style.transition = `all var(--speed) linear`;
      }
      // for (let i = 1; i < arrayFollow.length; i++) {
      //   abcda = document.createElement(`div`);
      //   abcda.className = `snake${i} hideSnake`;
      //   document.querySelector(".gameBox").append(abcda);
      // }
    }, arrayFollow.length * speed);
  }

  for (let i = 0; i < obstacles.length; i++) {
    htmlSelector += `<div class = "obstacle" style = "grid-area: ${obstacles[i][0]}/${obstacles[i][1]}"></div>`;
  }
  for (let i = 0; i < obstacles.length; i++) {
    if (snakeX === obstacles[i][1] && snakeY === obstacles[i][0]) {
      velocityX = 0;
      velocityY = 0;
      seconds = 0;
      boolforListener = false;
      started = false;
      if (highScore < score) {
        highScore = score;
        localStorage.setItem("high-score", highScore);
      }
      highscoreSelector.textContent = "HighScore = " + String(highScore);
      document
        .querySelector(`.heart${heartNumber}`)

        .classList.add("animateHeart");

      setTimeout(() => {
        document
          .querySelector(`.heart${heartNumber - 1}`)

          .classList.add("displayHidden");
      }, 600);

      if (heartBool) {
        heartBool = false;
        heartNumber++;
      }
      ReloadGameNumber++;
      if (ReloadGameNumber === 3) {
        setTimeout(() => {
          clearInterval(megaObs);
          clearInterval(timerr);
          bgMusic.pause();
          velocityX = 0;
          velocityY = 0;
          boolforListener = false;
          started = false;
          document.querySelector(".yourscore").textContent = `Score: ${score} `;
          document.querySelector(".bgBlur").classList.remove("hideIt");
          document.querySelector(".threelivesover").classList.remove("hideMe");
          boolNow = true;
          gameoverSoundEffect.play();
        }, 600);
      } else {
        resetAll();
      }
    }
  }

  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (arrayOfLetters[i][0] === snakeY && arrayOfLetters[i][1] === snakeX) {
      if (
        document.querySelector(`.letter${i}`).textContent === letters[index]
      ) {
        letterSoundEffect.play();
        RedColorBool = false;
        boolColor++;
        console.log(boolColor);

        index++;
        console.log(letters[letters.length - 1 - i]);
        score += 20;
        colorIndex = index;
        scoreSelector.textContent = "Score = " + String(score);
        console.log(score);
        console.log(document.querySelector(`.letter${i}`).textContent);
        targetValueChanger();
        letterKillCounter += 1;
        console.log(letterKillCounter);

        arrayFollow.push([snakeY, snakeX]);
        arrayOfLetters[i] = "";
        console.log(arrayOfLetters);
        speed -= 5;

        speed = Math.max(speed, 20);
        d = r.style.setProperty("--speed", `${speed}ms`);
        clearInterval(timerTarget);
        startTimer();
      } else {
        wrongSoundEffect.play();
        document.querySelector(`.lettersIt${i}`).classList.add("redLetter");
        RedColorBool = true;
        gameBoxSelector.classList.add("animationAdd");
        setTimeout(() => {
          gameBoxSelector.classList.remove("animationAdd");
        }, 1000);
        timerSelector.style.color = " rgb(153, 0, 0)";
        setTimeout(() => {
          timerSelector.style.color = "white";
        }, 800);
        arrayFollow.unshift([snakeY, snakeX]);
        arrayFollow.unshift([snakeY, snakeX]);
        targetValueChanger();
        seconds -= 4;
        speed = Math.max(speed, 10);
        score -= 10;
        speed -= 7;
        d = r.style.setProperty("--speed", `${speed}ms`);
        scoreSelector.textContent = "Score = " + String(score);
      }
    }
  }
  if (letterKillCounter === arrayOfLetters.length) {
    console.log("goodd");

    resetLetters();
    letterKillCounter = 0;
    seconds += 5;
  }

  for (let i = 0; i < arrayOfLetters.length; i++) {
    if (!arrayOfLetters[i] == "") {
      htmlSelector += `<div class = "letter letter${i}" style="grid-area:${arrayOfLetters[i][0]}/${arrayOfLetters[i][1]}"><div class = "letterBlock" >${letters[i]}</div></div>`;
    }
  }

  if (snakeX < 1) {
    loadBool = false;
    velocityX = 0;
    velocityY = 0;
    seconds = 0;
    started = false;
    boolforListener = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    if (document.querySelector(`.heart${heartNumber}`).classList) {
      document
        .querySelector(`.heart${heartNumber}`)

        .classList.add("animateHeart");
    }

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(() => {
        clearInterval(megaObs);
        clearInterval(timerr);
        bgMusic.pause();
        velocityX = 0;
        velocityY = 0;
        boolforListener = false;
        started = false;
        document.querySelector(".yourscore").textContent = `Score: ${score} `;
        document.querySelector(".bgBlur").classList.remove("hideIt");
        document.querySelector(".threelivesover").classList.remove("hideMe");
        boolNow = true;
        gameoverSoundEffect.play();
      }, 600);
    } else {
      resetAll();
    }

    startedBoolean = false;
  } else if (snakeX > gridX) {
    velocityX = 0;
    velocityY = 0;

    seconds = 0;
    boolforListener = false;
    started = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    if (document.querySelector(`.heart${heartNumber}`).classList) {
      document
        .querySelector(`.heart${heartNumber}`)

        .classList.add("animateHeart");
    }

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(() => {
        clearInterval(megaObs);
        clearInterval(timerr);
        bgMusic.pause();
        velocityX = 0;
        velocityY = 0;
        boolforListener = false;
        started = false;
        document.querySelector(".yourscore").textContent = `Score: ${score} `;
        document.querySelector(".bgBlur").classList.remove("hideIt");
        document.querySelector(".threelivesover").classList.remove("hideMe");
        boolNow = true;
        gameoverSoundEffect.play();
      }, 600);
    } else {
      resetAll();
    }

    startedBoolean = false;
  } else if (snakeY < 1) {
    velocityX = 0;
    velocityY = 0;
    seconds = 0;
    boolforListener = false;
    started = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(() => {
        clearInterval(megaObs);
        clearInterval(timerr);
        bgMusic.pause();
        velocityX = 0;
        velocityY = 0;
        boolforListener = false;
        started = false;
        document.querySelector(".yourscore").textContent = `Score: ${score} `;
        document.querySelector(".bgBlur").classList.remove("hideIt");
        document.querySelector(".threelivesover").classList.remove("hideMe");
        boolNow = true;
        gameoverSoundEffect.play();
      }, 600);
    } else {
      resetAll();
    }

    startedBoolean = false;
  } else if (snakeY > gridY) {
    velocityX = 0;
    velocityY = 0;

    seconds = 0;
    boolforListener = false;
    started = false;
    if (highScore < score) {
      highScore = score;
      localStorage.setItem("high-score", highScore);
    }
    highscoreSelector.textContent = "HighScore = " + String(highScore);
    document
      .querySelector(`.heart${heartNumber}`)

      .classList.add("animateHeart");

    setTimeout(() => {
      document
        .querySelector(`.heart${heartNumber - 1}`)

        .classList.add("displayHidden");
    }, 600);

    if (heartBool) {
      heartBool = false;
      heartNumber++;
    }
    ReloadGameNumber++;
    if (ReloadGameNumber === 3) {
      setTimeout(() => {
        clearInterval(megaObs);
        clearInterval(timerr);
        bgMusic.pause();
        velocityX = 0;
        velocityY = 0;
        boolforListener = false;
        started = false;
        document.querySelector(".yourscore").textContent = `Score: ${score} `;
        document.querySelector(".bgBlur").classList.remove("hideIt");
        document.querySelector(".threelivesover").classList.remove("hideMe");
        boolNow = true;
        gameoverSoundEffect.play();
      }, 600);
    } else {
      resetAll();
    }

    startedBoolean = false;
  } else {
    localStorage.setItem("high-score", highScore);
  }

  if (started) {
    for (let i = arrayFollow.length - 1; i > 0; i--) {
      arrayFollow[i] = arrayFollow[i - 1];
    }
    arrayFollow[0] = [snakeY, snakeX];
  }

  for (let i = 0; i <= arrayFollow.length - 1; i++) {
    if (i === 0) {
      e = r.style.setProperty(
        "--initialX",
        `${(arrayFollow[i][1] - 1) * gridMultiplier}px`
      );
      f = r.style.setProperty(
        "--initialY",
        `${(arrayFollow[i][0] - 1) * gridMultiplier}px`
      );
    } else if (i !== 0 && startedBoolean) {
      if (
        document.querySelector(`.snake${i}`).classList.contains("hideSnake")
      ) {
        document.querySelector(`.snake${i}`).classList.remove("hideSnake");
      }

      document.querySelector(`.snake${i}`).style.top = `${
        (arrayFollow[i][0] - 1) * gridMultiplier
      }px`;
      document.querySelector(`.snake${i}`).style.left = `${
        (arrayFollow[i][1] - 1) * gridMultiplier
      }px`;
      boardSelector.innerHTML = htmlSelector;
    }
  }

  if (
    arrayFollow[0][1] === speedBoosterX &&
    arrayFollow[0][0] === speedBoosterY &&
    booldad1
  ) {
    console.log("cool");
    speed -= 10;
    speed = Math.max(speed, 10);
    r.style.setProperty("--speed", `${speed}ms`);
    clearInterval(timerTarget);
    startTimer();
    console.log(speed);
    boolForBooster = false;
    booldad1 = false;
    bonusSoundEffect.play();
  }

  if (
    arrayFollow[0][1] === speedBoosterTimeX &&
    arrayFollow[0][0] === speedBoosterTimeY &&
    booldad2
  ) {
    console.log("cool");
    seconds += 10;
    speed += 10;
    speed = Math.max(speed, 10);
    r.style.setProperty("--speed", `${speed}ms`);
    clearInterval(timerTarget);
    startTimer();
    boolForBoosterTime = false;
    booldad2 = false;
    bonusSoundEffect.play();
  }

  if (
    arrayFollow[0][1] === speedBoosterMegaX &&
    arrayFollow[0][0] === speedBoosterMegaY &&
    booldad3
  ) {
    bonusSoundEffect.play();
    if (arrayFollow.length >= 15) {
      for (let i = arrayFollow.length - 8; i < arrayFollow.length; i++) {
        document.querySelector(`.snake${i}`).classList.add("hideSnake");
      }
      deleteBooster = arrayFollow.splice(arrayFollow.length - 8, 7);
    } else if (arrayFollow.length >= 10 && arrayFollow.length < 15) {
      for (let i = arrayFollow.length - 6; i < arrayFollow.length; i++) {
        document.querySelector(`.snake${i}`).classList.add("hideSnake");
      }
      deleteBooster = arrayFollow.splice(arrayFollow.length - 6, 5);
    }
    if (arrayFollow.length >= 8 && arrayOfLetters.length < 10) {
      for (let i = arrayFollow.length - 5; i < arrayFollow.length; i++) {
        document.querySelector(`.snake${i}`).classList.add("hideSnake");
      }
      deleteBooster = arrayFollow.splice(arrayFollow.length - 5, 4);
    } else if (arrayFollow.length < 8 && arrayFollow.length >= 5) {
      for (let i = arrayFollow.length - 4; i < arrayFollow.length; i++) {
        document.querySelector(`.snake${i}`).classList.add("hideSnake");
      }
      deleteBooster = arrayFollow.splice(arrayFollow.length - 4, 3);
    } else if (arrayOfLetters.length >= 2 && arrayOfLetters.length < 5) {
      for (let i = arrayFollow.length - 2; i < arrayFollow.length; i++) {
        document.querySelector(`.snake${i}`).classList.add("hideSnake");
      }
      deleteBooster = arrayFollow.splice(arrayFollow.length - 2, 1);
    }

    booldad3 = false;
    boolForBoosterMega = false;
  }

  for (let i = 3; i < arrayFollow.length; i++) {
    if (
      i !== 0 &&
      arrayFollow[0][0] === arrayFollow[i][0] &&
      arrayFollow[0][1] === arrayFollow[i][1]
    ) {
      console.log(arrayFollow[i]);
      console.log(arrayFollow);

      velocityX = 0;
      velocityY = 0;

      seconds = 0;
      boolforListener = false;
      started = false;
      if (highScore < score) {
        highScore = score;
        localStorage.setItem("high-score", highScore);
      }
      highscoreSelector.textContent = "HighScore = " + String(highScore);
      document
        .querySelector(`.heart${heartNumber}`)
        .classList.add("animateHeart");

      setTimeout(() => {
        document
          .querySelector(`.heart${heartNumber - 1}`)

          .classList.add("displayHidden");
      }, 600);

      if (heartBool) {
        heartBool = false;
        heartNumber++;
      }
      ReloadGameNumber++;
      if (ReloadGameNumber === 3) {
        setTimeout(() => {
          clearInterval(megaObs);
          clearInterval(timerr);
          bgMusic.pause();
          velocityX = 0;
          velocityY = 0;
          boolforListener = false;
          started = false;
          document.querySelector(".yourscore").textContent = `Score: ${score} `;
          document.querySelector(".bgBlur").classList.remove("hideIt");
          document.querySelector(".threelivesover").classList.remove("hideMe");
          boolNow = true;
          gameoverSoundEffect.play();
        }, 600);
      } else {
        resetAll();
      }
    }
  }

  boardSelector.innerHTML = htmlSelector;
};

targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
const resetAll = () => {
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  placeObstacle1();
  placeObstacle2();
  placeObstacle3();
  for (let i = 1; i <= 35; i++) {
    if (!document.querySelector(`.snake${i}`).classList.contains("hidesnake")) {
      document.querySelector(`.snake${i}`).classList.add("hideSnake");
    }

    document.querySelector(`.snake${i}`).style.top = "none";
    document.querySelector(`.snake${i}`).style.left = "none";
  }
  letterKillCounter = 0;

  loseLifeSoundEffect.play();
  boolforListener = false;
  setTimeout(() => {
    boolforListener = true;
  }, 600);
  document;
  heartBool = true;
  portalDrop();
  timerSelector.style.color = "white";
  index = 0;

  speed = 140;
  // speed = Math.max(speed, 10);
  r.style.setProperty("--speed", `140ms`);

  clearInterval(timerTarget);
  startTimer();
  snakeX = Math.floor(Math.random() * gridX) + 1;
  snakeY = Math.floor(Math.random() * gridY) + 1;
  velocityX = 0;
  velocityY = 0;
  arrayFollow = [[snakeY, snakeX]];
  started = false;

  seconds = 61;
  randomIt();

  boolColor = -1;

  RedColorBool = false;
  targetValueChanger();
  placeObstacles();
  timerFunction();

  targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
  haveBorder = 0;
  scoreSelector.textContent = "Score = " + String(score);
  placeLetters();
};

const resetAllReload = () => {
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  placeObstacle1();
  placeObstacle2();
  placeObstacle3();
  for (let i = 1; i <= 35; i++) {
    if (!document.querySelector(`.snake${i}`).classList.contains("hidesnake")) {
      document.querySelector(`.snake${i}`).classList.add("hideSnake");
    }

    document.querySelector(`.snake${i}`).style.top = "none";
    document.querySelector(`.snake${i}`).style.left = "none";
  }

  loseLifeSoundEffect.play();
  ReloadGameNumber = 0;
  boolforListener = false;
  setTimeout(() => {
    boolforListener = true;
  }, 600);
  document
    .querySelector(`.heart${1}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${1}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${2}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${2}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${3}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${3}`)

    .classList.remove("animateHeart");
  heartNumber = 1;
  heartBool = true;
  letterKillCounter = 0;
  pauseButtonSelector.style.fontSize = "3.5rem";
  document.querySelector(".irotatePc .fa-solid").style.fontSize = "0rem";

  timerSelector.style.color = "white";
  index = 0;
  boolColor = -1;
  RedColorBool = false;
  speed = 140;
  // speed = Math.max(speed, 10);
  r.style.setProperty("--speed", `140ms`);

  clearInterval(timerTarget);
  startTimer();
  snakeX = Math.floor(Math.random() * gridX) + 1;
  snakeY = Math.floor(Math.random() * gridY) + 1;
  velocityX = 0;
  velocityY = 0;
  arrayFollow = [[snakeY, snakeX]];
  started = false;
  score = 0;
  seconds = 61;
  randomIt();

  boolColor = -1;
  targetValueChanger();
  portalDrop();
  timerFunction();
  placeObstacles();
  targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
  haveBorder = 0;
  scoreSelector.textContent = "Score = " + String(score);
  placeLetters();
};

const resetAllReloadNoAudio = () => {
  numbermove1 = 0;
  numbermove2 = 0;
  numbermove3 = 0;
  numbermove4 = 0;
  numbermove5 = 0;
  booland1 = true;
  booland2 = true;
  booland3 = true;
  booland4 = true;
  booland5 = true;
  placeObstacle1();
  placeObstacle2();
  placeObstacle3();
  for (let i = 1; i <= 35; i++) {
    if (!document.querySelector(`.snake${i}`).classList.contains("hidesnake")) {
      document.querySelector(`.snake${i}`).classList.add("hideSnake");
    }

    document.querySelector(`.snake${i}`).style.top = "none";
    document.querySelector(`.snake${i}`).style.left = "none";
  }
  letterKillCounter = 0;
  ReloadGameNumber = 0;
  boolforListener = false;
  setTimeout(() => {
    boolforListener = true;
  }, 600);
  document
    .querySelector(`.heart${1}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${1}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${2}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${2}`)

    .classList.remove("animateHeart");
  document
    .querySelector(`.heart${3}`)

    .classList.remove("displayHidden");

  document
    .querySelector(`.heart${3}`)

    .classList.remove("animateHeart");
  heartNumber = 1;
  heartBool = true;

  pauseButtonSelector.style.fontSize = "3.5rem";
  document.querySelector(".irotatePc .fa-solid").style.fontSize = "0rem";

  timerSelector.style.color = "white";
  index = 0;
  boolColor = -1;
  RedColorBool = false;
  speed = 140;
  // speed = Math.max(speed, 10);
  r.style.setProperty("--speed", `140ms`);
  snakeX = Math.floor(Math.random() * gridX) + 1;
  snakeY = Math.floor(Math.random() * gridY) + 1;
  clearInterval(timerTarget);
  startTimer();

  velocityX = 0;
  velocityY = 0;
  arrayFollow = [[snakeY, snakeX]];
  started = false;
  score = 0;
  seconds = 61;
  randomIt();
  boolColor = -1;
  targetValueChanger();
  portalDrop();
  timerFunction();
  placeObstacles();
  targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
  targetSelector.style.gridTemplateRows = `repeat(1,50px)`;
  haveBorder = 0;
  scoreSelector.textContent = "Score = " + String(score);
  placeLetters();
};
let targetHtmlSelector = ``;
let timerTarget;
const startTimer = () => {
  timerTarget = setInterval(gameLoad, speed);
};
startTimer();
const targetValueChanger = () => {
  targetHtmlSelector = ``;
  targetSelector.innerHTML = targetHtmlSelector;

  for (let i = 0; i < letters.length; i++) {
    if (i <= boolColor) {
      targetHtmlSelector += `<div class="targetLetter lettersIt${i}" style="grid-area:${targetY}/${
        targetX + i
      };color:rgb(26, 147, 112) "><div class = "letterBlock seqLetter" >${
        letters[i]
      }</div></div>`;
    } else if (RedColorBool) {
      targetHtmlSelector += `<div class="targetLetter lettersIt${i}" style="grid-area:${targetY}/${
        targetX + i
      };color:red"><div class = "letterBlock seqLetter" >${
        letters[i]
      }</div></div>`;
      RedColorBool = false;
    } else {
      targetHtmlSelector += `<div class="targetLetter lettersIt${i}" style="grid-area:${targetY}/${
        targetX + i
      };color:white"><div class = "letterBlock seqLetter" >${
        letters[i]
      }</div></div>`;
    }

    targetSelector.innerHTML += targetHtmlSelector;
  }
};
targetValueChanger();

let obstacle1X;
let obstacle1Y;

let obstacle2X = 20;
let obstacle2Y = 20;

let obstacle3X = 25;
let obstacle3Y = 25;

let obstacle4X = 30;
let obstacle4Y = 30;

let obstacle5X = 35;
let obstacle5Y = 35;
console.log(obstacles);

let numbermoveOne = 8;

let numbermoveTwo = 6;

let numbermoveThree = 7;
let numbermoveFour = 6;
let numbermoveFive = 7;
let boolagain = false;
const placeObstacle1 = () => {
  for (let i = 0; i < 1; i++) {
    obstacle1X = Math.max(
      Math.floor(Math.random() * (gridX - numbermoveOne)) + 1,
      1
    );
    obstacle1Y = Math.floor(Math.random() * gridY) + 1;

    for (let j = 1; j <= numbermoveOne; j++) {
      if (obstacles.includes([obstacle1Y, obstacle1X + numbermoveOne])) {
        i--;
        boolagain = true;
        break;
      }
    }
    if (!boolagain) {
      for (let j = 1; j <= numbermoveOne; j++) {
        if (
          snakeX >= obstacle1X &&
          snakeX <= obstacle1X + numbermoveOne &&
          snakeY === obstacle1Y
        ) {
          i--;

          break;
        }
      }
    }
  }

  boolagain = false;
};
placeObstacle1();
const placeObstacle2 = () => {
  for (let i = 0; i < 1; i++) {
    obstacle2X = Math.floor(Math.random() * gridX + 1);
    obstacle2Y = Math.max(
      Math.floor(Math.random() * gridY - numbermoveTwo) + 1,
      1
    );

    for (let j = 1; j <= numbermoveTwo; j++) {
      if (obstacles.includes([obstacle2Y + numbermoveTwo, obstacle2X])) {
        i--;
        boolagain = true;
        break;
      }
    }
    if (!boolagain) {
      for (let j = 1; j <= numbermoveTwo; j++) {
        if (
          snakeX === obstacle2X &&
          snakeY >= obstacle2Y &&
          snakeY <= obstacle2Y + numbermoveTwo
        ) {
          i--;

          break;
        }
      }
    }
  }

  boolagain = false;
};
placeObstacle2();
const placeObstacle3 = () => {
  for (let i = 0; i < 1; i++) {
    obstacle3X = Math.max(
      Math.floor(Math.random() * (gridX - numbermoveThree)) + 1,
      1
    );
    obstacle3Y = Math.floor(Math.random() * gridY) + 1;
    for (let j = 1; j <= numbermoveThree; j++) {
      if (obstacles.includes([obstacle3Y, obstacle3X + numbermoveThree])) {
        i--;
        boolagain = true;
        break;
      }
    }
    if (!boolagain) {
      for (let j = 1; j <= numbermoveThree; j++) {
        if (
          snakeX >= obstacle3X &&
          snakeX <= obstacle3X + numbermoveThree &&
          snakeY === obstacle3Y
        ) {
          i--;

          break;
        }
      }
    }
  }

  boolagain = false;
};
const placeObstacle4 = () => {
  for (let i = 0; i < 1; i++) {
    obstacle4X = Math.max(
      Math.floor(Math.random() * (gridX - numbermoveFour)) + 1,
      1
    );
    obstacle3Y = Math.floor(Math.random() * gridY) + 1;
    for (let j = 1; j <= numbermoveFour; j++) {
      if (obstacles.includes([obstacle4Y, obstacle4X + numbermoveFour])) {
        i--;
        boolagain = true;
        break;
      }
    }
    if (!boolagain) {
      for (let j = 1; j <= numbermoveFour; j++) {
        if (snakeX === obstacle4X + numbermoveFour && snakeY === obstacle4Y) {
          i--;

          break;
        }
      }
    }
  }

  boolagain = false;
};

const placeObstacle5 = () => {
  for (let i = 0; i < 1; i++) {
    obstacle5X = Math.floor(Math.random() * gridX + 1);
    obstacle5Y = Math.max(
      Math.floor(Math.random() * gridY - numbermoveFive) + 1,
      1
    );

    for (let j = 1; j <= numbermoveFive; j++) {
      if (obstacles.includes([obstacle5Y + numbermoveFive, obstacle5X])) {
        i--;
        boolagain = true;
        break;
      }
    }
    if (!boolagain) {
      for (let j = 1; j <= numbermoveFive; j++) {
        if (snakeX === obstacle5X && snakeY === obstacle5Y + numbermoveFive) {
          i--;

          break;
        }
      }
    }
  }

  boolagain = false;
};

placeObstacle3();
placeObstacle4();
placeObstacle5();
booland1 = true;
booland2 = true;
booland3 = true;
booland4 = true;
booland5 = true;

let vel_obstacle1X = 0;
let vel_obstacle1Y = 0;
let vel_obstacle2X = 0;
let vel_obstacle2Y = 0;
let vel_obstacle3X = 0;
let vel_obstacle3Y = 0;
let vel_obstacle4X = 0;
let vel_obstacle4Y = 0;
let vel_obstacle5X = 0;
let vel_obstacle5Y = 0;

let numbermove1 = 0;
let numbermove2 = 0;
let numbermove3 = 0;
let numbermove4 = 0;
let numbermove5 = 0;
r.style.setProperty("--finalX", `${(obstacle1X - 1) * gridMultiplier}px`);
r.style.setProperty("--finalY", `${(obstacle1Y - 1) * gridMultiplier}px`);

r.style.setProperty("--finalX1", `${(obstacle2X - 1) * gridMultiplier}px`);
r.style.setProperty("--finalY1", `${(obstacle2Y - 1) * gridMultiplier}px`);

r.style.setProperty("--finalX2", `${(obstacle3X - 1) * gridMultiplier}px`);
r.style.setProperty("--finalY2", `${(obstacle3Y - 1) * gridMultiplier}px`);

r.style.setProperty("--finalX3", `${(obstacle4X - 1) * gridMultiplier}px`);
r.style.setProperty("--finalY3", `${(obstacle4Y - 1) * gridMultiplier}px`);

r.style.setProperty("--finalX4", `${(obstacle5X - 1) * gridMultiplier}px`);
r.style.setProperty("--finalY4", `${(obstacle5Y - 1) * gridMultiplier}px`);

const createObs = () => {
  for (let i = 1; i < 4; i++) {
    let bcda = document.createElement(`div`);
    bcda.className = `obstacles${i}`;
    document.querySelector(".gameBox").append(bcda);
  }
};

createObs();
numberReverse = 5;
const removeObs = () => {
  if (numberReverse > 0) {
    for (let i = numberReverse; i <= 5; i++) {
      document.querySelector(`.obstacles${i}`).style.display = "none";
    }
  }
};
const addObs = () => {
  if (numberReverse > 0) {
    for (let i = 1; i <= 5; i++) {
      document.querySelector(`.obstacles${i}`).style.display = "block";
    }
  }
};

const MovingObstacleLoad = () => {
  for (let i = 1; i < 4; i++) {
    if (i === 1 && booland1) {
      obstacle1X += vel_obstacle1X;
      obstacle1Y += vel_obstacle1Y;
      numbermove1++;
      if (numbermove1 < numbermoveOne && numbermove1 > 0) {
        vel_obstacle1X = 1;

        // numbermove+=1
      } else if (numbermove1 === numbermoveOne) {
        numbermove1 = -numbermoveOne;
      } else {
        vel_obstacle1X = -1;
      }

      r.style.setProperty("--finalX", `${(obstacle1X - 1) * gridMultiplier}px`);
      r.style.setProperty("--finalY", `${(obstacle1Y - 1) * gridMultiplier}px`);
    } else if (i === 2 && booland2) {
      obstacle2X += vel_obstacle2X;
      obstacle2Y += vel_obstacle2Y;
      numbermove2++;
      if (numbermove2 < numbermoveTwo && numbermove2 > 0) {
        vel_obstacle2Y = 1;

        // numbermove+=1
      } else if (numbermove2 === numbermoveTwo) {
        numbermove2 = -numbermoveTwo;
      } else {
        vel_obstacle2Y = -1;
      }

      r.style.setProperty(
        "--finalX1",
        `${(obstacle2X - 1) * gridMultiplier}px`
      );
      r.style.setProperty(
        "--finalY1",
        `${(obstacle2Y - 1) * gridMultiplier}px`
      );
    } else if (i === 3 && booland3) {
      obstacle3X += vel_obstacle3X;
      obstacle3Y += vel_obstacle3Y;
      numbermove3++;
      if (numbermove3 < numbermoveThree && numbermove3 > 0) {
        vel_obstacle3X = 1;

        // numbermove+=1
      } else if (numbermove3 === numbermoveThree) {
        numbermove3 = -numbermoveThree;
      } else {
        vel_obstacle3X = -1;
      }

      r.style.setProperty(
        "--finalX2",
        `${(obstacle3X - 1) * gridMultiplier}px`
      );
      r.style.setProperty(
        "--finalY2",
        `${(obstacle3Y - 1) * gridMultiplier}px`
      );
    } else if (i === 4 && booland4) {
      obstacle4X += vel_obstacle4X;
      obstacle4Y += vel_obstacle4Y;
      numbermove4++;
      if (numbermove4 < numbermoveFour && numbermove4 > 0) {
        vel_obstacle4X = 1;

        // numbermove+=1
      } else if (numbermove4 === numbermoveFour) {
        numbermove4 = -numbermoveFour;
      } else {
        vel_obstacle4X = -1;
      }

      r.style.setProperty(
        "--finalX3",
        `${(obstacle4X - 1) * gridMultiplier}px`
      );
      r.style.setProperty(
        "--finalY3",
        `${(obstacle4Y - 1) * gridMultiplier}px`
      );
    } else if (i === 5 && booland5) {
      obstacle5X += vel_obstacle5X;
      obstacle5Y += vel_obstacle5Y;
      numbermove5++;
      if (numbermove5 < numbermoveFive && numbermove5 > 0) {
        vel_obstacle5Y = 1;

        // numbermove+=1
      } else if (numbermove5 === numbermoveFive) {
        numbermove5 = -numbermoveFive;
      } else {
        vel_obstacle5Y = -1;
      }

      r.style.setProperty(
        "--finalX4",
        `${(obstacle5X - 1) * gridMultiplier}px`
      );
      r.style.setProperty(
        "--finalY4",
        `${(obstacle5Y - 1) * gridMultiplier}px`
      );
    }
  }

  for (let i = 0; i < arrayFollow.length; i++) {
    if (
      (arrayFollow[i][1] <= obstacle1X + 1 &&
        arrayFollow[i][1] >= obstacle1X - 1 &&
        arrayFollow[i][0] === obstacle1Y) ||
      (arrayFollow[i][1] <= obstacle3X + 1 &&
        arrayFollow[i][1] >= obstacle3X - 1 &&
        arrayFollow[i][0] === obstacle3Y)
    ) {
      velocityX = 0;
      velocityY = 0;
      seconds = 0;
      boolforListener = false;
      started = false;
      if (highScore < score) {
        highScore = score;
        localStorage.setItem("high-score", highScore);
      }
      highscoreSelector.textContent = "HighScore = " + String(highScore);
      document
        .querySelector(`.heart${heartNumber}`)

        .classList.add("animateHeart");

      setTimeout(() => {
        document
          .querySelector(`.heart${heartNumber - 1}`)

          .classList.add("displayHidden");
      }, 600);

      if (heartBool) {
        heartBool = false;
        heartNumber++;
      }
      ReloadGameNumber++;
      if (ReloadGameNumber === 3) {
        setTimeout(() => {
          clearInterval(megaObs);
          clearInterval(timerr);
          bgMusic.pause();
          velocityX = 0;
          velocityY = 0;
          boolforListener = false;
          started = false;
          document.querySelector(".yourscore").textContent = `Score: ${score} `;
          document.querySelector(".bgBlur").classList.remove("hideIt");
          document.querySelector(".threelivesover").classList.remove("hideMe");
          boolNow = true;
          gameoverSoundEffect.play();
        }, 600);
      } else {
        resetAll();
      }
    } else if (
      arrayFollow[i][0] <= obstacle2Y + 1 &&
      arrayFollow[i][0] >= obstacle2Y - 1 &&
      arrayFollow[i][1] === obstacle2X
    ) {
      velocityX = 0;
      velocityY = 0;
      seconds = 0;
      boolforListener = false;
      started = false;
      if (highScore < score) {
        highScore = score;
        localStorage.setItem("high-score", highScore);
      }
      highscoreSelector.textContent = "HighScore = " + String(highScore);
      document
        .querySelector(`.heart${heartNumber}`)

        .classList.add("animateHeart");

      setTimeout(() => {
        document
          .querySelector(`.heart${heartNumber - 1}`)

          .classList.add("displayHidden");
      }, 600);

      if (heartBool) {
        heartBool = false;
        heartNumber++;
      }
      ReloadGameNumber++;
      if (ReloadGameNumber === 3) {
        setTimeout(() => {
          clearInterval(megaObs);
          clearInterval(timerr);
          bgMusic.pause();
          velocityX = 0;
          velocityY = 0;
          boolforListener = false;
          started = false;
          document.querySelector(".yourscore").textContent = `Score: ${score} `;
          document.querySelector(".bgBlur").classList.remove("hideIt");
          document.querySelector(".threelivesover").classList.remove("hideMe");
          boolNow = true;
          gameoverSoundEffect.play();
        }, 600);
      } else {
        resetAll();
      }
    }
  }
};
let saveBool = true;
let megaObs = setInterval(MovingObstacleLoad, 200);
let localStorageObject;
document.querySelector(".save").addEventListener("click", (event) => {
  console.log(event.target.classList);

  console.log("clickedmeee");

  localStorageObject = {
    // displaySet: displaySet,
    // a: a,
    // b: b,
    // c: c,
    // d: d,
    // initialX,
    // initialY,
    // e: e,
    // f: f,
    boolNow: boolNow,
    numbermove1: numbermove1,
    numbermove2: numbermove2,
    numbermove3: numbermove3,
    deleteBooster: deleteBooster,
    boolForBooster: boolForBooster,
    timerForBooster: timerForBooster,
    timerForBoosterTime: timerForBoosterTime,
    randomWord: randomWord,
    randomIndex: randomIndex,
    letters: letters,
    letterX: letterX,
    letterY: letterY,
    started: started,
    boolTimer: boolTimer,
    velocityX: velocityX,
    velocityY: velocityY,
    seconds: seconds,
    obstotalNumber: obstotalNumber,
    colorIndex: colorIndex,
    boolforListener: boolforListener,
    boolUp: boolUp,
    boolDown: boolDown,
    boolColor: boolColor,
    heartNumber: heartNumber,
    headBoolean: headBoolean,
    ReloadGameNumber: ReloadGameNumber,
    highScore: highScore,
    boolForBoosterMega: boolForBoosterMega,
    speedBoosterMegaX: speedBoosterMegaX,
    speedBoosterMegaY: speedBoosterMegaY,
    r: document.querySelector(":root"),
    clickSoundBool: clickSoundBool,
    startedBoolean: startedBoolean,
    arrayOfLetters: arrayOfLetters,
    boostBoolTime: boostBoolTime,
    gridX: gridX,
    gridY: gridY,
    gridMultiplier: gridMultiplier,
    targetX: targetX,
    targetY: targetY,
    RedColorBool: RedColorBool,
    speed: speed,
    obstacleNumber: obstacleNumber,
    speedBoosterX: speedBoosterX,
    speedBoosterY: speedBoosterY,
    speedBoosterTimeX: speedBoosterTimeX,
    speedBoosterTimeY: speedBoosterTimeY,
    speedBoostBool: speedBoostBool,
    speedBoostTimeBool: speedBoostTimeBool,
    boolVolume: boolVolume,
    boolForBoosterTime: boolForBoosterTime,
    diagNumber: diagNumber,
    horiNumber: horiNumber,
    vertiNumber: vertiNumber,
    abcda: abcda,

    portalX: portalX,
    portalY: portalY,
    portals: portals,
    startedTimer: startedTimer,
    timerBool: timerBool,
    timerr: timerr,
    snakeX: snakeX,
    snakeY: snakeY,
    nonClashBool: nonClashBool,
    obstacles: obstacles,
    obstacleX: obstacleX,
    obstacleY: obstacleY,
    htmlSelector: htmlSelector,
    boolLetter: boolLetter,
    boolLoop: boolLoop,
    arrayFollow: arrayFollow,
    letterKillCounter: letterKillCounter,
    arrayOfLettersReversed: arrayOfLettersReversed,
    index: index,
    timerForAbitily: timerForAbitily,
    boolForBooster: boolForBooster,
    gridSize: gridSize,
    testNumber: testNumber,
    boolSet: boolSet,
    velocityXofObs1: velocityXofObs1,
    velocityYofObs1: velocityYofObs1,
    targetHtmlSelector: targetHtmlSelector,

    obstacle1X: obstacle1X,
    obstacle1Y: obstacle1Y,
    obstacle2X: obstacle2X,
    obstacle2Y: obstacle2Y,
    obstacle3X: obstacle3X,
    obstacle3Y: obstacle3Y,

    boolagain: boolagain,
    vel_obstacle1X: vel_obstacle1X,
    vel_obstacle1Y: vel_obstacle1Y,
    vel_obstacle2X: vel_obstacle2X,
    vel_obstacle2Y: vel_obstacle2Y,
    vel_obstacle3X: vel_obstacle3X,
    vel_obstacle3Y: vel_obstacle3Y,
    numbermove1: numbermove1,
    numbermove2: numbermove2,
    numbermove3: numbermove3,
  };
  localStorage.setItem("save-state", JSON.stringify(localStorageObject));
});

document.querySelector(".load").addEventListener("click", () => {
  loadState();
});

let GameSafe;
const loadState = () => {
  GameSafe = JSON.parse(localStorage.getItem("save-state"));
  if (GameSafe) {
    console.log("working");

    boolNow = GameSafe.boolNow;
    numbermove1 = GameSafe.numbermove1;
    numbermove2 = GameSafe.numbermove2;
    numbermove3 = GameSafe.numbermove3;
    deleteBooster = GameSafe.deleteBooster;
    boolForBooster = GameSafe.boolForBooster;
    timerForBooster = GameSafe.timerForBooster;
    timerForBoosterTime = GameSafe.timerForBoosterTime;
    randomWord = GameSafe.randomWord;
    randomIndex = GameSafe.randomIndex;
    letters = GameSafe.letters;
    letterX = GameSafe.letterX;
    letterY = GameSafe.letterY;
    started = GameSafe.started;
    boolTimer = GameSafe.boolTimer;
    velocityX = GameSafe.velocityX;
    velocityY = GameSafe.velocityY;
    seconds = GameSafe.seconds;
    obstotalNumber = GameSafe.obstotalNumber;
    colorIndex = GameSafe.colorIndex;
    boolforListener = GameSafe.boolforListener;
    boolUp = GameSafe.boolUp;
    boolDown = GameSafe.boolDown;
    boolColor = GameSafe.boolColor;
    heartNumber = GameSafe.heartNumber;
    headBoolean = GameSafe.headBoolean;
    ReloadGameNumber = GameSafe.ReloadGameNumber;
    highScore = GameSafe.highScore;
    boolForBoosterMega = GameSafe.boolForBoosterMega;
    speedBoosterMegaX = GameSafe.speedBoosterMegaX;
    speedBoosterMegaY = GameSafe.speedBoosterMegaY;
    // r = GameSafe.r;
    clickSoundBool = GameSafe.clickSoundBool;
    startedBoolean = GameSafe.startedBoolean;
    arrayOfLetters = GameSafe.arrayOfLetters;
    boostBoolTime = GameSafe.boostBoolTime;
    gridX = GameSafe.gridX;
    gridY = GameSafe.gridY;
    gridMultiplier = GameSafe.gridMultiplier;
    targetX = GameSafe.targetX;
    targetY = GameSafe.targetY;
    RedColorBool = GameSafe.RedColorBool;
    speed = GameSafe.speed;
    obstacleNumber = GameSafe.obstacleNumber;
    speedBoosterX = GameSafe.speedBoosterX;
    speedBoosterY = GameSafe.speedBoosterY;
    speedBoosterTimeX = GameSafe.speedBoosterTimeX;
    speedBoosterTimeY = GameSafe.speedBoosterTimeY;
    speedBoostBool = GameSafe.speedBoostBool;
    speedBoostTimeBool = GameSafe.speedBoostTimeBool;
    boolVolume = GameSafe.boolVolume;
    boolForBoosterTime = GameSafe.boolForBoosterTime;
    diagNumber = GameSafe.diagNumber;
    horiNumber = GameSafe.horiNumber;
    vertiNumber = GameSafe.vertiNumber;
    abcda = GameSafe.abcda;

    portalX = GameSafe.portalX;
    portalY = GameSafe.portalY;
    portals = GameSafe.portals;
    startedTimer = GameSafe.startedTimer;
    timerBool = GameSafe.timerBool;
    timerr = GameSafe.timerr;
    snakeX = GameSafe.snakeX;
    snakeY = GameSafe.snakeY;
    nonClashBool = GameSafe.nonClashBool;
    obstacles = GameSafe.obstacles;
    obstacleX = GameSafe.obstacleX;
    obstacleY = GameSafe.obstacleY;
    htmlSelector = GameSafe.htmlSelector;
    boolLetter = GameSafe.boolLetter;
    boolLoop = GameSafe.boolLoop;
    arrayFollow = GameSafe.arrayFollow;
    letterKillCounter = GameSafe.letterKillCounter;
    arrayOfLettersReversed = GameSafe.arrayOfLettersReversed;
    index = GameSafe.index;
    timerForAbitily = GameSafe.timerForAbitily;
    boolForBooster = GameSafe.boolForBooster;
    gridSize = GameSafe.gridSize;
    testNumber = GameSafe.testNumber;
    boolSet = GameSafe.boolSet;
    velocityXofObs1 = GameSafe.velocityXofObs1;
    velocityYofObs1 = GameSafe.velocityYofObs1;
    targetHtmlSelector = GameSafe.targetHtmlSelecto;

    obstacle1X = GameSafe.obstacle1X;
    obstacle1Y = GameSafe.obstacle1Y;
    obstacle2X = GameSafe.obstacle2X;
    obstacle2Y = GameSafe.obstacle2Y;
    obstacle3X = GameSafe.obstacle3X;
    obstacle3Y = GameSafe.obstacle3Y;

    boolagain = GameSafe.boolagain;
    vel_obstacle1X = GameSafe.vel_obstacle1X;
    vel_obstacle1Y = GameSafe.vel_obstacle1Y;
    vel_obstacle2X = GameSafe.vel_obstacle2X;
    vel_obstacle2Y = GameSafe.vel_obstacle2Y;
    vel_obstacle3X = GameSafe.vel_obstacle3X;
    vel_obstacle3Y = GameSafe.vel_obstacle3Y;
    numbermove1 = GameSafe.numbermove1;
    numbermove2 = GameSafe.numbermove2;
    numbermove3 = GameSafe.numbermove3;
    if (heartNumber === 1) {
      console.log("continue");
      if (
        document
          .querySelector(`.heart1`)

          .classList.contains("displayHidden")
      ) {
        document
          .querySelector(`.heart1`)

          .classList.remove("displayHidden");
      }
      if (
        document
          .querySelector(`.heart2`)

          .classList.contains("displayHidden")
      ) {
        document
          .querySelector(`.heart2`)

          .classList.remove("displayHidden");
      }

      if (
        document
          .querySelector(`.heart3`)

          .classList.contains("displayHidden")
      ) {
        document
          .querySelector(`.heart3`)

          .classList.remove("displayHidden");
      }
    } else if (heartNumber === 2) {
      document
        .querySelector(`.heart1`)

        .classList.add("displayHidden");
      if (
        document
          .querySelector(`.heart2`)

          .classList.contains("displayHidden")
      ) {
        document
          .querySelector(`.heart2`)

          .classList.remove("displayHidden");
      }
    } else if (heartNumber === 3) {
      document
        .querySelector(`.heart1`)

        .classList.add("displayHidden");
      document
        .querySelector(`.heart2`)

        .classList.add("displayHidden");
    }
    targetSelector.style.gridTemplateColumns = `repeat(${letters.length},50px)`;
    targetSelector.style.gridTemplateRows = `repeat(1,50px)`;

    timerFunction();

    targetValueChanger();
  }
};
