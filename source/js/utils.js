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


