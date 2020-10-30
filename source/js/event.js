var UTC = '+03:00';
var TIMEZONE = 'Europe/Moscow';


// var getDateFromString = function (date, time) {
//   var dateTime = date + 'T' + time;
//   return (new Date(Date.parse(dateTime))).toISOString();
// }


var CalendarEvent = function (formData) {
  this.summary = formData.get('summary');

  this.start = {};
  this.end = {};

  if (!form.allDay) {
    this.start.dateTime = time.getDateFromString(formData.get('start-date'), formData.get('start-time')).toISOString();
    this.end.dateTime = time.getDateFromString(formData.get('end-date'), formData.get('end-time')).toISOString();
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
