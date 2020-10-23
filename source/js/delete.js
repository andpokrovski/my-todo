var deleteSettings = {
  'calendarId': 'primary',
  'eventId': 'k731e93gqrhn7183dsd7mm0jtc',
}


var deleteEvent = function () {
  return gapi.client.calendar.events.delete(deleteSettings)
    .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      });
}
