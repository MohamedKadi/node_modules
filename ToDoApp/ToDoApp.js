const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
//the async function lighnswlo biha o trj3 lina lvalue li luser ghy3ti f input
const askQuestion = async (query) => {
  return new Promise((resolve) => {
    return readline.question(query, resolve);
  });
};

async function ToDoApp() {
  do {
    var num = await askQuestion(
      'type 1: To Add A New Task\ntype 2: To remove a Task\ntype 3: to Edit A Task\ntype 4: to exit\n'
    );

    if (num === '1') {
      var task = {};
      var nameTask = await askQuestion('name of the task: ');
      var priorityTask = await askQuestion(
        'priority of the task\n 1-Low 2-Medium 3-High: '
      );
      var deadLine = await askQuestion('Deadline of the task yyyy-MM-dd: ');

      task.task = nameTask;
      if (priorityTask === '1') {
        task.priority = 'Low';
      } else if (priorityTask === '2') {
        task.priority = 'Medium';
      } else {
        task.priority = 'High';
      }

      task.dueDate = deadLine;
      task.completed = false;
      fs.readFile('./data.json', 'utf-8', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        const arr = JSON.parse(data);
        task.id = arr.length + 1;
        arr.push(task);
        fs.writeFile('./data.json', JSON.stringify(arr, null, 2), (err) => {
          if (err) {
            console.log(err);
            return;
          }
        });
      });
      console.log('added successfully');
    }
    if (num === '4') {
      readline.close();
      return;
    }
  } while (true);
}
ToDoApp();
