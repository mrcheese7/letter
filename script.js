const messages = [
  "You make my world brighter than the Sun 🔆",
  "You make my heart beat faster than the Speed of Light ",
  "Your laughter is my favorite melody.",
  "You are the love of my life.",
  "In your eyes, I find my home.",
];

function openLetter() {
  document.getElementById("letterModal").style.display = "block";
  removeFloatingMessages();
}

function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
  generateFloatingMessages();
}

function generateFloatingMessages() {
  const numberOfMessages = 5;
  const container = document.body;

  for (let i = 0; i < numberOfMessages; i++) {
    const message = document.createElement("div");
    // const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomMessage = messages[i];
    message.textContent = randomMessage;
    message.classList.add("random-message");

    let randomX, randomY;

    do {
      randomX = Math.random() * window.innerWidth;
      randomY = Math.random() * window.innerHeight;
    } while (checkCollision(randomX, randomY));

    message.style.left = `${randomX}px`;
    message.style.top = `${randomY}px`;

    container.appendChild(message);
  }
}

function checkCollision(x, y) {
  const messages = document.querySelectorAll(".random-message");
  for (const message of messages) {
    const rect = message.getBoundingClientRect();
    if (x < rect.right && x > rect.left && y < rect.bottom && y > rect.top) {
      return true; // Collision detected
    }
  }
  return false; // No collision
}

function removeFloatingMessages() {
  const messages = document.querySelectorAll(".random-message");
  messages.forEach((message) => message.remove());
}

generateFloatingMessages();

document.getElementById("openLetterBtn").addEventListener("click", openLetter);
