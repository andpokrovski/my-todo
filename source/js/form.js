var form = document.querySelector('.form');
var saveButton = form.querySelector('.form__save');
var typeButtons = form.elements.type;
var currentType = '';
var allDay = form.querySelector('.form__all-day');
var dates = form.querySelectorAll('.form__date');
var times = form.querySelectorAll('.form__time');
var formValid = true;

typeButtons.forEach(function (button) {
  button.addEventListener('change', function () {
    if (button.checked) {
      form.classList.remove('form--' + currentType);
      currentType = button.value;
      form.classList.add('form--' + currentType);
    }
  });
});

allDay.addEventListener('change', function () {
  form.classList.toggle('form--all-day');
});

var formatDate = function (dateObj) {
  var day = dateObj.getDate();
  var month = dateObj.getMonth() + 1;
  var year = dateObj.getFullYear();

  return year + '-' + month + '-' + day;
}


var setDefaultDate = function () {
  var currentDate = formatDate(new Date);

  dates.forEach(function (input) {
    input.value = currentDate;
  });
}


// document.addEventListener("DOMContentLoaded", setDefaultDate);
createPopup.openButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    setDefaultDate();
  });
});


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

var onFormSubmit = function (evt) {
  evt.preventDefault();
  var formData = new FormData(form);

  create.send(formData);
}


// saveButton.addEventListener('click', onSaveButtonClick);

form.addEventListener('submit', onFormSubmit);


// window.form;
