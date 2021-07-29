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

const averageScoreDolphins = (96 + 108 + 96) / 3;
console.log(averageScoreDolphins);
const averageScoreKoalas = (96 + 108 + 97) / 3;
console.log(averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Dolphins win with ${averageScoreDolphins}`);
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log(`Koalas win with ${averageScoreKoalas}`);
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log(`Draw with ${averageScoreDolphins}`);
} else {
    console.log(`You're all loosers`);
}