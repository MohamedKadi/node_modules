var fs = require('fs');

/**
 *
 * @param path
 * @param encoding?
 * @param callback it gets triggered after reading the file
 */
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  var daata = '';
  daata = data;
  /**
   *
   * @param path
   * @param data
   * @param callback it gets triggered after writing in the file
   */
  fs.writeFile('./writefile.txt', daata, (err) => {
    console.log('done!');
  });
  fs.appendFile('./appendFile.txt', '\n' + daata, (err) => {
    console.log('done appending!');
  });
});
