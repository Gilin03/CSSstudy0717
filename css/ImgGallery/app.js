const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach(function (img) {
  img.addEventListener("click", function () {
    showLightbox(img.querySelector("img").src);
  });
});

function showLightbox(imgPath) {
  lightbox.querySelector("img").src = imgPath;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}

closeImgBtn.addEventListener("click", function () {
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
});
