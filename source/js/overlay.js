var overlay = document.querySelector('.overlay');

var showOverlay = function () {
  overlay.classList.toggle('d-none', false);
}

var hideOverlay = function () {
  overlay.classList.toggle('d-none', true);
}

window.overlay = {
  show: showOverlay,
  hide: hideOverlay,
}
