;
(function () {
  var UTC = '+03:00';
  var TIMEZONE = 'Europe/Moscow';


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

    this.extendedProperties = {
      private: {
        startDate: formData.get('start-date'),
        startTime: formData.get('start-time'),
        endDate: formData.get('end-date'),
        endTime: formData.get('end-time'),
      }
    }
  }

  window.CalendarEvent = CalendarEvent;
})();