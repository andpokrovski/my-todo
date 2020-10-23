var UTC = '+03:00';
var TIMEZONE = 'Europe/Moscow';


var formatDateTime = function (date, time) {
  return date + 'T' + time + ':00' + UTC;
}


var createEvent = function (formData) {
  return {
    'summary': formData.get('summary'),
    'location': formData.get('location'),
    'start': {
      'dateTime': formatDateTime(formData.get('start-date'), formData.get('start-time')),
      'timeZone': TIMEZONE
    },
    'end': {
      'dateTime': formatDateTime(formData.get('end-date'), formData.get('end-time')),
      'timeZone': TIMEZONE
    },
  }
}


var sendEvent = function (formData) {
  var event = createEvent(formData);
  console.log(event);

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function (event) {
    console.log(event.id);
    alert.show('Event created: ' + event.htmlLink);
  });
}



// popup


// var addButton = document.querySelector('.my-todo__add-button');
// var modal = document.querySelector('.create');
// var closeButton = document.querySelector('.create__close');

// var onModalEscPress = function (evt) {
//   if (evt.key === 'Escape') {
//     closeModal();
//   }
// }

// var openModal = function () {
//   modal.classList.toggle('d-none', false);
//   // modal.classList.remove('d-none');
//   document.addEventListener('keydown', onModalEscPress);
// }


// var closeModal = function () {
//   modal.classList.toggle('d-none', true);
//   document.removeEventListener('keydown', onModalEscPress);
// }



// addButton.addEventListener('click', function () {
//   // console.log('open')
//   openModal();
// });

// closeButton.addEventListener('click', function () {
//   closeModal();
// });


var addButton = document.querySelector('.my-todo__add-button');
var modal = document.querySelector('.create');
var closeButton = document.querySelector('.create__close');


var popup = new Modal({
  modal: '.create',
  openButton: 
});






window.create = {
  close: closeModal,
  send: sendEvent,
}
