/* eslint-disable indent */
/* eslint-disable strict */
/* global $ cuid */


const ITEMS = (function(){
const validateNames = function(name){
    if(!name){
        throw new Error('Name Does Not Exist');
    }
};




const create = function(name){
    return {
        id : cuid(),
        'name' : name,
        checked : false
    } ;
};
return {
    validateNames, create
 };

}());

