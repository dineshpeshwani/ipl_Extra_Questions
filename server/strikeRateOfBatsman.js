const fs =  require('fs');

const dataOfDeliveries = fs.readFileSync('../data/deliveries.json', {encoding : 'utf-8'});
const deliveries = JSON.parse(dataOfDeliveries);

const result = deliveries.reduce((acc, curr)=>{
    
}, {})

