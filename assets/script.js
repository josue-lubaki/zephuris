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

// =================================================================
// Lorsqu'on clique sur un lien du menu,
// il faut que le menu se cache automatique
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

// appeler la fonction, tout en s'assurant qu'il fonctionne pour tous les liens
navLink.forEach((n) => n.addEventListener("click", linkAction));

// =================================================================
// dark Light mode
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "uil-sun";

// Vérifier si les thèmes sont déjà sauvergarder
const selectedTheme = localStorage.getItem("Zephuris-selected-theme");
const selectedIcon = localStorage.getItem("Zephuris-selected-icon");

// Quel est le thème actuel sur l'écran ?
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-sun" : "uil-moon";

// Comparer le thème actuel et celui sauvegarder à la dernière utilisation
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activer ou desactiver manuellement le thème
themeButton.addEventListener("click", () => {
  // Changer l'icon Dark/Light
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // sauvergarder le théme choisis pas l'utilisateur
  localStorage.setItem("Zephuris-selected-theme", getCurrentTheme());
  localStorage.setItem("Zephuris-selected-icon", getCurrentIcon());
});
