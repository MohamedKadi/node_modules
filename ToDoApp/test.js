const inquirer = require('inquirer');

async function editTask() {
  // Example array with a task
  const arr = [{ task: 'Old task value' }];
  const index = 0; // Index of the task to edit

  // Display the old value
  console.log(`Old task: ${arr[index].task}`);

  // Prompt the user with the old value pre-filled
  const { newTask } = await inquirer.prompt([
    {
      type: 'input',
      name: 'newTask',
      message: 'Edit the task:',
      default: arr[index].task, // Pre-fill the old value
    },
  ]);

  // Update the task if the user didn't delete it
  if (newTask.trim() === '') {
    console.log('Task deleted.');
    arr[index].task = ''; // or null
  } else {
    arr[index].task = newTask;
    console.log('Task updated:', arr[index].task);
  }
}

editTask();
