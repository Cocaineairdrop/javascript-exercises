const sumAll = function(start, end) {
    let array = [start, end];
    let x = start;
    let y = end;

    if (x < y) {
        while (x < (y-1)) {
            array.push(x + 1);
            x++;
        } 
    } else {
        while (y < (x-1)) {
            array.push(y + 1);
            y++;
        }
    }
   
    const arrayToSum = array;
    
    const sum = eval(arrayToSum.join('+'));

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
