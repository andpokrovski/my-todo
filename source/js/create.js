var UTC = '+03:00';
var TIMEZONE = 'Europe/Moscow';


var createPopup = new Modal({
  modal: '.create',
  openButtons: '.add-button',
});


var formatDateTime = function (date, time) {
  return date + 'T' + time + ':00' + UTC;
}


var CalendarEvent = function (formData) {
  this.summary = formData.get('summary');

  this.start = {};
  this.end = {};

  if (!(formData.get('start-time') && formData.get('start-time'))) {
    this.start.date = formData.get('start-date');
    this.end.date = formData.get('end-date');
  } else {
    this.start.dateTime = formatDateTime(formData.get('start-date'), formData.get('start-time'));
    this.end.dateTime = formatDateTime(formData.get('end-date'), formData.get('end-time'));
  }

  this.start.timeZone = TIMEZONE;
  this.end.timeZone = TIMEZONE;

  this.location = formData.get('location') || '';
  this.description = formData.get('description') || '';
}


var sendEvent = function (formData) {
  var event = new CalendarEvent(formData);

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });

  request.execute(function (event) {
    if (event.id) {
      storage.set(event);
      createPopup.close();
      form.reset();
      console.log('Event ID: ' + event.id);
      console.log('Event link: ' + event.htmlLink);
      notice.show('Успешно сохранено');
    } else {
      notice.show('Произошла ошибка. Проверьте, правильно ли вы ввели данные.');
    }
  });
}


// Сохранить объект Event d localStorage и вызвать функцию отрисовки




window.create = {
  open: createPopup.open,
  close: createPopup.close,
  send: sendEvent,
  // ok: createOk,
}
