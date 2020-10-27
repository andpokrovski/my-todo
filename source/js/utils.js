;
(function () {
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

  var formatDate = function (dateObj) {
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var date = dateObj.getDate();

    if (date < 10) {
      date = '0' + date;
    }

    if (month < 10) {
      month = '0' + date;
    }

    return year + '-' + month + '-' + date;
  }


  window.utils = {
    checkElements: checkElements,
    formatDate: formatDate,
  }


})();
