// 🎉 Trigger confetti when the page loads
document.addEventListener("DOMContentLoaded", function () {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Optional: Repeat confetti every few seconds
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 }
    });
  }, 5000);
});

