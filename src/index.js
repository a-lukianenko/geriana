// import "./scss/main.scss";

function toggleMenu() {
  if (window.innerWidth <= 768) {
    const btn = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu-hidden");
    btn.onclick = function () {
      if (menu.classList.contains("unhide")) {
        menu.classList.remove("unhide");
      } else {
        menu.classList.add("unhide");
      }
    };
  }
}

window.onload = function () {
  toggleMenu();
};
