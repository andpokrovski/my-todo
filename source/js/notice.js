var notice = document.querySelector('.notice');

var showNotice = function (message) {
  notice.textContent = message;
  notice.classList.toggle('notice--active', true);

  setTimeout(function () {
    notice.classList.toggle('notice--active', false);
  }, 3000);

}

window.notice.show = showNotice;
