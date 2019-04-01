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
    
    const addItem = function(itemName) {}; const updateItem = function(id, updateData) {}; const toggleHideCheckedFilter = function() {};
    
    return {items, hideChecked, addItem, updateItem, toggleHideCheckedFilter };
    
    }());

const foo = 'bar';

