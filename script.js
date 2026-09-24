// Initialize AOS Animations
AOS.init({
  duration: 800,
  once: true
});

// Function to switch between pages smoothly
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Scroll smooth to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger animations
  AOS.refresh();
}

// Interactive Cart Counter
let cartCount = 0;
function addToCart(productName) {
  cartCount++;
  alert(`${productName} added to your cart!`);
}