/* ═══════════════════════════════════════════
   IDR — Institute of Digital Risk
   Scripts: main.js
═══════════════════════════════════════════ */

// ─── Hamburger menu toggle ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  // prevent body scroll when menu is open
  document.body.classList.toggle('menu-open', isOpen);
});

// Close mobile nav when any link is clicked
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});


// ─── Scroll-triggered fade-up animations ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


// ─── Sticky header opacity on scroll ───
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 40
    ? 'rgba(13,13,13,0.98)'
    : 'rgba(13,13,13,0.92)';
});


// ─── Contact form submission ───
const form  = document.getElementById('contactForm');
const toast = document.getElementById('toast');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();

    btn.innerHTML = `
      Register Interest
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
           stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>`;
    btn.disabled = false;

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }, 1200);
});