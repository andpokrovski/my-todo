var currentDate = document.querySelector('.current-date');

document.addEventListener("DOMContentLoaded", function () {
  var date = utils.formatDate(new Date());
  currentDate.value = date;
});


var getTimeRange = {
  min: function (dateObj) {
    dateObj.setHours(0, 0);
    return dateObj;
  },
  max: function (dateObj) {
    dateObj.setHours(23, 59);
    return dateObj;
  },
}


var ListSettings = function (dateObj) {
  this.calendarId = 'primary';
  this.timeMin = getTimeRange.min(dateObj).toISOString();
  this.timeMax = getTimeRange.max(dateObj).toISOString();
  this.singleEvents = true;
  this.orderBy = 'startTime';
}


var listEvents = function (dateObj) {
  gapi.client.calendar.events.list(new ListSettings(dateObj))
    .then(function (response) {
      var events = response.result.items;
      items.clear();
      storage.clear('fontFamily');
      if (events.length > 0) {
        items.render(events);
      } else {
        notice.show('События не найдены');
      }
    });
}


var onListDateChange = function () {
  var date = new Date(this.value);
  listEvents(date);
}


// currentDate.addEventListener('change', onListDateChange);

currentDate.addEventListener('change', onListDateChange);







window.list = {
  update: listEvents,
}
