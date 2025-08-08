document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("August 09, 2025 01:17:59").getTime();

  const timerEl = document.getElementById("birthday-timer");
  const mainContent = document.getElementById("mainContent");

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    if (distance <= 0) {
      clearInterval(countdown);

      // Hide countdown
      timerEl.style.display = "none";

      // Reveal main content
      mainContent.style.display = "block";
      mainContent.classList.add("fade-in");

      // Trigger confetti
      if (typeof confetti === "function") {
        confetti({
          particleCount: 1000,
          spread: 100,
          origin: { y: 0.6 }
        });
      }
    }
  }, 1000);
});
