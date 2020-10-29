var addButton = document.querySelector('.add-button');

addButton.addEventListener('click', function () {
  setDefaultDate();
  editor.open();
  // form.addUpdateHandler();
});


var createEvent = function (formData) {
  console.log('created');


  var event = new CalendarEvent(formData);

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function (event) {
    if (event.id) {
      items.add(event);
      storage.set(event.id, event);
      editor.close();
      form.reset();
      // form.element.removeEventListener('submit', onCreateButtonClick);
      // console.log('Event ID: ' + event.id);
      // console.log('Event link: ' + event.htmlLink);
      notice.show('Успешно сохранено');
    } else {
      notice.show('Произошла ошибка. Проверьте, правильно ли вы ввели данные.');
    }
  });
}


window.create = {
  send: createEvent,
}
