// import "./scss/main.scss";

function toggleMenu() {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu-hidden");
  btn.onclick = function () {
    if (window.innerWidth <= 768) {
      if (menu.classList.contains("unhide")) {
        menu.classList.remove("unhide");
      } else {
        menu.classList.add("unhide");
      }
    }
  };
}

function myFunction() {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
}

window.onload = function () {
  toggleMenu();
};

window.onscroll = function () {
  myFunction();
};
