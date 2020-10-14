// (function () {

var template = document.querySelector('#template');
var taskTemplate = template.content.querySelector('.task');
var taskList = document.querySelector('.todo__list');
var addButton = document.querySelector('.todo__input');


var deleteButton = document.querySelector('.delete');
// console.log(deleteButton);

var task = document.querySelector('.todo__item');
// console.log(task);

deleteButton.addEventListener('click', function () {
  var task = document.querySelector('.todo__item');
  console.log(task);
  taskList.removeСhild(task);
});



var createTask = function () {
  // var newTask = taskTemplate.cloneNode('true');
  // var doneButton = newTask.querySelector('.todo__done');




  var taskList = document.querySelector('.todo__list');
  var newTask = document.querySelector('.task');

  var doneButton = document.querySelector('.todo__done');
  var deleteButton = document.querySelector('.todo__delete');




  // deleteButton.addEventListener('click', function () {
  //   taskList.removeСhild(newTask);
  // });

  return newTask;
};

// var addTask = function () {
//   var newTask = createTask();

//   taskList.appendChild(newTask);
// }

addButton.addEventListener('click', function () {
  addTask();
});

// })();
