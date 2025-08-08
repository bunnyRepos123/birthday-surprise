document.addEventListener("DOMContentLoaded", function () {
  // 🎯 Set your target birthday date and time
  const targetDate = new Date("August 09, 2025 01:00:00").getTime();

  // ⏳ Start countdown interval
  const birthdayInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // 🧮 Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 🕒 Update countdown display
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    // 🎉 When countdown hits zero
    if (distance <= 0) {
      clearInterval(birthdayInterval);

      // Hide countdown
      document.getElementById("birthday-countdown").style.display = "none";

      // Reveal main content
      const mainContent = document.getElementById("mainContent");
      mainContent.style.display = "block";

      // Trigger animation
      mainContent.classList.add("fade-in");

      // Optional: Trigger confetti
      if (typeof confetti === "function") {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }

      // Optional: Play music
      const birthdayMusic = document.getElementById("birthdayMusic");
      if (birthdayMusic) {
        birthdayMusic.play();
      }
    }
  }, 1000);
});
