var fs = require('fs');

fs.unlink('./appendFile.txt', (err) => {
  console.log('delete is done succefully!!');
});
