/* eslint-disable indent */
/* eslint-disable strict */
/* global shoppingList $ cuid */

const store = (function() {

    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ]; 
      let hideChecked = false; 
      let searchTerm = '';
    
    const addItem = function(itemName) {
      try {
        // eslint-disable-next-line no-undef
        ITEMS.validateNames(itemName);
      
        this.items.push(ITEMS.create(itemName));
      } catch(error) {
        console.log('Cannot add item: ' + error.message);
      }
    // });
    shoppingList.render();
    }; 

    const findById = function(id) {items.find(id => items.id === id);};


    const findAndUpdateName = function(id, newName) {
      try {
        ITEMS.validateNames(newName);
        let found = findById(id); 
        found.items.name = newName;
      
      } catch(error) {
        console.log('Cannot update name' + error.message);
      }
    // });
    
    }; 

    const findAndToggleChcked = function(id) {
      let found = findById(id); 
      found.checked = !found.checked;
    };






    return {items, hideChecked, addItem, findAndUpdateName, findAndToggleChcked, findById };
    
    }());

const foo = 'bar';
// console.log(findById())
