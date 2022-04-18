/*
// @copyright Edwin González Alandete - https://alandette.com/
// @github: @alandete
// @date Abril 18, 2022
// @description: Html, Css, Scss, Bootstrap 5  
// @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
*/

// Calcula el punto medio de la altura de la página
const scrollUnit = (document.documentElement.scrollHeight / 2); 

const headerBox     = document.querySelector("#navbar"); // ID del Header
const togglerBtn    = document.querySelector(".navbar-toggler"); // Clase del botón toggler en Navbar
const goToTopBtn    = document.querySelector("#gototop"); // ID del botón GoToTop

togglerBtn.addEventListener("click", clicTogglerBtn); // Ejecuta "clicTogglerBtn" en clic al botón toggler 

// Agrega o remueve la clase "solid" al header al dar clic en el botón para colapsar el menú de navegación
function clicTogglerBtn() {
  if (!headerBox.classList.contains("solid")) { // Sólo cuando no tiene la clase definida
    headerBox.classList.toggle("solid");
  }
}

// Al hacer scroll en la página se ejecuta la función userScroll
window.onscroll = function() {
  userScroll();
};

// Agrega o elimina la clase "solid" según la cantidad de scroll que realiza el usuario
// Muestra u oculta el botón Go To Top
function userScroll() {

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    headerBox.classList.add("solid");

    if (document.body.scrollTop > scrollUnit || document.documentElement.scrollTop > scrollUnit) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }

  } else {
    headerBox.classList.remove("solid");
  }
}

// Lleva al usuario a la parte superior de la página
goToTopBtn.addEventListener("click", goToTop);

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}