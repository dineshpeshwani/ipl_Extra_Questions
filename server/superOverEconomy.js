const fs = require('fs');

const dataOfDeliveries = fs.readFileSync('../data/deliveries.json', { encoding: 'utf-8' });
const deliveries = JSON.parse(dataOfDeliveries);

const result = deliveries.reduce((acc, curr) => {
    if (curr['is_super_over'] == "1") {
        let bowler = curr['bowler'];
        let runs = curr['total_runs'];
        if (!acc[bowler]) {
            acc[bowler] = { 'delivery': 0, 'totalRuns': 0 };
            acc[bowler]['totalRuns'] += Number(runs);
            acc[bowler]['delivery'] += 1;
        }
        else {
            acc[bowler]['totalRuns'] += Number(runs);
            acc[bowler]['delivery'] += 1;
        }

    }
    return acc;
}, {})

const sorted = Object.entries(result).reduce((acc, curr) => {
    acc[curr[0]] = (curr[1]['totalRuns'] / curr[1]['delivery']) * 6;
    return acc;
}, []);

const finalResult = Object.entries(sorted).sort((a, b) => {
    return a[1] - b[1];
}).slice(0, 1);

console.log(finalResult);