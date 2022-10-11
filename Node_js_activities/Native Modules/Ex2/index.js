const fs = require('fs');

const content = 'Hello World!';

fs.writeFile('helloworld.txt', content, err => {
  if (err) {
    console.error(err);
  }
  console.log('Hello world! > helloworld.txt')
  // file written successfully
});

