const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // if divisible by 4, 100, and 400, is leap year
            }
            return false; // if divisible by 4 and 100, not leap year
        }
        return true; // if divisble by 4 and not 100, is leap year
    }
    return false; // if not divisible by 4, not leap year
};

// Do not edit below this line
module.exports = leapYears;
