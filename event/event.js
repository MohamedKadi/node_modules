const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

eventEmitter.on('sda3', () => {
  console.log('sdaaaaaaaaaaaaa3 lol t7ti ela easter egg');
  //eventEmitter.removeAllListeners();
});

//eventEmitter.emit('sda3');

const startListenner = (number) => {
  console.log(`started ${number}`);
};

//node docs's example
eventEmitter.on('start', startListenner);
eventEmitter.removeListener('start', startListenner);

eventEmitter.emit('start', 14 + 1);

function askName() {
  readline.question('Your name? ', (msg) => {
    if (msg === 'sda3') {
      eventEmitter.emit(msg);
      readline.close();
      return;
    }
    if (msg === 'quit') {
      readline.close();
    } else {
      console.log(`Hey there ${msg}!`);
      askName();
    }
  });
}
askName();
