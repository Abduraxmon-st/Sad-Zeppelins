const menu = document.querySelector(".menu")
const navbar = document.querySelector(".navbar")
const closeNav = document.querySelector(".close-nav")
const closeNavAll = document.querySelector(".close-nav-all")

menu.addEventListener("click", () => {
   navbar.style.transform = "translate(0%)";
   closeNavAll.style.display = "block";
   setTimeout(() => {
      closeNavAll.style.opacity = "1";
   }, "100")
})
closeNav.addEventListener("click", () => {
   navbar.style.transform = "translate(100%)";
   closeNavAll.style.opacity = "0";
   setTimeout(() => {
      closeNavAll.style.display = "none";
   }, "300")
})
closeNavAll.addEventListener("click", () => {
   navbar.style.transform = "translate(100%)";
   closeNavAll.style.opacity = "0";
   setTimeout(() => {
      closeNavAll.style.display = "none";
   }, "300")
})
