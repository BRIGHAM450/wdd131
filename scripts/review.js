// ============================================
// FUNCTION: GET URL PARAMETERS
// Extracts data coming from the form
// ============================================
function getURLParameters() {
  const params = new URLSearchParams(window.location.search);
  
  const formData = {
    productName: params.get('productName') || 'Not specified',
    rating: params.get('rating') || '0',
    installDate: params.get('installDate') || 'Not specified',
    features: params.getAll('features'),
    review: params.get('review') || 'No comments',
    userName: params.get('userName') || 'Anonymous'
  };
  
  return formData;
}

// ============================================
// FUNCTION: DISPLAY REVIEW SUMMARY
// Shows data on screen
// ============================================
function displayReviewSummary(data) {
  const detailsContainer = document.getElementById('reviewDetails');
  
  // Generate stars
  const stars = '★'.repeat(parseInt(data.rating)) + '☆'.repeat(5 - parseInt(data.rating));
  
  // Format features
  const featuresText = data.features.length > 0 
    ? data.features.join(', ') 
    : 'None selected';
  
  // Format date
  const formattedDate = data.installDate !== 'Not specified' 
    ? new Date(data.installDate + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Not specified';
  
  // Build HTML
  detailsContainer.innerHTML = `
    <div class="summary-item">
      <span class="summary-label">Product:</span>
      <span class="summary-value">${data.productName}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Rating:</span>
      <span class="summary-value rating-stars">${stars}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Installation Date:</span>
      <span class="summary-value">${formattedDate}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Useful Features:</span>
      <span class="summary-value">${featuresText}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Comment:</span>
      <span class="summary-value">${data.review}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Name:</span>
      <span class="summary-value">${data.userName}</span>
    </div>
  `;
}

// ============================================
// FUNCTION: GET REVIEW COUNT FROM LOCALSTORAGE
// Reads how many reviews are saved
// ============================================
function getReviewCount() {
  const count = localStorage.getItem('reviewCount');
  return count ? parseInt(count) : 0;
}

// ============================================
// FUNCTION: SAVE REVIEW COUNT TO LOCALSTORAGE
// Saves the new review count
// ============================================
function setReviewCount(count) {
  localStorage.setItem('reviewCount', count.toString());
}

// ============================================
// FUNCTION: INCREMENT AND DISPLAY COUNTER
// This function does the main work with localStorage
// ============================================
function updateReviewCounter() {
  // 1. Get current count
  let currentCount = getReviewCount();
  
  // 2. Increment by 1
  currentCount = currentCount + 1;
  
  // 3. Save to localStorage
  setReviewCount(currentCount);
  
  // 4. Display on page
  const counterDisplay = document.getElementById('reviewCounter');
  counterDisplay.textContent = currentCount;
}

// ============================================
// INITIALIZATION ON PAGE LOAD
// DOMContentLoaded is a CALLBACK
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // 1. Get form data
  const formData = getURLParameters();
  
  // 2. Display summary
  displayReviewSummary(formData);
  
  // 3. Update counter (localStorage)
  updateReviewCounter();
});