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
  'reminders': {
    'useDefault': false,
    'overrides': [{
        'method': 'email',
        'minutes': 24 * 60
      },
      {
        'method': 'popup',
        'minutes': 10
      }
    ]
  }
};

var template = document.querySelector('#template');
var taskTemplate = template.content.querySelector('.task');
// var taskList = document.querySelector('.mytodo__list');
var addButton = document.querySelector('.mytodo__add-button');
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


addButton.addEventListener('click', function () {
  addTask();
});

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

var addButton = document.querySelector('.mytodo__add-button');
var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.popup__close');
var popupSave = popup.querySelector('.popup__save');


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {

  }
}

addButton.addEventListener('click', function () {
  popup.classList.toggle('d-none', false);
  overlay.show();
});

popupClose.addEventListener('click', function () {
  popup.classList.toggle('d-none', true);
  overlay.hide();
});
