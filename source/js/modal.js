// popup


// var addButton = document.querySelector('.my-todo__add-button');
// var modal = document.querySelector('.create');
// var closeButton = document.querySelector('.create__close');





// addButton.addEventListener('click', function () {
//   // console.log('open')
//   openModal();
// });

// closeButton.addEventListener('click', function () {
//   closeModal();
// });






// var Modal = function (settings) {
//   this.element = document.querySelector(settings.modalClass);

//   var closeButtons = this.element.querySelectorAll('.modal__close');
//   var openButtons = document.querySelectorAll(settings.openButtonsClass);


//   openButtons.forEach(function (openButton) {
//     openButton.addEvenlistener('click', function () {
//       openModal(this.element);
//     });
//   });

//   closeButtons.forEach(function (closeButton) {
//     closeButton.addEvenlistener('click', function () {
//       closeModal(this.element);
//     });
//   });
// }


// Modal.prototype = {
//   open: function () {
//     openModal(this);
//   },
//   close: function () {
//     closeModal(this);
//   },
// }

// // Все это объединить в модальное окно




// var modalInit = function (modalClass, openButtonClass) {
//   var openButtons = document.querySelectorAll(openButtonClass);
//   // var modal = document.querySelector(modalClass);

//   var modal = new Modal(modalClass);



//   openButtons.forEach(function (openButton) {
//     openButton.addEvenlistener('click', function () {
//       modal.show();
//       // открыть модальное окно
//     });
//   });

// }



// var Modal = function (modalClass) {
//   this.element = document.querySelector(modalClass);
// }


// Modal.prototype = {
//   open: function () {
//     openModal(this.element);
//   },
//   close: function () {
//     closeModal(this.element);
//   },
// }

// Переопределить метод EventHandler внутри прототипа



// var modalInit = function (settings) {
//   var modal = new Modal;
//   var openButtons = document.querySelectorAll(settings.openButtonClass);
//   var closeButtons = modal.element.querySelectorAll('.modal__close');

//   openButtons.forEach(function (openButton) {
//     openButton.addEvenlistener('click', function () {
//       modal.show();
//       // открыть модальное окно
//     });
//   });



//   var openButtons = document.querySelectorAll(settings.openButtonsClass);


//   openButtons.forEach(function (openButton) {
//     openButton.addEvenlistener('click', function () {
//       openModal(this.element);
//     });
//   });

//   closeButtons.forEach(function (closeButton) {
//     closeButton.addEvenlistener('click', function () {
//       closeModal(this.element);
//     });
//   });


//   return modal;

// }


var onModalEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}


var openModal = function () {
  this.element.classList.toggle('d-none', false);
  // document.addEventListener('keydown', onModalEscPress);
  document.addEventListener('keydown', onModalEscPress.bind(this));
}


var closeModal = function () {
  this.element.classList.toggle('d-none', true);
  // document.removeEventListener('keydown', onModalEscPress);
  document.removeEventListener('keydown', onModalEscPress.bind(this));
}



var Modal = function (settings) {
  this.element = document.querySelector(settings.modal);
  var openButtons = document.querySelectorAll(settings.openButton);
  var closeButtons = this.element.querySelectorAll('.modal__close');


  openButtons.forEach(function (openButton) {
    openButton.addEvenlistener('click', openModal.bind(this));
  });

  closeButtons.forEach(function (closeButton) {
    closeButton.addEvenlistener('click', closeModal.bind(this));
  });
}


Modal.prototype = {
  open: openModal,
  close: closeModal,
}

window.Modal;







// Тесты с кроликом


// Фиксировать контекст

var deleteRabbit = function () {
  this.classList.toggle('d-none', true);
}

// var callDeleteRabbit = function () {
//   return deleteRabbit.call()
// }


var Rabbit = function () {
  this.element = document.querySelector('.rabbit');
  var button = this.element.querySelector('.rabbit-button');

  // button.addEventListener('click', function () {
  //   deleteRabbit(this);
  // });

  button.addEventListener('click', deleteRabbit.bind(this.element));
}

// Rabbit.prototype = {
//   delete: function () {
//     this.element.style.display = 'none';
//   }
// }
