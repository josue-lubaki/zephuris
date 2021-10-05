//========= Menu Show and Hidden ==============
const navMenu = document.getElementById("nav-menu"),
  navToggleBtn = document.getElementById("nav-toggle"),
  navCloseBtn = document.getElementById("nav-close");

// Voir menu
// Vérifiez si la constante existe
if (navToggleBtn) {
  navToggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Cacher le menu
// Vérifiez si la constante existe
if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
