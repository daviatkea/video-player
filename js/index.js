const btn = document.querySelector(".video-player button");
const vid = document.querySelector(".video-player video");

function pressPlay() {
  if (vid.paused || vid.ended) {
    vid.play();
    vid.parentElement.classList.add("playing");
    vid.controls = true;
  } else {
    vid.pause();
    vid.parentElement.classList.remove("playing");
  }
}

function vidEnded() {
  if (vid.parentElement.classList.contains("playing")) {
    vid.parentElement.classList.remove("playing");
  }
  vid.currentTime = 0;
  vid.controls = false;
}

vid.addEventListener("click", pressPlay);
vid.addEventListener("ended", vidEnded);
