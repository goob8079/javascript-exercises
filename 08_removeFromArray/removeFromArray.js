const removeFromArray = function(arr, value1, value2 = null, value3 = null, value4 = null) {

    let newArr = [] 
    const toRemove = [value1, value2, value3, value4];
    newArr = arr.filter(item => !toRemove.includes(item));

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
