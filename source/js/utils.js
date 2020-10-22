var checkElements = function () {
  var args = Array.prototype.slice.call(arguments);
  var errors = [];

  var check = args.reduce(function (flag, el, i, arr) {
    var elExist = Boolean(el);

    if (!elExist) {
      errors.push(i + 1);
    }

    return flag && elExist;
  }, true);

  // if (!check) {
  //   console.log('На странице нет элементов ' + errors.join(', '));
  // }

  return check;
}


/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

window.utils = {
  checkElements: checkElements,
  appendPre: appendPre,
}
