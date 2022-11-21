const request = require('request');
const fs = require('fs');

const webpage = process.argv[2];
const fileToWriteTo = process.argv[3];

request(`${webpage}`, (error, response, body) => {

  if (error) {
    console.log('error: URL invalid.');
  } // Print the error if one occurred
  
  if (response) {
    fs.writeFile(`${fileToWriteTo}`, body, err => {
      
      if (err) {
        console.error(err);
      }

      console.log(`Downloaded and saved ${body.length} bytes to ${fileToWriteTo}`);
      //file written if no error
    });
  }
});

