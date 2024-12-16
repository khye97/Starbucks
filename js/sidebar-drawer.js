const sidebarBtnHead = document.querySelectorAll(".sidebar .btn-head");
const sidebarBtnDetail = document.querySelectorAll(
  ".sidebar .contents-list button"
);

sidebarBtnHead.forEach(function (item) {
  toggleHeadAccordion(item);
});

function toggleHeadAccordion(item) {
  item.addEventListener("click", function () {
    const drawerMenu = item.parentNode;
    const contentWrapper = drawerMenu.lastElementChild;
    const itemHeight = contentWrapper.children.length * 55;

    drawerMenu.classList.toggle("is-active");

    if (drawerMenu.classList.contains("is-active")) {
      contentWrapper.style.height = `${itemHeight}px`;
      contentWrapper.style.overflow = "auto";
    } else {
      contentWrapper.style.height = 0;
      contentWrapper.style.overflow = "hidden";
    }
  });
}

function toggleDetailAccordion(item) {
  item.addEventListener("click", function () {
    const detailList = item.nextElementSibling; // detail-list -> is-active가 붙는 부분
    const iconChevron = item.firstElementChild; // 화살표
    const contentWrapper = item.parentElement.parentElement; // contents-wrapper
    let contentWrapperHeight = parseInt(
      window.getComputedStyle(contentWrapper).height
    );
    const itemHeight = Array.from(detailList.children).length * 30;

    detailList.classList.toggle("is-active");

    if (detailList.classList.contains("is-active")) {
      iconChevron.style.transform = "rotate(-180deg)";
      detailList.style.height = `${itemHeight + 32}px`;
      // 32는 detailList에 적용된 padding 값
      contentWrapper.style.height = `${
        itemHeight + contentWrapperHeight + 32
      }px`;
      detailList.style.overflow = "auto";
    } else {
      iconChevron.style.transform = "rotate(0deg)";
      detailList.style.height = 0;
      contentWrapper.style.height = `${
        contentWrapperHeight - itemHeight - 32
      }px`;
      contentWrapper.style.overflow = "hidden";
    }
  });
}

sidebarBtnDetail.forEach(function (item) {
  toggleDetailAccordion(item);
});
