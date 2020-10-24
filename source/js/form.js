var form = document.querySelector('.form');
var saveButton = form.querySelector('.form__save');
var typeButtons = form.elements.type;
var currentType = '';
var allDay = form.querySelector('.form__all-day');


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


var onSaveButtonClick = function () {
  create.close();
}

var onFormSubmit = function (evt) {
  evt.preventDefault();
  var formData = new FormData(form);
  create.send(formData);
}


saveButton.addEventListener('click', onSaveButtonClick);

form.addEventListener('submit', onFormSubmit);
