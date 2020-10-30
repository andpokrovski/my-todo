;
(function () {
  var getStringDate = function (dateObj) {
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var date = dateObj.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (date < 10) {
      date = '0' + date;
    }


    return year + '-' + month + '-' + date;
  }


  var getStringTime = function (dateObj) {
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return hours + ':' + minutes;
  }


  var calculateEndTime = function () {
    var date = new Date;
    var hours = parseInt(this.value.substr(0, 2), 10);
    var minutes = parseInt(this.value.substr(3, 2), 10);
    date.setHours(hours);
    date.setMinutes(minutes + TIME_STEP);

    endTimeInput.value = time.getStringTime(date);
  }


  var getNumberTime = function (value) {
    return {
      hours: parseInt(value.substr(0, 2), 10),
      minutes: parseInt(value.substr(3, 2), 10),
    }
  }


  var getDateFromString = function (date, time) {

    if (time) {
      var dateTime = date + 'T' + time;
    }

    return (new Date(Date.parse(dateTime || date)));
  }


  window.time = {
    getStringDate: getStringDate,
    getStringTime: getStringTime,
    getNumberTime: getNumberTime,
    getDateFromString: getDateFromString,
  }

})();