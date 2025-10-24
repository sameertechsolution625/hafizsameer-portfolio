// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑ Top';
backToTop.id = 'backToTop';
document.body.appendChild(backToTop);

backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.background = '#0d6efd';
backToTop.style.color = 'white';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '8px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.fontWeight = 'bold';

// Show/hide button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Scroll to top when clicked
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in animation for sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.6s ease-out';
    }
  });
});
