const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".header__menu");

hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})