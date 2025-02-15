const crypto = require('node:crypto');

const secret = 'mohamedAitElkadi';

const hash = crypto
  .createHmac('sha256', secret)
  .update('welcome') //content tha tyou need to hash
  .digest('hex');
console.log(hash);
