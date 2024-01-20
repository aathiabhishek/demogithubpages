// Using DOMContentLoaded to ensure the DOM is fully loaded before script execution
document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements from the DOM
    const addTaskBtn = document.getElementById('addTaskBtn');
    const newTaskInput = document.getElementById('newTask');
    const tasksList = document.getElementById('tasksList');

    // Array to store tasks
    let tasks = [];

    // Function to add a task
    const addTask = () => {
        const taskText = newTaskInput.value.trim(); // Trim whitespace from input
        if (taskText) {
            // Adding the new task to the tasks array
            tasks.push({ text: taskText, completed: false });
            newTaskInput.value = ''; // Clearing the input field
            renderTasks(); // Re-rendering the tasks list
        }
    };

    // Function to render tasks to the DOM
    const renderTasks = () => {
        tasksList.innerHTML = ''; // Clear existing tasks
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'task';
            listItem.textContent = task.text;

            // Optional: Additional functionality can be added here, like delete or complete buttons

            tasksList.appendChild(listItem); // Appending the task to the list
        });
    };

    // Event listeners for adding a task
    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(); // Allow submission by pressing the Enter key
        }
    });
});