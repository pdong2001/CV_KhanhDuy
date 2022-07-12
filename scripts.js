const avtImg = document.querySelector(".avarta img");
if (avtImg) {
  avtImg.style.height = avtImg.offsetWidth;
}

window.addEventListener("resize", function (e) {
  const avtImg = document.querySelector(".avarta img");
  if (avtImg) {
    avtImg.style.height = avtImg.offsetWidth;
  }
});
