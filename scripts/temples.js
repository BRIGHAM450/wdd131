const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// HAMBURGER MENU
const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburgerBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});


// Mostrar el año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Mostrar la última fecha de modificación del documento
document.getElementById("lastModified").textContent = document.lastModified;
