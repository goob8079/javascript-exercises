const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear();

    let agesArr = arr.map(person => ({
        name: person.name,
        age: (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth
    }));

    let oldest = agesArr.sort((a, b) => a.age - b.age);

    return oldest[oldest.length -1];
};

// Do not edit below this line
module.exports = findTheOldest;
