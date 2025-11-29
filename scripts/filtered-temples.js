// Array de templos
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Tres templos adicionales
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba Brazil",
    dedicated: "1980, October, 27",
    area: 27850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
  }
];

// Función para crear una tarjeta de templo
function createTempleCard(temple) {
  const figure = document.createElement('figure');
  
  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = "lazy"; // Lazy loading
  
  const figcaption = document.createElement('figcaption');
  
  const name = document.createElement('h3');
  name.textContent = temple.templeName;
  
  const location = document.createElement('p');
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  
  const dedicated = document.createElement('p');
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
  
  const area = document.createElement('p');
  area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;
  
  figcaption.appendChild(name);
  figcaption.appendChild(location);
  figcaption.appendChild(dedicated);
  figcaption.appendChild(area);
  
  figure.appendChild(img);
  figure.appendChild(figcaption);
  
  return figure;
}

// Función para mostrar templos en la página
function displayTemples(templeList) {
  const container = document.getElementById('temple-container');
  container.innerHTML = ''; // Limpiar contenido anterior
  
  templeList.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// Función para obtener el año de una fecha
function getYear(dateString) {
  // Formato: "1888, May, 21"
  const year = parseInt(dateString.split(',')[0]);
  return year;
}

// Funciones de filtrado
function filterOld() {
  const filtered = temples.filter(temple => getYear(temple.dedicated) < 1900);
  displayTemples(filtered);
}

function filterNew() {
  const filtered = temples.filter(temple => getYear(temple.dedicated) > 2000);
  displayTemples(filtered);
}

function filterLarge() {
  const filtered = temples.filter(temple => temple.area > 90000);
  displayTemples(filtered);
}

function filterSmall() {
  const filtered = temples.filter(temple => temple.area < 10000);
  displayTemples(filtered);
}

function showAll() {
  displayTemples(temples);
}

// Event listeners para los enlaces de navegación
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar todos los templos al cargar
  showAll();
  
  // Hamburger menu - Tu sistema actual
  const hamburger = document.getElementById('hamburger');
  const navigation = document.querySelector('.navigation');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navigation.classList.toggle('show');
      hamburger.textContent = navigation.classList.contains('show') ? '✕' : '☰';
    });
  }
  
  // Agregar event listeners a los enlaces
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remover clase active de todos los enlaces
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Agregar clase active al enlace clickeado
      link.classList.add('active');
      
      // Cerrar menú hamburguesa en móvil después de seleccionar
      if (window.innerWidth < 768) {
        navigation.classList.remove('show');
        hamburger.textContent = '☰';
      }
      
      // Filtrar según el data-filter
      const filter = link.getAttribute('data-filter');
      
      switch(filter) {
        case 'old':
          filterOld();
          break;
        case 'new':
          filterNew();
          break;
        case 'large':
          filterLarge();
          break;
        case 'small':
          filterSmall();
          break;
        case 'home':
        default:
          showAll();
          break;
      }
    });
  });
  
  // Footer - Año actual y última modificación
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});