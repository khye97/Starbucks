const mobileSelect = document.querySelector("#select-form");
const desktopTabList = document.querySelectorAll(".best-menu .tab-board li");

function mobileTab() {
  const option = mobileSelect.options[mobileSelect.selectedIndex].value;
  let currentTabpanel = document.querySelector(
    ".best-menu .tab-board .tabpanel-list.is-active"
  );
  const newSelect = document.querySelector(
    `.best-menu .tab-board .tabpanel-list.${option}`
  );
  currentTabpanel.classList.remove("is-active");
  newSelect.classList.add("is-active");
}

function desktopTab(event) {
  const currentTab = document.querySelector(
    ".best-menu .tab-board li.is-active"
  );
  const newSelectTab = event.target;
  currentTab.classList.remove("is-active");
  newSelectTab.classList.add("is-active");

  const currentTabpanel = document.querySelector(
    ".best-menu .tab-board .tabpanel-list.is-active"
  );
  const newSelectTabpanel = document.querySelector(
    `.best-menu .tab-board .tabpanel-list.${newSelectTab.dataset.tab}`
  );
  currentTabpanel.classList.remove("is-active");
  newSelectTabpanel.classList.add("is-active");
}

desktopTabList.forEach((tab) => {
  tab.addEventListener("click", function (event) {
    desktopTab(event);
  });
});

mobileSelect.addEventListener("change", mobileTab);
