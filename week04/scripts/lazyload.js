// Obtener la fecha de última modificación del documento
function displayLastModified() {
    const lastModified = document.lastModified;
    const element = document.getElementById('lastModified');
    
    if (element) {
        element.textContent = lastModified;
    }
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    displayLastModified();
    
    // Opcional: Agregar un mensaje en consola para verificar el lazy loading
    console.log('Página cargada. Observa la pestaña Network para ver el lazy loading en acción.');
    
    // Opcional: Contador de imágenes cargadas
    const images = document.querySelectorAll('img[loading="lazy"]');
    let loadedCount = 0;
    
    images.forEach((img, index) => {
        img.addEventListener('load', function() {
            loadedCount++;
            console.log(`Imagen ${index + 1} cargada. Total cargadas: ${loadedCount}/${images.length}`);
        });
    });
});