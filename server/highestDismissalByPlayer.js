const fs = require('fs');

const dataOfDeliveries = fs.readFileSync('../data/deliveries.json', { encoding: 'utf-8' });
const deliveries = JSON.parse(dataOfDeliveries);

const result = deliveries.reduce((acc, curr) => {
    let dismissed = curr['player_dismissed'];
    let bowler = curr['bowler'];
    if (dismissed != "") {
        if (!acc[dismissed]) {
            acc[dismissed] = []
            acc[dismissed][bowler] = 1;
        } else {
            if (!acc[dismissed][bowler]) {
                acc[dismissed][bowler] = 1;
            } else {
                acc[dismissed][bowler] += 1;
            }
        }
    }
    return acc;
}, [])

const sorted = Object.entries(result).reduce((acc, curr) => {
    let res = Object.entries(curr[1]).sort((a, b) => {
        return b[1] - a[1];
    }).slice(0,1);
    acc[curr[0]] = res.flat();
    return acc;
}, [])

const finalSort = Object.entries(sorted).sort((a, b) => {
    return b[1][1] - a[1][1];
}).slice(0, 1);

console.log(finalSort);