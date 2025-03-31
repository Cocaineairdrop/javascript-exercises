const removeFromArray = function(array, ...excluded) {
    return array.filter(element => !excluded.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

/*The includes() method of Array instances determines 
whether an array includes a certain value among its 
entries, returning true or false as appropriate. 

The filter() method of Array instances creates a 
shallow copy of a portion of a given array, filtered 
down to just the elements from the given array that 
pass the test implemented by the provided function.*/