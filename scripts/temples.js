// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Cerrar al hacer clic en un enlace
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});


// Mostrar el año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Mostrar la última fecha de modificación del documento
document.getElementById("lastModified").textContent = document.lastModified;
