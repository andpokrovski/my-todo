var CLEAR_EXCEPTIONS = ['fontFamily'];

var setEventToStorage = function (event) {
  localStorage.setItem(event.id, JSON.stringify(event));
}

var getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key));
}

var removeFromStorage = function (key) {
  localStorage.removeItem(key);
}


// var clearStorage = function () {
//   if (CLEAR_EXCEPTIONS.length > 0) {
//     var exceptionsValues = CLEAR_EXCEPTIONS.map(function (item) {
//       return localStorage.getItem(item);
//     });
//   }

//   localStorage.clear();

//   if (exceptionsValues) {
//     CLEAR_EXCEPTIONS.forEach(function (item, i) {
//       localStorage.setItem(item, exceptionsValues[i]);
//     });
//   }
// }


var clearStorage = function () {
  if (arguments) {
    var args = Array.prototype.slice.call(arguments);

    var exceptionsValues = args.map(function (item) {
      return localStorage.getItem(item);
    });
  }

  localStorage.clear();

  if (exceptionsValues) {
    args.forEach(function (key, i) {
      localStorage.setItem(key, exceptionsValues[i]);
    });
  }
}


window.storage = {
  setEvent: setEventToStorage,
  get: getFromStorage,
  remove: removeFromStorage,
  clear: clearStorage
}
