var updateEvent = function (id, formData) {
  var event = new CalendarEvent(formData);

  return gapi.client.calendar.events.update({
      'calendarId': 'primary',
      'eventId': id,
      'resource': event,
    })
    .then(function (response) {
        storage.setEvent(event);
        editor.close();
        form.element.reset();
        // Handle the results here (response.result has the parsed body).
        // console.log("Response", response);
        notice.show('Успешно обновлено');
        console.log('updated');

      },
      function (err) {
        // console.error("Execute error", err);
        notice.show('Произошла ошибка. Проверьте, правильно ли вы ввели данные.');
      });
}


window.update = {
  // fillForm: fillForm,
  send: updateEvent,
}
