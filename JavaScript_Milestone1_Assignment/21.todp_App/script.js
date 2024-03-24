const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    let userTask = document.getElementById('user-task').value;

    if (userTask === '') {
        alert('Please enter a task.');
        return;
    }
    const li = document.createElement('li');
    li.innerText = userTask;
    taskList.appendChild(li);
    userTask = '';
}
)