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

// const calcAge3 = birthYear => 2021 - birthYear;
// console.log(calcAge3(1987));


// const yearsUntilRetirement = birthYear => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// const yearsUntilRetirement2 = (birthYear, name) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${name} and ${retirement}`;
// }

// console.log(yearsUntilRetirement(1987));
// console.log(yearsUntilRetirement2(1987, 'Alex'));

// const percentageOfWorld3 = population => population/7900 * 100;
// console.log(percentageOfWorld3(1441));

// const percentageOfWorld = function (population) {
//     return population / 7900 * 100;
// }

// function describePopulation(country, population) {
//     const percentage = Number(percentageOfWorld(population).toFixed(1));
//     return `${country} has ${population} million people
//     which is about ${percentage}`;
// }

// const populationChina = describePopulation('China', 1441);

// console.log(populationChina);


// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const averageDolphins = calcAverage(85, 54, 41);
// const averageKoalas = calcAverage(23, 35, 27);

// const checkWinnwer = function (averageDolph, averageKoalas) {
//     if (averageDolph >= averageKoalas * 2) {
//         return `Dolphins win(${averageDolph} vs. ${averageKoalas})`;
//     } else if (averageKoalas >= averageDolph * 2) {
//         return `Koalas win(${averageDolph} vs. ${averageKoalas})`;
//     } else {
//         return `Nobody win`;
//     }
// }

// console.log(checkWinnwer(averageDolphins, averageKoalas));

// const friend1 = 'Michael';
// const friend2 = 'Peter';
// const friend3 = 'Alex';

// const friends = ['Michael', 'Peter', 'Alex'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(years[0]);

// const population = new Array(84, 54, 96, 1474);
// console.log(population.length === 4);

// const persenrageOfWorldArray = new Array(percentageOfWorld(population[0]), percentageOfWorld(population[1]),
//     percentageOfWorld(population[2]), percentageOfWorld(population[3]));

// console.log(persenrageOfWorldArray);

// const friends = ['Michael', 'Peter', 'Alex'];

// friends.push('Jay'); //end of array
// console.log(friends);

// friends.unshift('John');// start of array
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.push(13);
// console.log(friends.includes('13'));

// const neighbours = new Array('Austria', 'France', 'Poland', 'Czechien', 'Switzland');

// neighbours.push('Utopia');
// neighbours.pop('Utopia');

// if (neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf('Poland')] = 'Sweden';
// console.log(neighbours);

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(100));

// const bills = new Array(125, 555, 44);
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
// console.log(bills);
// console.log(tips);
// console.log(total);

// const obj = {
//     firstName: 'Jonas',
//     lastName: 'Schmitmann',
//     age: 2021 - 1987,
//     job: 'teacher',
//     friends: ['Micha', 'Aka47', 'Steve']
// };

// console.log(obj.lastName);
// console.log(obj['firstName']);

// const nameKey = 'Name';
// console.log(obj['first' + nameKey]);

// // const askMe = prompt('What do you want to know about me?');

// // if (obj[askMe]) {
// //     console.log(obj[askMe]);
// // } else {
// //     console.log(`I don't do that`);
// // }

// obj.location = 'Germany';
// obj['twitter'] = '@jonasx';
// console.log(obj);

// console.log(`${obj['firstName']} has ${obj.friends.length} and his best friend is ${obj.friends[0]}`)

// const myCountry = {
//     country: 'Germany',
//     capital: 'Berlin',
//     language: 'german',
//     population: 83,
//     neighbours: new Array('Austria', 'France', 'Poland', 'Czechien', 'Switzland')
// };

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neghbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population = myCountry.population + 2;
// console.log(myCountry.population);

// myCountry['population'] = myCountry.population - 2;
// console.log(myCountry.population);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmitmann',
//     age: 1991,
//     job: 'teacher',
//     friends: ['Micha', 'Aka47', 'Steve'],
//     hasdriverslicense: true,

//     summary: function () {
//         this.jonasSummary = `${this.firstName} has ${this.friends.length} and his best friend is ${this.friends[0]}`;
//         return this.jonasSummary;
//     }
// };
// console.log(jonas.summary());

// console.log(jonas.jonasSummary);

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         return Number(this.mass / this.height ** 2).toFixed(1);
//     }
// };

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         return Number(this.mass / this.height ** 2).toFixed(1);
//     }
// };

// const marksBmi = mark.calcBMI();
// const johnsBmi = john.calcBMI();

// const checkBmi = function (marksBmi, johnsBmi) {
//     if (marksBmi > johnsBmi) {
//         return `${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s (${john.calcBMI()})!`;
//     } else if (marksBmi < johnsBmi) {
//         return `${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s (${mark.calcBMI()})!`;
//     } else {
//         return `${john.firstName}'s BMI (${john.calcBMI()}) equals ${mark.firstName}'s (${mark.calcBMI()})!`;
//     }
// };

// console.log(checkBmi(marksBmi, johnsBmi));

// const myCountry = {
//     country: 'Germany',
//     capital: 'Berlin',
//     language: 'German',
//     population: 83,
//     neighbours: ['Austria', 'Switzland', 'France', 'Poland'],

//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
//         and a capital called ${this.capital}.`;
//     },

//     checkIsIsland: function () {
//         this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false;
//     }
// };

// console.log(myCountry.describe());
// myCountry.checkIsIsland();
// console.log(myCountry);


// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// };

// const listOfNeighbours = new Array(['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']);
// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let y = 0; y < listOfNeighbours[i].length; y++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//     }
// };

function solution(str) {
    const arrayStr = new Array();
    if (str.length % 2 === 0) {
        for (let x = 0; x < str.length; x++) {
            arrayStr.push(str[x] + str[x + 1]);
            x++;
        };
    } else {
        for (let x = 0; x < str.length; x++) {
            if (x < str.length - 1) {
                arrayStr.push(str[x] + str[x + 1]);
            } else {
                arrayStr.push(str[x] + '_');
            };
            x++;
        };
    };
    return arrayStr;
};

function solution2(str) {
    const arrayStr = [];
    for (let i = 0; i < str.length; i += 2) {
        let second = str[i + 1] || '_';
        arrayStr.push(str[i] + second);
    }
    return arrayStr;
}

console.log(solution2('abc'));
