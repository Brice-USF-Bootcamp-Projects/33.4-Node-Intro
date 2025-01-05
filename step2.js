const fs = require('fs')
const process = require('process')


// fs.readFile('one.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('ERROR: ', err);
//         process.kill(1)
//     }
//     console.log('DATA....', data)
// })

const cat = (path) => {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        console.error(`Error reading ${path}: ${err}`);
        process.exit(1);
      } else {
        console.log(data);
      }
    });
  }
  
  cat(process.argv[2]);

