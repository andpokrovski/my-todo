;
(function () {
  var body = document.querySelector('.body');
  var select = document.querySelector('.fonts');


  var onPageLoad = function () {
    var storageValue = storage.get('fontFamily');


    if (storageValue) {
      body.style.fontFamily = storageValue;
      select.value = storageValue;
    }
  };


  var onSelectChange = function () {
    body.style.fontFamily = select.value;
    storage.set('fontFamily', select.value);
  };

  var resetFont = function () {
    body.style.fontFamily = '';
    select.options[0].selected = true;
  }


  document.addEventListener("DOMContentLoaded", onPageLoad);

  select.addEventListener('change', onSelectChange);


  window.font = {
    reset: resetFont,
  }

})();
