document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded ✅");

  // 🎯 Set your target birthday date and time
  const targetDate = new Date("August 09, 2025 01:09:00").getTime();
  console.log("Target date set to:", new Date(targetDate));

  // ✅ Grab DOM elements
  const countdownEl = document.getElementById("birthday-countdown");
  const mainContent = document.getElementById("mainContent");

  if (!countdownEl || !mainContent) {
    console.error("❌ Missing required DOM elements. Check your HTML IDs.");
    return;
  }

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

    // 🧨 Debug log
    console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);

    // 🎉 When countdown hits zero
    if (distance <= 0) {
      clearInterval(birthdayInterval);
      console.log("🎉 Countdown complete! Revealing content...");

      // Hide countdown
      countdownEl.style.display = "none";

      // Reveal main content
      mainContent.style.display = "block";
      mainContent.classList.add("fade-in");

      // Optional: Trigger confetti
      if (typeof confetti === "function") {
        console.log("🎊 Triggering confetti...");
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 }
        });
      }

      // Optional: Play music
      const birthdayMusic = document.getElementById("birthdayMusic");
      if (birthdayMusic) {
        console.log("🎶 Playing birthday music...");
        birthdayMusic.play();
      } else {
        console.log("🎶 No music element found.");
      }
    }
  }, 1000);
});
