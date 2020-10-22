var form = document.querySelector('.modal__form');
var saveButton = form.querySelector('.modal__save');

var onSaveButtonClick = function () {
  create.close();
}

var onFormSubmit = function (evt) {
  evt.preventDefault();
  var formData = new FormData(form);
  console.log(formData);
  // createEvent();
}


saveButton.addEventListener('click', onSaveButtonClick);

form.addEventListener('submit', onFormSubmit);
