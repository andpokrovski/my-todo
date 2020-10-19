var addButton = document.querySelector('.mytodo__add-button');
var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.popup__close');
var popupSave = popup.querySelector('.popup__save');


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {

  }
}

addButton.addEventListener('click', function () {
  popup.classList.toggle('d-none', false);
  overlay.show();
});

popupClose.addEventListener('click', function () {
  popup.classList.toggle('d-none', true);
  overlay.hide();
});
