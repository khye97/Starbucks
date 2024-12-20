const mainBannerProduct = document.querySelectorAll(
  ".product-wrapper .image-box"
);
const mainBannerTitle = document.querySelector(".title-wrapper");
const moreBtn = document.querySelector(".main-banner button");

// 모바일
if (matchMedia("screen and (max-width: 1200px)").matches) {
  let mobileLoadProduct = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  };

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  let observer = new IntersectionObserver(mobileLoadProduct, options);

  observer.observe(mainBannerTitle);
  mainBannerProduct.forEach((item) => {
    observer.observe(item);
  });
  observer.observe(moreBtn);
}

// 데스크탑
window.addEventListener("load", function () {
  mainBannerTitle.style.opacity = 1;
  loadDesktopProduct(4, 300);
  loadDesktopProduct(0, 600);
  loadDesktopProduct(3, 900);
  loadDesktopProduct(1, 1200);
  loadDesktopProduct(2, 1500);
  setTimeout(() => {
    moreBtn.style.opacity = 1;
  }, 1800);
});

function loadDesktopProduct(index, time) {
  setTimeout(() => {
    mainBannerProduct[index].style.opacity = 1;
  }, time);
}
