var UTC = '+03:00';
var TIMEZONE = 'Europe/Moscow';


var formatDateTime = function (date, time) {
  return date + 'T' + time + ':00' + UTC;
}

// var listSettings = {
//   'calendarId': 'primary',
//   // Может пригодиться
//   'timeMin': (new Date()).toISOString(),
//   'showDeleted': false,
//   'singleEvents': true,
//   'maxResults': 10,
//   'orderBy': 'startTime'
// }



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


var createPopup = new Modal({
  modal: '.create',
  openButtons: '.add-button',
});






// window.create = {
//   close: closeModal,
//   send: sendEvent,
// }
