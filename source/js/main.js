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


// console.log(addButton);


// addButton.addEventListener('click', function () {
//   addTask();
// });
