const whiteKeys = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
];

const keys = document.querySelectorAll(".key");
const whitekeys = document.querySelectorAll(".key.white");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whitekeys[whiteKeyIndex]);
});

function playNote(key) {
  const audio = document.querySelector(`audio[src="${key.dataset.src}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
  audio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
