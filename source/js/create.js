var formatDateTime = function () {
  // Форматировние даты и времени
}

var event = function (formData) {
  return {
    'summary': formData.get('summary'),
    'location': formData.get('location'),
    'start': {
      'dateTime': '2020-10-23T09:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
    'end': {
      'dateTime': '2020-10-23T17:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
    'reminders': {
      'useDefault': false,
      'overrides': [{
          'method': 'email',
          'minutes': 24 * 60
        },
        {
          'method': 'popup',
          'minutes': 10
        }
      ]
    }
  }
}

function createEvent() {
  var event = {
    'summary': 'Новое событие',
    'location': 'Москва',
    'start': {
      'dateTime': '2020-10-23T09:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
    'end': {
      'dateTime': '2020-10-23T17:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
    'reminders': {
      'useDefault': false,
      'overrides': [{
          'method': 'email',
          'minutes': 24 * 60
        },
        {
          'method': 'popup',
          'minutes': 10
        }
      ]
    }
  };


  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function (event) {
    utils.appendPre('Event created: ' + event.htmlLink);
  });
}



// var closeButton = modal.querySelector('.create__close');



// Для чего нам нужны переменные?
// Чтобы задать обработчики событий

// var Modal = function (className) {
//   var modal = document.querySelectorAll(className);
//   var closeButtons = modal.querySelectorAll('.modal__close');
//   var closeButtons = modal.querySelectorAll('.modal__close');

//   openButtons.forEach(function (el) {
//     el.addEventListener('click', this.open());
//   });

//   closeButtons.forEach(function (el) {
//     el.addEventListener('click', this.close());
//   });
// };

// Modal.prototype = {
//   open: this.classList.toggle('d-none', false),
//   close: this.classList.toggle('d-none', true),
// }

var addButton = document.querySelector('.my-todo__add-button');
var modal = document.querySelector('.create');
var closeButton = document.querySelector('.create__close');

var onModalEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

var openModal = function () {
  modal.classList.toggle('d-none', false);
  // modal.classList.remove('d-none');
  document.addEventListener('keydown', onModalEscPress);
}


var closeModal = function () {
  modal.classList.toggle('d-none', true);
  document.removeEventListener('keydown', onModalEscPress);
}



addButton.addEventListener('click', function () {
  console.log('open')
  openModal();
});

closeButton.addEventListener('click', function () {
  closeModal();
});



// window.modal = {
//   open: openModal,
//   close: closeModal,
// }


// window.event = {
//   create: createEvent,
// }

window.create = {
  close: closeModal,
}
