var setToStorage = function (event) {
  localStorage.setItem(event.id, JSON.stringify(event));
}

var getFromStorage = function (id) {
  return JSON.parse(localStorage.getItem(id));
}

var removeFromStorage = function (id) {
  localStorage.removeItem(id);
}

var clearStorage = function () {
  for (key in localStorage) {
    if (key !== 'fontFamily') {
      removeFromStorage(key);
    }
  }
}


window.storage = {
  set: setToStorage,
  get: getFromStorage,
  remove: removeFromStorage,
  clear: clearStorage
}
