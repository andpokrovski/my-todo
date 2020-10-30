;
(function () {
  var closeModalOnEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeModal.call(this);
    }
  }

  var onModalEscPress;


  var openModal = function () {
    var modal = this;
    modal.element.classList.toggle('d-none', false);

    setTimeout(function () {
      modal.element.classList.toggle('modal--active', true);
    }, 10)

    var openEvent = new CustomEvent("modalOpened", {
      cancelable: true,
      bubbles: true,
    });

    modal.element.dispatchEvent(openEvent);

    onModalEscPress = closeModalOnEscPress.bind(modal);
    document.addEventListener('keydown', onModalEscPress);
  }


  var closeModal = function () {
    var modal = this;
    modal.element.classList.toggle('modal--active', false);

    setTimeout(function () {
      modal.element.classList.toggle('d-none', true);
    }, 250)

    var closeEvent = new CustomEvent("modalClosed", {
      cancelable: true,
      bubbles: true,
    });

    modal.element.dispatchEvent(closeEvent);
    document.removeEventListener('keydown', onModalEscPress);
  }


  var Modal = function (modalClassName) {
    var modal = this;
    this.element = document.querySelector(modalClassName);
    var closeButtons = this.element.querySelectorAll('.modal__close');

    if (closeButtons.length > 0) {
      closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function (evt) {
          evt.preventDefault();
          closeModal.call(modal);
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
