const footerListHead = document.querySelectorAll(
  ".footer .footer-top .menu-list .title"
);

footerListHead.forEach((item) => {
  item.addEventListener("click", function () {
    const ul = item.nextElementSibling;
    const listHeight = ul.children.length * 28;

    ul.classList.toggle("is-active");

    if (ul.classList.contains("is-active")) {
      ul.style.height = `${listHeight + 30}px`;
      ul.style.overflow = "auto";
    } else {
      ul.style.height = 0;
      ul.style.overflow = "hidden";
    }
  });
});
