const mainBannerProduct = document.querySelectorAll(
  ".main-banner .product-wrapper .image-box"
);
const mainBannerTitle = document.querySelector(".main-banner .title-wrapper");
const moreBtn = document.querySelector(".main-banner button");

function initializeIntersectionObserver() {
  console.log("함수 실행됨");

  let callCount = 0;

  // 모바일
  if (matchMedia("screen and (max-width: 1200px)").matches) {
    let mobileLoadProduct = (entries, observer) => {
      callCount++;
      console.log(`[콜백 ${callCount}회차] ----------------`);
      entries.forEach((entry, idx) => {
        console.log(`[콜백 ${callCount}회차 - ${idx}번 엔트리]`, {
          target: entry.target.className,
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          boundingClientRect: entry.boundingClientRect,
          rootBounds: entry.rootBounds,
        });
        if (entry.isIntersecting == true) {
          entry.target.style.opacity = 1;
          // 옵저버 해제 (한 번만 실행되도록)
          observer.unobserve(entry.target);
        }
      });
    };

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    let observer = new IntersectionObserver(mobileLoadProduct, options);

    observer.observe(mainBannerTitle);
    mainBannerProduct.forEach((item) => {
      observer.observe(item);
    });
    observer.observe(moreBtn);
  }
}

// 데스크탑
if (matchMedia("screen and (min-width: 1201px)").matches) {
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
}
