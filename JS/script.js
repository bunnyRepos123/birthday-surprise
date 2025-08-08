<script>
  function revealSnehaSurprise() {
    document.getElementById("sneha-surprise").style.display = "block";
  }
</script>

  <!-- Falling hearts animation -->
  <script>
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.innerText = '💖';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 500);
  </script>
