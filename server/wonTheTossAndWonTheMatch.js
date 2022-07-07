const fs =  require('fs');

const dataOfMatches = fs.readFileSync('../data/matches.json', {encoding : 'utf-8'});
const matches = JSON.parse(dataOfMatches);

const result = matches.reduce((acc, curr) => {
    let tossWinner = curr['toss_winner'];
    let winner = curr['winner'];
    if(!acc[winner]){
        acc[winner] =  0;
        if(winner == tossWinner){
            acc[winner] += 1;
        }
    }else{
        if(winner == tossWinner){
            acc[winner] += 1;
        }
    }
    return acc;
}, [])

console.log(result);