;
(function () {
  var template = document.querySelector('#template');
  var itemTemplate = template.content.querySelector('.item');
  var itemsList = document.querySelector('.list');


  var createItem = function (event) {
    var newItem = itemTemplate.cloneNode('true');
    var summary = newItem.querySelector('.item__summary');
    var time = newItem.querySelector('.item__time');
    var startTime = newItem.querySelector('.item__start-time');
    var endTime = newItem.querySelector('.item__end-time');
    var doneButton = newItem.querySelector('.item__done');
    var doneInput = newItem.querySelector('.item__done-input');
    var updateButton = newItem.querySelector('.item__update');
    var deleteButton = newItem.querySelector('.item__delete');
    var location = newItem.querySelector('.item__location');
    var description = newItem.querySelector('.item__description');


    summary.textContent = event.summary;

    if (event.start.dateTime && event.end.dateTime) {
      time.classList.add('item__time--show');
      startTime.textContent = event.extendedProperties.private.startTime;
      endTime.textContent = event.extendedProperties.private.endTime;
    }

    if (event.location) {
      location.classList.add('item__location--show');
      location.textContent = event.location;
    }

    if (event.description) {
      description.classList.add('item__description--show');
      description.textContent = event.description;
    }


    doneInput.addEventListener('change', function (evt) {
      if (doneInput.checked) {
        doneButton.classList.add('item__done--checked')
        event.extendedProperties.private.done = true;
        storage.set(event.id, event);
      } else {
        doneButton.classList.remove('item__done--checked')
        event.extendedProperties.private.done = false;
        storage.set(event.id, event);
      }
    });


    updateButton.addEventListener('click', function (evt) {
      evt.preventDefault();

      form.fill(event.id);
      form.current.element = newItem;
      form.current.id = event.id
      editor.open();
    });


    deleteButton.addEventListener('click', function (evt) {
      evt.preventDefault();

      removeItem(newItem);
      storage.remove(event.id);
      removeEvent(event.id);
    });


    return newItem;
  };


  var updateItem = function (item, event) {
    var summary = item.querySelector('.item__summary');
    var time = item.querySelector('.item__time');
    var startTime = item.querySelector('.item__start-time');
    var endTime = item.querySelector('.item__end-time');
    var location = item.querySelector('.item__location');
    var description = item.querySelector('.item__description');

    summary.textContent = event.summary;

    if (event.start.dateTime && event.end.dateTime) {
      time.classList.add('item__time--show');
      startTime.textContent = event.extendedProperties.private.startTime;
      endTime.textContent = event.extendedProperties.private.endTime;
    } else {
      time.classList.remove('item__time--show');
      startTime.textContent = '';
      endTime.textContent = '';
    }

    if (event.location) {
      console.log(event.location)
      location.classList.add('item__location--show');
      location.textContent = event.location;
    } else {
      location.classList.remove('item__location--show');
      location.textContent = '';
    }

    if (event.description) {
      console.log(event.description)
      description.classList.add('item__description--show');
      description.textContent = event.description;
    } else {
      description.classList.remove('item__description--show');
      description.textContent = '';
    }
  }


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
    remove: removeItem,
    clear: clearItems,
    update: updateItem,
  }

})();
