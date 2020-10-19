var event = {
  'summary': 'Новое событие',
  'location': 'Москва',
  'start': {
    'dateTime': '2020-10-12T09:00:00+03:00',
    'timeZone': 'Europe/Moscow'
  },
  'end': {
    'dateTime': '2020-10-12T17:00:00+03:00',
    'timeZone': 'Europe/Moscow'
  },
  'reminders': {
    'useDefault': false,
    'overrides': [{
        'method': 'email',
        'minutes': 24 * 60
      },
      {
        'method': 'popup',
        'minutes': 10
      }
    ]
  }
};
