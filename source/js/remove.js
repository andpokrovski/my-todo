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


window.removeEvent = removeEvent;