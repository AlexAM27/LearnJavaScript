/*let js = 'amazing';
console.log(40 + 10 + 23 - 10);

let firstName = 'Alex';
console.log(firstName);

let country = 'Germany';
let continent = 'Europa';
let population = '83000000';

console.log(country);
console.log(continent);
console.log(population);
console.log(true);

console.log(typeof true);
console.log(typeof 'string');
console.log(typeof 12);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

// // can be changed
// let age = 30;
// age = 31;

// // cann't be changed
// const bithday = 1990;

// // not use(old)
// var job = 'programmer';
// job = 'cleaner'

// const language = 'Geramn';
// const continent = 'Europe';
// let population = '85000000';


// console.log(3 ** 3);

// console.log('jonas' + ' ' + 'smith');

// const marksHeight = 1.81;
// const johnsHeight = 1.76;
// const marksWeight = 85;
// const johnsWeight = 88;

// const marksBmi = marksWeight / marksHeight ** 2;
// console.log(marksBmi);

// const johnsBmi = johnsWeight / johnsHeight ** 2;
// console.log(johnsBmi);

// const markHigherBMI = marksBmi > johnsBmi;
// console.log(markHigherBMI);


// const firstName = 'Alex';
// const job = 'entwickler';
// const birtYear = '1987';
// const year = '2021';

// const alex = "I'm " + firstName + ", a " +
//     (year - birtYear) + " years old " + job;
// console.log(alex);


// const alexNew = `I'm ${firstName}, 
// a ${year - birtYear} years old ${job}`;
// console.log(alexNew);

// const age = 90;

// if (age >= 18) {
//     console.log(`You can have a driving license`)
// } else {
//     console.log(`You can have a driving license after ${18 - age} years`)

// }

// const year = 1991;
// let century;
// if (year > 1900) {
//     century = 20;
// }

// const marksHeight = 1.81;
// const johnsHeight = 1.76;
// const marksWeight = 85;
// const johnsWeight = 88;

// const marksBmi = marksWeight / marksHeight ** 2;

// const johnsBmi = johnsWeight / johnsHeight ** 2;

// if (marksBmi > johnsBmi) {
//     console.log(`Mark's BMI(${marksBmi}) is higher than John's(${johnsBmi})!`);
// } else {
//     console.log(`John's BMI(${johnsBmi}) is higher than Mark's!(${marksBmi})`)
// }

// //type conversion
// const inputYear = '1991';
// console.log(inputYear + 19);
// console.log(Number(inputYear) + 19);

// console.log(String(23));

// //type coercion
// console.log('I am ' + 23 + ' years old');

// console.log('9 + 5')

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(`i'm`);

// const age = 19;
// if (age === 18) {
//     console.log(`true`);
// }

// const numNeighbours = Number(prompt(`How many neighbour countries does your country 
// have?`));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`'More than 1 border`);
// } else {
//     console.log(`No borders!`);
// }

// const isLanguageEnglish = true;
// const population = 500;
// const isNotIsland = true;

// if (isLanguageEnglish && population < 50 && isNotIsland) {
//     console.log(`This land is great for Sarah`);
// } else {
//     console.log(`This land is not for Sarah`);
// }

// const averageScoreDolphins = (96 + 108 + 96) / 3;
// console.log(averageScoreDolphins);
// const averageScoreKoalas = (96 + 108 + 97) / 3;
// console.log(averageScoreKoalas);

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//     console.log(`Dolphins win with ${averageScoreDolphins}`);
// } else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
//     console.log(`Koalas win with ${averageScoreKoalas}`);
// } else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100) {
//     console.log(`Draw with ${averageScoreDolphins}`);
// } else {
//     console.log(`You're all loosers`);
// }

// const day = `thurday`;

// switch (day) {
//     case `monday`:
//         console.log(`monday`);
//         break;
//     case `thursday`:
//         console.log(`th`);
//         break;
//     default:
//         console.log(`bo`);
// }

// const language = `enlish`;

// switch (language) {
//     case `chinese`:
//         console.log(`MOST number of native speakers!`);
//         break;
//     case `spanish`:
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case `english`:
//         console.log(`3rd place`);
//         break;
//     case `hindi`:
//         console.log(`Number 4`);
//         break;
//     case `arabic`:
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Great language too :D`);
// }

// const population = 34;

// const average = population > 33 ? `above` : `below`;

// console.log(`Portugal's population is ${population > 33 ? `above` : `below`} average`);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`)