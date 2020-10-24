/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */

var listSettings = {
  'calendarId': 'primary',
  'timeMin': (new Date()).toISOString(),
  'showDeleted': false,
  'singleEvents': true,
  'maxResults': 10,
  'orderBy': 'startTime'
}

var listUpcomingEvents = function () {
  gapi.client.calendar.events.list(listSettings)
    .then(function (response) {
      var events = response.result.items;

      if (events.length > 0) {
        // for (i = 0; i < events.length; i++) {
        //   var event = events[i];
        //   var when = event.start.dateTime;
        //   if (!when) {
        //     when = event.start.date;
        //   }
        //   alert.show(event.summary + ' (' + when + ')')
        // }

        items.render(events);
      } else {
        notice.show('Запланированных на сегодня событий не найдено');
      }
    });
}


window.myTodo.list = listUpcomingEvents;
