(function () {

  var closeModalOnEscPress = function (evt) {
    if (evt.key === 'Escape') {
      // console.log(this)
      closeModal();
    }
  }

  var onModalEscPress;

  var openModal = function () {



    this.element.classList.toggle('d-none', false);

    var openEvent = new CustomEvent("modalOpened", {
      cancelable: true,
      bubbles: true,
    });

    this.element.dispatchEvent(openEvent);
    // console.log(this)

    onModalEscPress = closeModalOnEscPress.bind(this);
    document.addEventListener('keydown', onModalEscPress);
  }


  var closeModal = function () {
    console.log(this.element)
    // console.log(this.element.classList)


    this.element.classList.toggle('d-none', true);

    var closeEvent = new CustomEvent("modalClosed", {
      cancelable: true,
      bubbles: true,
    });

    this.element.dispatchEvent(closeEvent);
    document.removeEventListener('keydown', onModalEscPress);
  }


  var Modal = function (modalClassName) {
    // console.log(modalClassName);
    var modal = this;
    this.element = document.querySelector(modalClassName);
    var closeButtons = this.element.querySelectorAll('.modal__close');

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
