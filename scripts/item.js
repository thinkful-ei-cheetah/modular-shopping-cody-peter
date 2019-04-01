/* eslint-disable indent */
/* eslint-disable strict */
/* global shoppingList $ cuid */

const item = (function(){
const validateNames = function(name){
    if(!name){
        throw new Error('Name Does Not Exist');
    }
};
return {
    validateNames,
 };

}());