// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatureArray = [3, -2, -1, 'error', 9, 13, 17, 15, 14, 8, 5];

const calcTempAmplitude = function (tempArray) {
    const temp = createTempArrayWithoutErrors(tempArray);
    console.log(temp);
    return findMaxTemp(temp) - findMinTemp(temp);

};

const createTempArrayWithoutErrors = function (tempArray) {
    const newTempArray = [];
    for (let i = 0; i < tempArray.length; i++) {
        if (!isNaN(tempArray[i])) {
            newTempArray.push(tempArray[i]);
        };
    };
    return newTempArray;
};

const findMaxTemp = function (tempArray) {
    let maxTemp = tempArray[0];
    for (let i = 1; i < tempArray.length; i++) {
        if (tempArray[i] > maxTemp) {
            maxTemp = tempArray[i];
        };
    };
    return maxTemp;
};

const findMinTemp = function (tempArray) {
    let minTemp = tempArray[0];
    for (let i = 1; i < tempArray.length; i++) {
        if (tempArray[i] < minTemp) {
            minTemp = tempArray[i];
        };
    };
    return minTemp;
};

console.log(calcTempAmplitude(temperatureArray));