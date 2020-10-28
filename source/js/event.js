var UTC = '+03:00';
var TIMEZONE = 'Europe/Moscow';


var formatDateTime = function (date, time) {
  var dateTime = date + 'T' + time;
  return (new Date(Date.parse(dateTime))).toISOString();
}


var CalendarEvent = function (formData) {
  this.summary = formData.get('summary');

  this.start = {};
  this.end = {};

  if (!form.allDay) {
    this.start.dateTime = formatDateTime(formData.get('start-date'), formData.get('start-time'));
    this.end.dateTime = formatDateTime(formData.get('end-date'), formData.get('end-time'));
  } else {
    this.start.date = formData.get('start-date');
    this.end.date = formData.get('end-date');
  }

  this.start.timeZone = TIMEZONE;
  this.end.timeZone = TIMEZONE;

  this.location = formData.get('location') || '';
  this.description = formData.get('description') || '';
}

window.CalendarEvent;