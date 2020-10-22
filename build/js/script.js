var addButton = document.querySelector('.my-todo__add-button');
var popup = document.querySelector('.popup');
var form = document.querySelector('.popup__form');
var closeButton = popup.querySelector('.popup__close');
var saveButton = popup.querySelector('.popup__save');


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {

  }
}

addButton.addEventListener('click', function () {
  popup.classList.toggle('d-none', false);
});

closeButton.addEventListener('click', function () {
  popup.classList.toggle('d-none', true);
});


var onSaveButtonClick = function () {
  // var formData = new From

  //   var formData = new FormData(form);
  //   console.log(formData);
  // }
}


saveButton.addEventListener('click', function (evt) {
  // evt.preventDefault();

  onSaveButtonClick();
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var formData = new FormData(form);
  console.log(formData);
});


var createEvent = function () {
  var event = {
    'summary': 'Новое событие',
    'location': 'Москва',
    'start': {
      'dateTime': '2020-10-12T09:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
    'end': {
      'dateTime': '2020-10-12T17:00:00+03:00',
      'timeZone': 'Europe/Moscow'
    },
  };

  var request = gapi.client.calendar.events.insert({
    'calendarId': 'vjq258dtd3p8mmmjs9cep4pt7g@group.calendar.google.com',
    'resource': event
  });


  request.execute(function (event) {
    appendPre('Event created: ' + event.htmlLink);
  });
}
var template = document.querySelector('#template');
var taskTemplate = template.content.querySelector('.task');
// var taskList = document.querySelector('.mytodo__list');
var addButton = document.querySelector('.my-todo__add-button');
// var deleteButton = document.querySelector('.delete');


var task = document.querySelector('.task-1');

// console.log(taskList, deleteButton, task);

// taskList.removeChild(task);


// deleteButton.addEventListener('click', function () {
//   if (task) {
//     taskList.removeChild(task);
//   }

// })
var log = function (el) {
  console.log(el);
}

var createTask = function () {
  var newTask = taskTemplate.cloneNode('true');
  var doneButton = newTask.querySelector('.mytodo__done');
  var deleteButton = newTask.querySelector('.mytodo__delete');
  var taskList = document.querySelector('.mytodo__list');

  deleteButton.addEventListener('click', function (evt) {

    evt.preventDefault();

    taskList.removeChild(newTask);
  });

  return newTask;
};



var addTask = function () {

  var taskList = document.querySelector('.mytodo__list');
  var newTask = createTask();

  taskList.appendChild(newTask);
}


console.log(addButton);


// addButton.addEventListener('click', function () {
//   addTask();
// });

