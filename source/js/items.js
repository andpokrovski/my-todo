var template = document.querySelector('#template');
var itemTemplate = template.content.querySelector('.my-todo__item');
var itemsList = document.querySelector('.my-todo__list');

var createItem = function (event) {
  var newItem = itemTemplate.cloneNode('true');
  // var doneButton = newItem.querySelector('.my-todo__done');
  var deleteButton = newItem.querySelector('.my-todo__delete');
  var summary = newItem.querySelector('.my-todo__summary');


  summary.textContent = event.summary;

  deleteButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    itemsList.removeChild(newItem);
  });

  return newItem;
};


var renderItems = function (events) {
  var fragment = document.createDocumentFragment();

  for (i = 0; i < events.length; i++) {
    var event = events[i];

    fragment.appendChild(createItem(event));
  }

  itemsList.appendChild(fragment);
}



window.items = {
  render: renderItems
}
