var template = document.querySelector('#template');
var itemTemplate = template.content.querySelector('.my-todo__item');
var itemsList = document.querySelector('.my-todo__list');


var createItem = function (event) {
  var newItem = itemTemplate.cloneNode('true');
  var summary = newItem.querySelector('.my-todo__summary');
  var updateButton = newItem.querySelector('.my-todo__update');
  var deleteButton = newItem.querySelector('.my-todo__delete');
  var id = newItem.querySelector('.item__id');


  summary.textContent = event.summary;
  id.value = event.id;

  deleteButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    removeItem(newItem);
    // itemsList.removeChild(newItem);
    storage.remove(event.id);
    // Удаление с сервера
    remove.send(event.id);

  });

  updateButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    setDefaultDate();
    // form.addCreateHandler();

    form.fill(event.id);
    form.currentId = event.id
    // form.addUpdateHandler();
    editor.open();
    // items.currentId = event.id;

  });

  return newItem;
};


// var getItemId = function (updateButton) {
//   var parentNode = updateButton.parentNode;
//   // console.log(this);
//   // console.log(updateButton.parentNode);
//   var idInput = parentNode.querySelector('.item__id');
//   console.log();
//   // console.log(idInput);

//   // return parentNode.querySelector('.item__id').value;
// }


var addItem = function (event) {
  var newItem = createItem(event);
  itemsList.prepend(newItem);
}


var renderItems = function (events) {
  var fragment = document.createDocumentFragment();

  events.forEach(function (event) {
    fragment.appendChild(createItem(event));
    storage.set(event.id, event);
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
  // getId: getItemId,
  // remove: removeItem,
  clear: clearItems,
  // currentId: undefined,
}


// 
