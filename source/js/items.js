var template = document.querySelector('#template');
var itemTemplate = template.content.querySelector('.item');
var itemsList = document.querySelector('.list');


var createItem = function (event) {
  var newItem = itemTemplate.cloneNode('true');
  var summary = newItem.querySelector('.item__summary');
  var updateButton = newItem.querySelector('.item__button--update');
  var deleteButton = newItem.querySelector('.item__button--delete');
  var location = newItem.querySelector('.item__location');
  var description = newItem.querySelector('.item__description');
  // var id = newItem.querySelector('.item__id');
  console.log(newItem)


  summary.textContent = event.summary;

  if (event.location) {
    location.classList.add('item__location--show');
    location.textContent = event.location;
  }

  if (event.description) {
    description.classList.add('item__description--show');
    description.textContent = event.description;
  }

  // id.value = event.id;

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

    // setDefaultDate();
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
  remove: removeItem,
  clear: clearItems,
  // currentId: undefined,
}


// 
