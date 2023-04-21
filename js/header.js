
/* Header negro */
function makeHeaderBlack() {
  const header = document.querySelector('header');
  const navToggle = document.getElementById('nav-toggle');
  
  if (navToggle.checked) {
    header.style.backgroundColor = 'black';
  } else {
    header.style.backgroundColor = 'transparent';
  }
}

/* Cerrar menú cuando se hace click */
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-toggle").checked = false;
    makeHeaderBlack();
  });
});