const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

function handleNavigationOpen() {
  container.classList.add("show-nav");
}

function handleNavigationClose() {
  container.classList.remove("show-nav");
}

open.addEventListener("click", handleNavigationOpen);
close.addEventListener("click", handleNavigationClose);
