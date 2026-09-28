const humbergerBtn = document.getElementById("hamburger-menu");
const navbar = document.querySelector(".header .navbar");
const lineTop = document.querySelector(".hamburger-btn span:nth-of-type(1)");
const lineMiddle = document.querySelector(".hamburger-btn span:nth-of-type(2)");
const lineBottom = document.querySelector(".hamburger-btn span:nth-of-type(3)");

let hamburgerIsOpen = false;

humbergerBtn.addEventListener("click", () => {
  if (!hamburgerIsOpen) {
    navbar.classList.add("active");
    lineTop.classList.add("active");
    lineMiddle.classList.add("active");
    lineBottom.classList.add("active");
    hamburgerIsOpen = true;
  } else {
    navbar.classList.remove("active");
    lineTop.classList.remove("active");
    lineMiddle.classList.remove("active");
    lineBottom.classList.remove("active");
    hamburgerIsOpen = false;
  }
});

