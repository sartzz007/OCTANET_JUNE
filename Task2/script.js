const todoList = document.getElementById('todo-list');
const addTaskForm = document.getElementById('add-task-form');

addTaskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = document.getElementById('new-task').value;
  if (newTask) {
    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.innerText = newTask;
    // Add functionality to remove task (optional)
    // const removeButton = document.createElement('button');
    // removeButton.innerText = 'Remove';
    // removeButton.addEventListener('click', function() {
    //   listItem.remove();
    // });
    // listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
    // Clear the input field
    document.getElementById('new-task').value = '';
  }
});
