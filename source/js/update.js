// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.calendar.events.update({
      'calendarId': 'primary',
      'eventId': 0,
      'resource': {
        'end': {},
        'start': {}
      }
    })
    .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      });
}


'calendarId': 'primary',
'resource': event

var UpdateSettings = function () {

}


var RemoveSettings = function (id) {
  this.calendarId = 'primary';
  this.eventId = id;
}


var removeEvent = function (id) {
  return gapi.client.calendar.events.delete(new RemoveSettings(id))
    .then(function () {
        notice.show('Успешно удалено');
      },
      function () {
        notice.show('Не удалось удалить');
      });
}


window.remove = {
  send: removeEvent,
}
