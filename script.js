const textElement = document.getElementById('text');

const text = [
  { content: 'A person with\na sense of direction .', color: "white", fontSize: "50px" }
];

textElement.innerHTML = '';

const delays = [200, 100, 300, 100, 500, 50];
let charIndex = 0;
let partIndex = 0;

function typeText() {
  if (partIndex < text.length) {
    const span = document.createElement('span');
    span.innerText = text[partIndex].content.charAt(charIndex);
    span.style.color = text[partIndex].color;
    span.style.fontSize = text[partIndex].fontSize;
    textElement.appendChild(span);

    charIndex++;

    if (charIndex < text[partIndex].content.length) {
      setTimeout(typeText, delays[charIndex % delays.length]);
    } else {
      partIndex++;
      charIndex = 0;

      if (partIndex < text.length) {
        setTimeout(typeText, delays[charIndex % delays.length]);
      }
    }
  }
}

typeText();