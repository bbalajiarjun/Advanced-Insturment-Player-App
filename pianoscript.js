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
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const blackKeys = ["2", "3", "5", "6", "7", "9", "0", "s", "d", "f", "h", "j"];

const keys = document.querySelectorAll(".key");
const whitekeys = document.querySelectorAll(".key.white");
const blackkeys = document.querySelectorAll(".key.black");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whitekeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackkeys[blackKeyIndex]);
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
