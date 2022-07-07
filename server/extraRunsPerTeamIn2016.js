const fs =  require('fs');

const dataOfDeliveries = fs.readFileSync('../data/deliveries.json', {encoding : 'utf-8'});
const deliveries = JSON.parse(dataOfDeliveries);

const dataOfMatches = fs.readFileSync('../data/matches.json', {encoding : 'utf-8'});
const matches = JSON.parse(dataOfMatches);

const matchId = matches.filter(DataOfYear => {
    if(DataOfYear['season'] == 2016)
    return DataOfYear;
}).map((DataOfYearId) => {
    return DataOfYearId.id;
})

const result = deliveries.reduce((acc, curr) => {
    let team = curr['bowling_team'];
    let extraRuns = curr['extra_runs'];
    if(matchId.includes(curr['match_id'])){
        if(!acc[team]){
            acc[team] = 0;
            acc[team] += Number(extraRuns);
        }
        else{
            acc[team] += Number(extraRuns);
        }
    }
    return acc;
}, {})

console.log(result);


