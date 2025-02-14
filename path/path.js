const path = require('path');

console.log(__filename);
console.log(__dirname);

console.log(path.join(__filename, '/something/path'));
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));
console.log(path.isAbsolute(__filename));

console.log(path.resolve('__dirname', 'data.json'));
