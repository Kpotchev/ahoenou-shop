document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#f5edd8';
      navLinks.style.padding = '16px 32px';
      navLinks.style.borderBottom = '1px solid rgba(30,92,56,0.12)';
      navLinks.style.zIndex = '99';
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.textContent = 'Message envoyé !';
      btn.style.background = '#1e5c38';
      setTimeout(() => {
        btn.textContent = 'Envoyer le message';
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

  const cards = document.querySelectorAll('.country-card, .cat-item, .why-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  }
});
