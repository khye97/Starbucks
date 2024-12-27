if (matchMedia("screen and (max-width: 1199px)").matches) {
  const btnViewMore = document.querySelector(
    ".event .contents-wrapper .btn-view-more"
  );
  const hiddenItem01 = document.querySelector(
    ".event .contents-wrapper .contents-item:nth-child(3)"
  );
  const hiddenItem02 = document.querySelector(
    ".event .contents-wrapper .contents-item:nth-child(4)"
  );

  btnViewMore.addEventListener("click", function () {
    hiddenItem01.style.display = "flex";
    hiddenItem02.style.display = "flex";
    btnViewMore.style.display = "none";
  });
}
