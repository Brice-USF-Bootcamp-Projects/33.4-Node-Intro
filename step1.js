const fs = require('fs')


fs.readFile('one1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('ERROR: ', err);
        process.kill(1)
    }
    console.log('DATA....', data)
})


