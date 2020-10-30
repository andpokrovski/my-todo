;
(function () {})();

var updateEvent = function (element, id, formData) {
  console.log('updated');
  var event = new CalendarEvent(formData);
  // console.log(event.description)
  items.update(element, event);
  storage.set(id, event);

  return gapi.client.calendar.events.update({
      'calendarId': 'primary',
      'eventId': id,
      'resource': event,
    })
    .then(function (response) {
        // console.log(response)
        editor.close();
        form.reset();
        notice.show('Успешно обновлено');
      },
      function (err) {
        notice.show('Произошла ошибка. Проверьте, правильно ли вы ввели данные.');
      });
}


window.updateEvent = updateEvent;
