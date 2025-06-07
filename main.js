onload = () => {
  document.body.classList.remove("container");
};
  const audio = document.getElementById('myAudio');
  audio.play().catch(() => {
    console.log("Autoplay gagal, browser butuh interaksi user");
  });