// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('active');
      
      // Animate hamburger
      const spans = hamburger.querySelectorAll('span');
      if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
});

// Form Validation
function validateAdmissionForm() {
  const form = document.querySelector('#admission-form');
  if (!form) return true;

  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#c62828';
      input.style.boxShadow = '0 0 5px rgba(198, 40, 40, 0.3)';
      isValid = false;
    } else {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    }
  });

  // Email validation
  const email = form.querySelector('input[type="email"]');
  if (email && email.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      email.style.borderColor = '#c62828';
      email.style.boxShadow = '0 0 5px rgba(198, 40, 40, 0.3)';
      isValid = false;
    }
  }

  // Phone validation
  const phone = form.querySelector('input[type="tel"]');
  if (phone && phone.value) {
    const phoneRegex = /^[0-9\-\+\(\)\s]+$/;
    if (!phoneRegex.test(phone.value) || phone.value.replace(/\D/g, '').length < 10) {
      phone.style.borderColor = '#c62828';
      phone.style.boxShadow = '0 0 5px rgba(198, 40, 40, 0.3)';
      isValid = false;
    }
  }

  return isValid;
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Fade In Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in animation to cards on page load
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Auto-close alerts after 5 seconds
document.addEventListener('DOMContentLoaded', function () {
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => {
    setTimeout(() => {
      alert.style.transition = 'opacity 0.3s ease';
      alert.style.opacity = '0';
      setTimeout(() => {
        alert.remove();
      }, 300);
    }, 5000);
  });
});

// Add active state to navigation
document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.style.color = '#fbc02d';
      link.style.borderBottom = '2px solid #fbc02d';
      link.style.paddingBottom = '0.5rem';
    }
  });
});
