document.addEventListener("DOMContentLoaded", function () {
  let countdownTime = 10;
  const launchTimer = document.getElementById("launch-timer");
  const launchSection = document.getElementById("launch-countdown");
  const mainContent = document.getElementById("mainContent");

  const countdownInterval = setInterval(() => {
    countdownTime--;

    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    launchTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      launchTimer.textContent = "00:00";
      launchSection.style.display = "none";
      mainContent.style.display = "block";
      mainContent.style.animation = "fadeIn 2s ease-in";
    }
  }, 1000);
});
document.addEventListener("DOMContentLoaded", function () {
  const targetDate = new Date("January 15, 2026 00:00:00").getTime();

  const birthdayInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(birthdayInterval);
      document.getElementById("birthday-timer").innerHTML = "🎉 It's Sneha's Birthday!";
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
