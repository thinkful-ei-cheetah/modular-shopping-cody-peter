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

    const findById = function(id) {
      let found = items.find(item => item.id === id);
      return found;
    };



    const findAndUpdateName = function(id, newName) {
      try {
        ITEMS.validateNames(newName);
        const found = findById(id); 
        found.name = newName;
      
      } catch(error) {
        console.log('Cannot update name' + error.message);
      }
    // });
    
    }; 

    const findAndToggleChecked = function(id) {
      let found = findById(id);
      found.checked = !found.checked ;
    };

    const findAndDelete =function(id){
      let deleted = findById(id);
      store.items.splice(deleted, 1);
    };






    return {items, hideChecked, addItem, findAndUpdateName, findAndToggleChecked, findById ,findAndDelete
    };
    
    }());

const foo = 'bar';
// console.log(findById());
