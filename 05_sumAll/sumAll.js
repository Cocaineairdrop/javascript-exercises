const sumAll = function(start, end) {
    let array = [start, end];
    let x = start;
    let y = end;
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }

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
    
    const sum = eval(array.join('+'));

    if (sum > 0) {
        return sum;
      } else {
        return "ERROR";
      }
};

// Do not edit below this line
module.exports = sumAll;
