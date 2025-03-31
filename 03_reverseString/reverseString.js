const reverseString = function(word) {
    var splitWord = word.split("");
    var reverseArray = splitWord.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;

/* split() - splits the string into letters into array
i.e. hello = ["h", "e", "l", "l", "o"]

reverse() - reverses the array elements

join() - join all elements in array*/
