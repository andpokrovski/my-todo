var formElement = document.querySelector('.form');
var closeButton = document.querySelector('.modal__close');
var title = document.querySelector('.form');
var typeButtons = formElement.elements.type;
var typeEvent = formElement.querySelector('.form__type-input--event');
var typeTask = formElement.querySelector('.form__type-input--task');
var currentType = 'event';
var allDayInput = formElement.querySelector('.form__all-day-input');
var dates = formElement.querySelectorAll('.form__date');
var startDateInput = formElement.querySelector('.form__date--start');
var endDateInput = formElement.querySelector('.form__date--end');
var times = formElement.querySelectorAll('.form__time');
var startTimeInput = formElement.querySelector('.form__time--start');
var endTimeInput = formElement.querySelector('.form__time--end');
var saveButton = formElement.querySelector('.form__save');
var formValid = true;



var setDefaultDate = function () {
  var currentDate = time.getStringDate(new Date);

  dates.forEach(function (input) {
    input.value = currentDate;
  });
}

var setDefaultDateTime = function () {
  setDefaultDate();
  setDefaultTime();
}


editor.element.addEventListener('modalOpened', function () {
  formElement.elements.summary.focus();
  // console.log('modalOpened');
});


typeButtons.forEach(function (button) {
  button.addEventListener('change', function () {
    if (this.checked) {
      // formElement.className = 'form';
      formElement.classList.remove('form--' + currentType);
      currentType = this.value;
      formElement.classList.add('form--' + currentType);
    }

    if (currentType === 'event') {
      startDateInput.required = true;
    }

    if (currentType === 'task') {
      startDateInput.required = false;
    }

  });
});



startDateInput.addEventListener('change', function () {
  endDateInput.value = this.value;
});


allDayInput.addEventListener('change', function () {
  formElement.classList.toggle('form--all-day');
  form.allDay = allDayInput.checked;

  times.forEach(function (item) {
    if (allDayInput.checked) {
      item.required = false;
    } else {
      item.required = true;
      setDefaultTime();
    }
  });

});



var TIME_STEP = 30;

var setDefaultTime = function () {
  var date = new Date();
  var minutes = date.getMinutes();

  if (minutes < TIME_STEP) {
    date.setMinutes(TIME_STEP);
  } else {
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
  }

  startTimeInput.value = time.getStringTime(date);

  date.setMinutes(date.getMinutes() + TIME_STEP);


  endTimeInput.value = time.getStringTime(date);
}



var calculateEndTime = function () {
  var date = new Date;
  var hours = time.getNumberTime(this.value).hours;
  var minutes = time.getNumberTime(this.value).minutes;
  date.setHours(hours);
  date.setMinutes(minutes + TIME_STEP);

  endTimeInput.value = time.getStringTime(date);
}

startTimeInput.addEventListener('change', function () {
  calculateEndTime.call(this);
});


var increaseEndDate = function () {
  var startHours = time.getNumberTime(startTimeInput.value).hours;
  var startMinutes = time.getNumberTime(startTimeInput.value).minutes;
  var endHours = time.getNumberTime(endTimeInput.value).hours;
  var endMinutes = time.getNumberTime(endTimeInput.value).minutes;

  if ((startHours > endHours) || (startHours === endHours && startMinutes > endMinutes)) {
    var date = getDateFromString(endDateInput.value);
    date.setDate(date.getDate() + 1);
    endDateInput.value = time.getStringDate(date);
  }
}


endTimeInput.addEventListener('change', function () {
  increaseEndDate();
});


var fillForm = function (eventId) {
  var event = storage.get(eventId);

  formElement.elements['summary'].value = event['summary'];



  if (event['start']['dateTime'] && event['end']['dateTime']) {

    // console.log(event['start']['dateTime']);
    // console.log(event['end']['dateTime']);

    formElement.elements['start-date'].value = event['start']['dateTime'].substr(0, 10);
    formElement.elements['end-date'].value = event['end']['dateTime'].substr(0, 10);
    formElement.elements['start-time'].value = event['start']['dateTime'].substr(11, 5);
    formElement.elements['end-time'].value = event['end']['dateTime'].substr(11, 5);
  } else {
    formElement.classList.toggle('form--all-day', true);
    allDayInput.checked = true;
    form.allDay = true;

    formElement.elements['start-date'].value = event['start']['date'];
    formElement.elements['end-date'].value = event['end']['date'];
  }

  if (event['start']['dateTime'] && event['end']['dateTime'] && (event['start']['dateTime'] === event['end']['dateTime'])) {
    typeEvent.checked = false;
    typeTask.checked = true;
    formElement.classList.toggle('form--event', false);
    formElement.classList.toggle('form--task', true);
  } else {
    typeEvent.checked = true;
    typeTask.checked = false;
    formElement.classList.toggle('form--event', true);
    formElement.classList.toggle('form--task', false);
  }

  if (event['location']) {
    formElement.elements['location'].value = event['location'];
  }

  if (event['description']) {
    formElement.elements['description'].value = event['description'];
  }
}


var onFormSubmit = function (evt) {
  evt.preventDefault();
  var formData = new FormData(formElement);

  if (form.current.element && form.current.id) {
    updateEvent(form.current.element, form.current.id, formData);
    form.current.element = null;
    form.current.id = null;
  } else {
    createEvent(formData);
  }
}


formElement.addEventListener('submit', onFormSubmit);


var resetForm = function () {
  formElement.reset();
  formElement.className = 'form form--event';
}


closeButton.addEventListener('click', function () {
  resetForm();
});


window.form = {
  element: formElement,
  setDefaultDateTime: setDefaultDateTime,
  allDay: false,
  fill: fillForm,
  reset: resetForm,
  currentId: null,
  current: {
    element: null,
    id: null,
  }
};
