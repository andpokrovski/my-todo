var updateEvent = function (id, formData) {
  console.log('updated');
  var event = new CalendarEvent(formData);
  storage.set(event.id, event);

  return gapi.client.calendar.events.update({
      'calendarId': 'primary',
      'eventId': id,
      'resource': event,
    })
    .then(function (response) {
        editor.close();
        form.reset();
        notice.show('Успешно обновлено');
      },
      function (err) {
        notice.show('Произошла ошибка. Проверьте, правильно ли вы ввели данные.');
      });
}


window.update = {
  send: updateEvent,
}
