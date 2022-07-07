const fs =  require('fs');
const data = fs.readFileSync('../data/matches.json', {encoding : 'utf-8'});
const matches = JSON.parse(data);

const result = matches.reduce((acc, curr)=>{
    let year = curr['season'];
    let winner = curr['winner'];
    if(!acc[year]){
        acc[year] = {};
        if(!acc[year][winner]){
            acc[year][winner] = 0;
            acc[year][winner] += 1;
        }else{
            acc[year][winner] += 1;
        }
    }else{
        if(!acc[year][winner]){
            acc[year][winner] = 0;
            acc[year][winner] += 1;
        }else{
            acc[year][winner] += 1;
        }
    }
    return acc;
}, {})

console.log(result);