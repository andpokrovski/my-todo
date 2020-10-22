var addButton = document.querySelector('.my-todo__add-button');
var popup = document.querySelector('.popup');
var form = document.querySelector('.popup__form');
var closeButton = popup.querySelector('.popup__close');
var saveButton = popup.querySelector('.popup__save');


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {

  }
}

addButton.addEventListener('click', function () {
  popup.classList.toggle('d-none', false);
});

closeButton.addEventListener('click', function () {
  popup.classList.toggle('d-none', true);
});


var onSaveButtonClick = function () {
  // var formData = new From

  //   var formData = new FormData(form);
  //   console.log(formData);
  // }
}


saveButton.addEventListener('click', function (evt) {
  // evt.preventDefault();

  onSaveButtonClick();
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var formData = new FormData(form);
  console.log(formData);
});


var createEvent = function () {
  var event = {
    'summary': 'Новое событие',
    'location': 'Москва',
    'start': {
      'dateTime': '2020-10-12T09:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
    'end': {
      'dateTime': '2020-10-12T17:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
  };

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'vjq258dtd3p8mmmjs9cep4pt7g@group.calendar.google.com',
    'resource': event
  });


  request.execute(function (event) {
    appendPre('Event created: ' + event.htmlLink);
  });
}