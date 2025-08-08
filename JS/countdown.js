document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("January 15, 2026 00:00:00").getTime();

  const birthdayInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(birthdayInterval);

      // 🎉 Reveal main content
      document.getElementById("birthday-countdown").style.display = "none";
      const mainContent = document.getElementById("mainContent");
      mainContent.style.display = "block";
      mainContent.style.animation = "fadeIn 2s ease-in";

      // 🎊 Optional: Trigger confetti
      if (typeof confetti === "function") {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }

      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);
});
