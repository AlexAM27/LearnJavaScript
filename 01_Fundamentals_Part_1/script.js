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

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value 
// ${bill + tip}`)

// function domainName(url) {
//  const dotsAmount = url.match(/\./g).length ?? null;
//  console.log(dotsAmount);
//  let domain;
//  if(!dotsAmount) {
//    if(url.search('//') !== -1) {
//      domain = url.substring(url.lastIndexOf('/') + 1, url.length);
//    } else {
//      domain = url;
//    }
//  }
//  if(dotsAmount === 1) {
//   if(url.search('www.') !== -1) {
//     domain = url.substring(url.indexOf('.') + 1, url.length);
//   } 
//   if(url.search('//') !== -1) {
//     url = url.slice(0, url.indexOf('.'));
//     console.log(url);
//     domain = url.substring(url.lastIndexOf('/') + 1, url.length);
//   }
//  }
//  return domain;
// }

// console.log(domainName('http://google'));

// function invert(array) {
  
//    return array.map(el => el * -1);
// }
// console.log(invert([1,2,3,4,5]));

// let isnum = /^\d+$/.test('-123');
// console.log(isnum);

// function century(year) {
//   if(year === 0) {
//     return 0;
//   }
//   if(year > 0 && year <= 100 ) {
//     return 1;
//   }
//   if(year > 100) {
//     return Number.isInteger(year / 100) ? (year / 100) - 1 : Math.floor(year / 100) + 1;
//   }
// }

// console.log(century(1900));

// function tribonacci(signature,n){
//   let count = signature.length;
//   let newArr = [];
//   if(n < signature.length) {
//     for(let i = 0; i < n; i++) {
//       newArr.push(signature[i]);
//     }
//   } else {
//     newArr = signature;
//      while(count < n) {
//     newArr.push(getNextNum(signature));
//     count++;
//   }
//   }
//   return newArr;
// }

// function getNextNum(arr) {
//   let num = 0;
//   for(let i = arr.length - 1; i > arr.length - 4; i-- ) {
//     num += arr[i];
//   }
//   return num;
// }

// console.log(tribonacci([1,1,1],1));

// function getMiddle(s) {
//   let newS = '';
//   if(Number.isInteger(s.length / 2)) {
//     newS += s[s.length / 2 - 1] + s[s.length / 2];
//   } else {
//     newS += s[Math.floor(s.length / 2)];
//   }
//   return newS;
// }

// console.log(getMiddle('testing'));

// function removeChar(str){
//   let newStr = '';
//  for(let i = 1; i < str.length - 1; i++) {
//   newStr += str[i];
//  }
//  return newStr;
//  };


// console.log(removeChar('asi'));
 
// function solution(str, ending){
//   let strEndig = str.substring(str.length - ending.length);
//   return strEndig === ending;
// }

// function solution2(str, ending){
//   return str.endsWith(ending);
// }

// console.log(solution2('anvd', 'vd'));

// function filter_list(l) {
//   const newArr = [];
//   for( let i = 0; i < l.length; i++) {
//     console.log(typeof l[i]);
//     if(typeof l[i] === "number") {
//       newArr.push(l[i]);
//     }
//   }
// }

// console.log(filter_list([1,2,"a","b"]));

// function accum(s) {
//   let str = '';
// 	for(let i = 0; i < s.length; i++) {
//     if(i !== s.length - 1) {
//       str += createW(s[i], i) + '-';
//     } else {
//       str += createW(s[i], i);
//     }
//   }
//   return str;
// }

// function createW(char, i) {
//   let str = '';
//   for(let n = 0; n < i + 1; n++) {
//     if(n === 0) {
//       str += char.toUpperCase();
//     } else {
//       str += char.toLowerCase();
//     }
//   }
//   return str;
// }

// console.log(accum('abcd'));

// function abbrevName(name) {
//   return name.split(' ').map(el => el[0].toUpperCase()).join('.');
// }

// console.log(abbrevName('patrick feeney'));
// const alphabet = [
//     'a', 'b', 'c', 'd', 'e', 'f',
//     'g', 'h', 'i', 'j', 'k', 'l',
//     'm', 'n', 'o', 'p', 'q', 'r',
//     's', 't', 'u', 'v', 'w', 'x',
//     'y', 'z'
//   ];

// function high(x){
//   let maxScore = 0;
//   let wordWithMaxScore;
//   wordsArray = x.split(' ');

//   for( let i = 0; i < wordsArray.length; i++) {
//     let score = 0;
//     const word = wordsArray[i];

//     for(let n = 0; n < word.length; n++) {
//       score += (alphabet.indexOf(word[n]) + 1);
//     }

//     if(score > maxScore) {
//       maxScore = score;
//       wordWithMaxScore = word;
//     }
//   }
//   return wordWithMaxScore;
// }


// console.log(high('man i need a taxi up to ubud'));

// function digitize(n) {
//   return n.toString().split('').map(el => Number(el)).reverse();
// }

// console.log(digitize(945));

// function find_average(array) {
//   let sum = 0;
//   if(array.length !== 0) {
//     array.forEach(element => {
//       sum += element;
//     });
//     return sum / array.length;
//   }
//   return 0;
// }

// console.log(find_average([]));

//return the total number of smiling faces in the array

function countSmileys(arr) {
  let counter = 0;
  arr.forEach(el => {
    if(((el.includes(':') || el.includes(';')) && (el.includes(')') || el.includes('D')))) {
      if(el.length !== 3) {
        counter++;
      } else {
        if((el.includes('-') || el.includes('~'))) {
          counter++;
        }
      }
    }  
  });
  return counter;
}

console.log(countSmileys([':)',':(',':D',':O',':;']));