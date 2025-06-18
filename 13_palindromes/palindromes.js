const palindromes = function (str) {
    // split the string into an array
    let strArr = str.toLowerCase()
                    .replace(/[^a-z0-9]/g, '') // remove all punctuation
                    .split('');

    for (let i = 0; i < strArr.length / 2; i++ ) {
        if (strArr[i] !== strArr[strArr.length - 1 - i]) {
            return false;
        } 
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
