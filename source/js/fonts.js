(function () {
  var body = document.querySelector('.body');
  var select = document.querySelector('.fonts');


  var onPageLoad = function () {
    var storageValue = localStorage.getItem('fontFamily')

    if (storageValue) {
      body.style.fontFamily = storageValue;
      select.value = storageValue;
      console.log(select[storageValue]);
    }
  }


  var onSelectChange = function () {
    body.style.fontFamily = select.value;
    localStorage.setItem('fontFamily', select.value)
  }


  document.addEventListener("DOMContentLoaded", onPageLoad);

  select.addEventListener('change', onSelectChange);
})();
