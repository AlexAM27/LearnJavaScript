'use strict';

// function logger() {
//     console.log('my name is Alex');
// }

// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// fruitProcessor(3, 4);

// console.log(fruitProcessor(3, 4));

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const russia = describeCountry('Russia', 143, 'Moscow');
// const germany = describeCountry('Germany', 83, 'Berlin');
// const finland = describeCountry('Finland', 6, 'Helsinki');

// console.log(russia);
// console.log(germany);
// console.log(finland);

// Function declaration
// function calcAge1(birtYear) {
//     // const age = 2037 - birtYear;
//     return 2021 - birtYear;
// }

// const age1 = calcAge1(1987);
// console.log(age1);

// // function expression
// const calcAge2 = function (birtYear) {
//     return 2021 - birtYear;
// }

// const age2 = calcAge2(1988);

// console.log(age1, age2);

// function percentageOfWorld1(population) {
//     return population/7900 * 100;
// }

// console.log(percentageOfWorld1(1441));

// const persenrageOfWorld2 = function (population) {
//     return population/7900 * 100;
// }

// console.log(persenrageOfWorld2(1441));

const calcAge3 = birthYear => 2021 - birthYear;
console.log(calcAge3(1987));


const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

const yearsUntilRetirement2 = (birthYear, name) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${name} and ${retirement}`;
}

console.log(yearsUntilRetirement(1987));
console.log(yearsUntilRetirement2(1987, 'Alex'));

const percentageOfWorld3 = population => population/7900 * 100;
console.log(percentageOfWorld3(1441));