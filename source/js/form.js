var formElement = document.querySelector('.form');
var saveButton = formElement.querySelector('.form__save');
var typeButtons = formElement.elements.type;
var allDayInput = formElement.querySelector('.form__all-day-input');
var dates = formElement.querySelectorAll('.form__date');
var times = formElement.querySelectorAll('.form__time');
var typeEvent = formElement.querySelector('.form__type-input--event');
var typeTask = formElement.querySelector('.form__type-input--task');
var currentType = 'event';
var formValid = true;

typeButtons.forEach(function (button) {
  button.addEventListener('change', function () {
    if (this.checked) {
      // formElement.className = 'form';
      formElement.classList.remove('form--' + currentType);
      currentType = this.value;
      formElement.classList.add('form--' + currentType);
    }
  });
});

allDayInput.addEventListener('change', function () {
  formElement.classList.toggle('form--all-day');
  form.allDay = allDayInput.checked;
});


var setDefaultDate = function () {
  var currentDate = utils.formatDate(new Date);

  dates.forEach(function (input) {
    input.value = currentDate;
  });
}



var TIME_ROUNDING_STEP = 30;


// stringify
// 1. Произвести все необходимые значения.
// 2. Привести к строке

// var formatTime = function (dateObj) {
//   var hours = dateObj.getDate();
//   var minutes = dateObj.getMinutes();

//   if (minutes <= TIME_ROUNDING_STEP) {
//     minutes = TIME_ROUNDING_STEP;
//   } else {
//     minutes = '00';
//     hours += 1;
//   }

//   return {
//     start: hours + ':' + minutes,
//     end: hours + ':' + (minutes + TIME_ROUNDING_STEP),
//   }
// }

// var setDefaultTime = function () {
//   var time = formatTime(new Date);

//   times[0].value = time.start;
//   console.log(time.start);
//   times[1].value = time.end;
// }


// document.addEventListener("DOMContentLoaded", setDefaultTime);



// var onSaveButtonClick = function () {
//   if (formValid) {
//     createPopup.close();
//   }
// }

// var onFormSubmit = function (evt) {
//   evt.preventDefault();
//   var formData = new FormData(formElement);

//   // console.log(formData.get('start-time'));
//   // console.log(formData.get('end-time'));


//   // console.log(formData);

//   create.send(formData);
// }


// saveButton.addEventListener('click', onSaveButtonClick);

// formElement.addEventListener('submit', onFormSubmit);

var fillForm = function (eventId) {
  var event = storage.get(eventId);

  formElement.elements['summary'].value = event['summary'];



  if (event['start']['dateTime'] && event['end']['dateTime']) {

    console.log(event['start']['dateTime']);
    console.log(event['end']['dateTime']);

    formElement.elements['start-date'].value = event['start']['dateTime'].substr(0, 10);
    formElement.elements['end-date'].value = event['end']['dateTime'].substr(0, 10);
    formElement.elements['start-time'].value = event['start']['dateTime'].substr(11, 5);
    formElement.elements['end-time'].value = event['end']['dateTime'].substr(11, 5);
  } else {
    formElement.classList.toggle('form--all-day', true);
    allDayInput.checked = true;

    formElement.elements['start-date'].value = event['start']['date'];
    formElement.elements['end-date'].value = event['end']['date'];
  }

  // formElement.className = 'form';

  // console.log(event['start']['dateTime']);
  // console.log(event['end']['dateTime']);

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


var addCreateHandler = function () {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var formData = new FormData(formElement);

    create.send(formData);
    // console.log('update');
  });
}


var addUpdateHandler = function (id) {
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var formData = new FormData(formElement);

    update.send(id, formData);
    // console.log('create');
  });
}

var resetForm = function () {
  formElement.reset();
  formElement.className = '';
}



window.form = {
  element: formElement,
  allDay: false,
  addCreateHandler: addCreateHandler,
  addUpdateHandler: addUpdateHandler,
  fill: fillForm,
  reset: resetForm,
};
