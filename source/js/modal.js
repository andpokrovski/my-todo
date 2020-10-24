(function () {
  var onModalEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeModal.bind(this)();
    }
  }

  var modalEscPressHandler;



  var openModal = function () {
    this.element.classList.toggle('d-none', false);

    var openEvent = new CustomEvent("modalOpened", {
      cancelable: true,
      bubbles: true,
    });

    this.element.dispatchEvent(openEvent);
    modalEscPressHandler = onModalEscPress.bind(this);
    document.addEventListener('keydown', modalEscPressHandler);
  }


  var closeModal = function () {
    this.element.classList.toggle('d-none', true);

    var closeEvent = new CustomEvent("modalClosed", {
      cancelable: true,
      bubbles: true,
    });

    this.element.dispatchEvent(closeEvent);
    document.removeEventListener('keydown', modalEscPressHandler);
  }



  var Modal = function (settings) {
    var modal = this;
    this.element = document.querySelector(settings.modal);
    var openButtons = document.querySelectorAll(settings.openButtons);
    var closeButtons = this.element.querySelectorAll('.modal__close');


    if (openButtons.length > 0) {
      openButtons.forEach(function (openButton) {
        openButton.addEventListener('click', function (evt) {
          evt.preventDefault();
          openModal.bind(modal)();
        });
      });
    }

    if (closeButtons.length > 0) {
      closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function (evt) {
          evt.preventDefault();
          closeModal.bind(modal)();
        });
      });
    }
  }


  Modal.prototype = {
    open: openModal,
    close: closeModal,
  }


  window.Modal = Modal;
})();
