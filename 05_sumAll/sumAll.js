const sumAll = function(start, end) {
    let array = [start, end];
    let x = start;
    let y = end;
    
    while (x < (y-1)) {
      array.push(x + 1);
      x++;
    }
    const arrayToSum = array;
    
    const sum = eval(arrayToSum.join('+'));
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
