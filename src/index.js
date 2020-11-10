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
  const nav = document.getElementById("nav");
  const logo = document.getElementById("logo");
  const src1 = "./img/logo.png";
  const src2 = "./img/logo_2.png";

  const sticky = nav.offsetTop;
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
    logo.src = src2;
  } else {
    nav.classList.remove("sticky");
    logo.src = src1;
  }
}

window.onload = function () {
  toggleMenu();
};

window.onscroll = function () {
  myFunction();
};
