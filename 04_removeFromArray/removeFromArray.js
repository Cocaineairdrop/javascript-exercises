const removeFromArray = function(array, ...excluded) {
    return array.filter(element => !excluded.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

/*The includes() method of Array instances determines 
whether an array includes a certain value among its 
entries, returning true or false as appropriate. */