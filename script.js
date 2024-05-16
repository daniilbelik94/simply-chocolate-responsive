document.addEventListener('DOMContentLoaded', function() {
  const headerBurger = document.querySelector('.header__burger');
  const mobMenuExitBtn = document.querySelector('.mob-menu__exit-btn');
  const mobMenu = document.querySelector('.mob-menu');
  const orderButtonHero = document.querySelector('.button__hero');
  const orderButtonPreFooter = document.querySelector('.button__pre-footer');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.callback__modal-overlay');
  const callbackCloseButton = document.querySelector('.callback__close-button');
  const sendButton = document.querySelector('.callback__form-submit-button');
  const form = document.querySelector('.call-back-form');
  const navLinks = document.querySelectorAll('nav a');
  const scrollDownLink = document.querySelector('.scroll-down');
  const svgNearScrollDown = document.querySelector('.icon-link');
  const scrollDownBtn = document.querySelector('.second-button__hero');
  function toggleMenu() {
    if (mobMenu) {
      mobMenu.classList.toggle('is-open');
    }
    document.body.classList.toggle('no-scroll');
  }

  function openModalWindow() {
    if (modal) {
      modal.classList.add('is-open');
    }
    document.body.classList.add('no-scroll');
  }

  function closeModalWindow() {
    if (modal) {
      modal.classList.remove('is-open');
    }
    document.body.classList.remove('no-scroll');
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function validateForm() {
    if (form) {
      return form.checkValidity();
    }
    return false;
  }

  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }

  if (headerBurger) {
    headerBurger.addEventListener('click', toggleMenu);
  }

  if (mobMenuExitBtn) {
    mobMenuExitBtn.addEventListener('click', function() {
      toggleMenu();
      closeModalWindow();
    });
  }

  if (mobMenu) {
    mobMenu.addEventListener('click', function(e) {
      if (e.target === mobMenu) {
        toggleMenu();
        closeModalWindow();
      }
    });
  }

  if (orderButtonHero) {
    orderButtonHero.addEventListener('click', openModalWindow);
  }

  if (orderButtonPreFooter) {
    orderButtonPreFooter.addEventListener('click', openModalWindow);
  }

  if (callbackCloseButton) {
    callbackCloseButton.addEventListener('click', closeModalWindow);
  }

  if (modal) {
    modal.addEventListener('click', closeModalWindow);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', stopPropagation);
  }

  if (sendButton) {
    sendButton.addEventListener('click', function(e) {
      if (validateForm()) {
        closeModalWindow();
      } else {
        e.preventDefault();
        alert('Пожалуйста, заполните форму правильно.');
      }
    });
  }

  // Плавная прокрутка при нажатии на ссылки в навигации
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      if (mobMenu && mobMenu.classList.contains('is-open')) {
        toggleMenu(); // Закрываем бургер-меню перед прокруткой
      }
      smoothScroll(target);
    });
  });

  // Плавная прокрутка при нажатии на Scroll Down
  if (scrollDownLink) {
    scrollDownLink.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#footer');
    });
  }

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#how-its-made');
    });
  }
 
  
  // Плавная прокрутка при нажатии на SVG рядом с Scroll Down
  if (svgNearScrollDown) {
    svgNearScrollDown.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#footer');
    });
  }
});



