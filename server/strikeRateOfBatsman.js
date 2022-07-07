const fs = require('fs');

const dataOfDeliveries = fs.readFileSync('../data/deliveries.json', { encoding: 'utf-8' });
const deliveries = JSON.parse(dataOfDeliveries);

const dataOfMatches = fs.readFileSync('../data/matches.json', { encoding: 'utf-8' });
const matches = JSON.parse(dataOfMatches);

const year = matches.reduce((acc, curr) => {
    if (!acc[curr['id']]) {
        acc[curr['id']] = curr['season'];
    }
    return acc;
}, {});

const result = deliveries.reduce((acc, curr) => {
    let batsman = curr['batsman'];
    let runs = curr['batsman_runs'];
    let del_year = year[curr['match_id']];
    if (!acc.hasOwnProperty(del_year)) {
        acc[del_year] = {};
    }
    if (!acc[del_year].hasOwnProperty(batsman)) {
        acc[del_year][batsman] = { 'delivery': 1, 'totalRuns': Number(runs) };
    }
    else {
        acc[del_year][batsman]['delivery'] += 1;
        acc[del_year][batsman]['totalRuns'] += Number(runs);
    }
    return acc;
}, {})

const strikeRate = Object.entries(result).reduce((acc, curr) => {
    acc[curr[0]] = {};
    const strike = Object.entries(curr[1]).reduce((acc, curr) => {
        acc[curr[0]] = (curr[1]['totalRuns'] / curr[1]['delivery']) * 100;
        return acc;
    }, {})
    acc[curr[0]] = strike;
    return acc;
}, {})

console.log(strikeRate);