const inputBox = document.getElementById("input-box");
const dueDateInput = document.getElementById("due-date");
const taskList = document.getElementById("task-list");
const completedList = document.getElementById("completed-list");

// Fetch tasks from localStorage or the server
function fetchTasks() {
    const tasksFromStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksFromStorage.forEach(task => {
        if (task.completed) {
            createTaskElement(task, completedList);
        } else {
            createTaskElement(task, taskList);
        }
    });
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a task to the DOM and handle interactions
function createTaskElement(task, listElement) {
    const li = document.createElement("li");
    li.textContent = task.text;

    // Handle due date and other properties if needed
if (task.dueDate) {
        const taskDate = new Date(task.dueDate);
        const now = new Date();
        if (taskDate < now) {
            li.classList.add("reminder");
        }
}

    // Add Complete Button to Task
    const completeButton = document.createElement('button');
    completeButton.textContent = "Complete";
    completeButton.addEventListener('click', () => completeTask(task, li));

    // Add delete functionality
    const deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fas fa-trash"></i>';
    deleteIcon.addEventListener('click', () => deleteTask(task, li));

    // Append the button and delete icon to the list item
    li.appendChild(completeButton);
    li.appendChild(deleteIcon);

    // Add task to the correct list (either "Tasks for the Day" or "Completed Tasks")
    listElement.appendChild(li);
}

// Handle adding a new task
function addTask() {
    const taskText = inputBox.value.trim();
    const dueDate = dueDateInput.value;

if (!taskText) return;

    const newTask = {
        text: taskText,
        dueDate: dueDate || null,
        completed: false
};


 
    // Fetch current tasks from localStorage and add new task
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);

    // Save updated tasks to localStorage
    saveTasks(tasks);

    // Clear input fields
    inputBox.value = "";
    dueDateInput.value = "";

    // Update the task list in the DOM
    createTaskElement(newTask, taskList);
}

// Handle deleting a task
function deleteTask(taskToDelete, liElement) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Remove the task from tasks array
    tasks = tasks.filter(task => task.text !== taskToDelete.text);

    // Save updated tasks to localStorage
    saveTasks(tasks);

    // Remove the task from the DOM
    liElement.remove();
}

// Handle completing a task
function completeTask(taskToComplete, liElement) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Mark the task as completed in the tasks array
    tasks = tasks.map(task => {
    if (task.text === taskToComplete.text) {
            task.completed = true;
        }
        return task;
   });

    // Save updated tasks to localStorage
    saveTasks(tasks);

    // Move task to the completed list and update its appearance
    liElement.classList.add('checked');
    completedList.appendChild(liElement);

    // Remove "Complete" button since the task is now completed
    liElement.querySelector('button').remove();
}

// Add event listener for adding tasks
const addButton = document.querySelector("button");
addButton.addEventListener("click", addTask);

document.addEventListener('DOMContentLoaded', () => {
    fetchTasks(); // Fetch tasks from localStorage when the page loads
});



