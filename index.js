const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const navMenu = document.querySelector(".links");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "unset";
  navMenu.classList.add("active");
})


closeMenu.addEventListener("click", () => {
  openMenu.style.display = "unset";
  closeMenu.style.display = "none";
  navMenu.classList.remove("active");
})