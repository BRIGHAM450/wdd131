// ============================================
// PRODUCTS ARRAY
// ============================================
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// ============================================
// FUNCTION: POPULATE SELECT WITH PRODUCTS
// Uses the products array to create the options
// ============================================
function populateProducts() {
  const productSelect = document.getElementById('productName');
  
  // forEach is a CALLBACK executed for each product
  products.forEach(function(product) {
    // Create option element
    const option = document.createElement('option');
    
    // Set attributes
    option.value = product.id;           // value = product id
    option.textContent = product.name;   // text = product name
    
    // Add to the select element
    productSelect.appendChild(option);
  });
  
  console.log('Products loaded:', products.length);
}

// ============================================
// FUNCTION: SET MAX DATE
// Prevents selecting future dates
// ============================================
function setMaxDate() {
  const installDateInput = document.getElementById('installDate');
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const maxDate = `${year}-${month}-${day}`;
  
  installDateInput.setAttribute('max', maxDate);
  
  console.log('Max date set to:', maxDate);
}

// ============================================
// INITIALIZATION ON PAGE LOAD
// DOMContentLoaded is a CALLBACK
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded - Initializing form...');
  
  // Populate select with products
  populateProducts();
  
  // Set max date
  setMaxDate();
  
  console.log('Form initialization complete');
});
