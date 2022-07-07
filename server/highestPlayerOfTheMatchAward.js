const fs = require('fs');

const dataOfMatches = fs.readFileSync('../data/matches.json', { encoding: 'utf-8' });
const matches = JSON.parse(dataOfMatches);

const result = matches.reduce((acc, curr) => {
    let player = curr['player_of_match'];
    let season = curr['season'];
    if (!acc[season]) {
        acc[season] = [];
        if (!acc[season][player]) {
            acc[season][player] = 0;
            acc[season][player] += 1;
        } else {
            acc[season][player] += 1;
        }
    } else {
        if (!acc[season][player]) {
            acc[season][player] = 0;
            acc[season][player] += 1;
        } else {
            acc[season][player] += 1;
        }
    }
    return acc;
}, {})


const sorted = Object.keys(result).reduce((acc, curr) => {
    if (!acc.hasOwnProperty(curr)) {
        acc[curr] = []
        acc[curr] = (Object.entries(result[curr]).sort((a, b) => b[1] - a[1]))
    }
    return acc;
}, {})


const finalResult = Object.keys(sorted).reduce((acc, curr) => {
    acc[curr] = sorted[curr].filter((data) =>
        data[1] == sorted[curr][0][1]
    )
    return acc;
}, {});

console.log(finalResult);   
