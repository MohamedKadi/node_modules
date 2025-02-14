const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('sda3', () => {
  console.log('sdaaaaaaaaaaaaa3 lol');
  //eventEmitter.removeAllListeners();
});

eventEmitter.emit('sda3');

const startListenner = (number) => {
  console.log(`started ${number}`);
};

//node docs's example
eventEmitter.on('start', startListenner);
eventEmitter.removeListener('start', startListenner);

eventEmitter.emit('start', 14 + 1);
