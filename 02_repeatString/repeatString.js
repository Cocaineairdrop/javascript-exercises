const repeatString = function(string, num) {
    if (num >= 0) {
        let str = "";
        for (let i = 0; i < num; i++) {
            str += string;
        }
        return str;
    } else {
        return "ERROR";
    }
};
// Do not edit below this line
module.exports = repeatString;

/* The += operator can also be used for string 
concatenation. If str = "Hello", then str += " World" 
is equivalent to str = str + " World", resulting in str 
being assigned the value "Hello World".*/