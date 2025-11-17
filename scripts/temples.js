const hamburger = document.getElementById("hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
    hamburger.textContent = navList.classList.contains("show") ? "✖" : "☰";
});

// Mostrar el año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Mostrar la última fecha de modificación del documento
document.getElementById("lastModified").textContent = document.lastModified;
