document.addEventListener('DOMContentLoaded', function() {
  const headerBurger = document.querySelector('.header__burger');
  const mobMenuExitBtn = document.querySelector('.mob-menu__exit-btn');
  const mobMenu = document.querySelector('.mob-menu');
  const orderButton = document.querySelector('.section__button');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.callback__modal-overlay');
  const callbackCloseButton = document.querySelector('.callback__close-button');
  const sendButton = document.querySelector('.callback__form-submit-button');

  function toggleMenu() {
    mobMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }

  function openModalWindow() {
    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeModalWindow() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }


  headerBurger.addEventListener('click', toggleMenu);
  mobMenuExitBtn.addEventListener('click', function() {
    toggleMenu();
    closeModalWindow(); 
  });
  mobMenu.addEventListener('click', function(e) {
    if (e.target === mobMenu) {
      toggleMenu();
      closeModalWindow(); 
    }
  });
  orderButton.addEventListener('click', openModalWindow);
  callbackCloseButton.addEventListener('click', closeModalWindow);
  modal.addEventListener('click', closeModalWindow);
  modalOverlay.addEventListener('click', stopPropagation);


  sendButton.addEventListener('click', function() {
    closeModalWindow();
  });
});






