let nodeInput = process.argv.splice(2);
let URL = nodeInput[0];
let path = nodeInput[1];
const fs = require('fs');
const request = require ('request');

request(URL, function (error, response, body) {
  fs.writeFile(path, body, function(err) {
    if (err) {
      return console.log("Error");
    }
    console.log(`Downloaded and saved 3261 bytes to ${path}`);
  })
})