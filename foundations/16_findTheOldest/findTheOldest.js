const findTheOldest = function(arr) {
    return arr.sort((a,b)=>a.yearOfDeath-a.yearOfBirth>b.yearOfDeath-b.yearOfBirth?1:-1).reverse()[0]
};

// Do not edit below this line
module.exports = findTheOldest;
