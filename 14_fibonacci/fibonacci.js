const fibonacci = function(num) {
    let total = 0;
    
    if (num < 0) {
        return 'OOPS';
    } else if (num === 1) {
        return 1;
    }
     
    // closed-form expression rounded to nearest whole number
    total = Math.round(
        (
            (((1 + Math.sqrt(5))/2) ** num) - (((1 - Math.sqrt(5))/2) ** num)
        ) / Math.sqrt(5)
    );

    return total;
};

// Do not edit below this line
module.exports = fibonacci;
