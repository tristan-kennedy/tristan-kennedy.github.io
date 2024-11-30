const dynamicText = document.querySelector(".dynamic-text");
const phrases = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[i];
  const currentText = currentPhrase.slice(0, j);

  dynamicText.textContent = currentText;

  if (!isDeleting && j < currentPhrase.length) {
    j++;
    setTimeout(type, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    i = isDeleting ? i : (i + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

type();
