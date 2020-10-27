var template = document.querySelector('#template');
var itemTemplate = template.content.querySelector('.my-todo__item');
var itemsList = document.querySelector('.my-todo__list');


var createItem = function (event) {
  var newItem = itemTemplate.cloneNode('true');
  var deleteButton = newItem.querySelector('.my-todo__delete');
  var summary = newItem.querySelector('.my-todo__summary');


  summary.textContent = event.summary;

  deleteButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    removeItem(newItem);
    // itemsList.removeChild(newItem);
    storage.remove(event.id);
    // Удаление с сервера
    remove.send(event.id);
  });

  return newItem;
};

var addItem = function (event) {
  var newItem = createItem(event);
  itemsList.prepend(newItem);
}


var renderItems = function (events) {
  var fragment = document.createDocumentFragment();

  events.forEach(function (event) {
    fragment.appendChild(createItem(event));
    storage.setEvent(event);
  });

  itemsList.appendChild(fragment);
}

var removeItem = function (item) {
  itemsList.removeChild(item);
}

var clearItems = function () {
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }
}


window.items = {
  add: addItem,
  render: renderItems,
  // remove: removeItem,
  clear: clearItems,
}


// 
