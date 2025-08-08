// Play music
const birthdayMusic = document.getElementById("birthdayMusic");
if (birthdayMusic) {
  birthdayMusic.play().catch(err => console.log("Music autoplay blocked:", err));
}
