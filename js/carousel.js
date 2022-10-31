const images = [
  "url(/assets/img/hotd.webp)",
  "url(/assets/img/got.jpg)",
  "url(/assets/img/breakingbad.jpeg)",
];

/* const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right"); */
let img = document.getElementById("hero-container");
let currentPhoto = 0;

/* buttonLeft.addEventListener("click", function () {
  if (currentPhoto == 0) {
    currentPhoto = images.length - 1;
  } else {
    currentPhoto--;
  }
  img.style.backgroundImage = images[currentPhoto];
});

buttonRight.addEventListener("click", function () {
  if (currentPhoto == images.length - 1) {
    currentPhoto = 0;
  } else {
    currentPhoto++;
  }
  img.style.backgroundImage = images[currentPhoto];
}); */

function goToPreviousImg() {
  if (currentPhoto == 0) {
    currentPhoto = images.length - 1;
  } else {
    currentPhoto--;
  }
  img.style.backgroundImage = images[currentPhoto];
}

function goToNextImg() {
  if (currentPhoto == images.length - 1) {
    currentPhoto = 0;
  } else {
    currentPhoto++;
  }
  img.style.backgroundImage = images[currentPhoto];
}
