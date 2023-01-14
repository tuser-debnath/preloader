window.onload = function () {
  const preloaderArea = document.getElementById("preloader-area");
  preloaderArea.className = "page-loaded";
  setTimeout(function () {
    preloaderArea.style.display = "none";
  }, 700);
};
