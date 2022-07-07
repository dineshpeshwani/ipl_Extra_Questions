const fs =  require('fs');
const data = fs.readFileSync('../data/matches.json', {encoding : 'utf-8'});
const matches = JSON.parse(data);

const result =  matches.reduce((acc, curr) => {
    let year =  curr['season'];
    if(!acc[year]){
        acc[year] = 0;
        acc[year] += 1;
    }else{
        acc[year] += 1;
    }
    return acc;
}, {})
console.log(result);
