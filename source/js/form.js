var form = document.querySelector('.create__form');
var saveButton = form.querySelector('.create__save');



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
