// Modules required included
const fs = require('fs');
const csv = require('csvtojson')

// Converting Deliveries.csv to JSON and saving into data folder
const csvFilePath = '../data/deliveries.csv';
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync('../data/deliveries.json', JSON.stringify(jsonObj), (err, data) => {
      if (err) {
        console.log("Error :", err);
      } else {
        console.log("File Created");
      }
    })
  });

// Converting Matches.csv to JSON and saving into data folder
const csvMatchesPath = '../data/matches.csv';
csv()
  .fromFile(csvMatchesPath)
  .then((jsonObj) => {
    fs.writeFileSync('../data/matches.json', JSON.stringify(jsonObj), (err, data) => {
      if (err) {
        console.log("Error :", err);
      } else {
        console.log("File Created");
      }
    })
  });
