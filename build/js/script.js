var template = document.querySelector('#template');
var taskTemplate = template.content.querySelector('.task');
// var taskList = document.querySelector('.todo__list');
var addButton = document.querySelector('.todo__input');
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
  var doneButton = newTask.querySelector('.todo__done');
  var deleteButton = newTask.querySelector('.todo__delete');

  deleteButton.addEventListener('click', function () {
    // console.log(taskList);
    // console.log(newTask);
    var taskList = document.querySelector('.todo__list');
    log(newTask)

    taskList.removeСhild(newTask);

  });

  return newTask;
};


var addTask = function () {

  var taskList = document.querySelector('.todo__list');
  var newTask = createTask();

  taskList.appendChild(newTask);
}



addButton.addEventListener('click', function () {
  addTask();
});
