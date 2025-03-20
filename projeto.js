document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    let mobileMenu;
    
    if (mobileToggle) {
      // Create mobile menu dynamically
      mobileMenu = document.createElement('div');
      mobileMenu.className = 'mobile-menu';
      
      // Clone nav links
      const navLinks = document.querySelector('.nav-list').cloneNode(true);
      mobileMenu.appendChild(navLinks);
      
      // Add join button
      const joinBtn = document.querySelector('.nav .btn-primary').cloneNode(true);
      mobileMenu.appendChild(joinBtn);
      
      // Add to DOM
      document.body.appendChild(mobileMenu);
      
      mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
      });
      
      // Close mobile menu when clicking on a link
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          mobileToggle.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
        });
      });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Pricing toggle
    const billingToggle = document.getElementById('billing-toggle');
    if (billingToggle) {
      billingToggle.addEventListener('change', function() {
        if (this.checked) {
          document.body.classList.add('annual-billing');
          document.querySelectorAll('.toggle-label')[0].classList.remove('active');
          document.querySelectorAll('.toggle-label')[1].classList.add('active');
        } else {
          document.body.classList.remove('annual-billing');
          document.querySelectorAll('.toggle-label')[0].classList.add('active');
          document.querySelectorAll('.toggle-label')[1].classList.remove('active');
        }
      });
    }
    
    // Trainer slider navigation
    const trainerSlider = document.getElementById('trainer-slider');
    const prevTrainer = document.getElementById('prev-trainer');
    const nextTrainer = document.getElementById('next-trainer');
    
    if (trainerSlider && prevTrainer && nextTrainer) {
      const slideWidth = 300 + 24; // card width + gap
      
      prevTrainer.addEventListener('click', function() {
        trainerSlider.scrollBy({
          left: -slideWidth,
          behavior: 'smooth'
        });
      });
      
      nextTrainer.addEventListener('click', function() {
        trainerSlider.scrollBy({
          left: slideWidth,
          behavior: 'smooth'
        });
      });
    }
    
    // Scroll animation
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
      scrollDown.addEventListener('click', function(e) {
        e.preventDefault();
        const aboutSection = document.getElementById('sobre');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    
    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      });
      
      backToTop.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // Form submissions
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Normally would send data to server
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
      });
    }
    
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Normally would send data to server
        alert('Obrigado por se inscrever em nossa newsletter!');
        this.reset();
      });
    }
  });
