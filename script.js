const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const completedList = document.getElementById("completed-list");

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new task item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add a delete icon
    const deleteSpan = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash"); // Adding Font Awesome trash icon classes
    deleteSpan.appendChild(trashIcon);
    li.appendChild(deleteSpan);

    // Add event to mark task as completed
    li.addEventListener("click", function () {
        li.classList.toggle("checked");

        if (li.classList.contains("checked")) {
            // Move the task to the completed list
            completedList.appendChild(li);
        } else {
            // Move the task back to the main list
            taskList.appendChild(li);
        }
    });

    // Add delete functionality to the task
    deleteSpan.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent task completion event
        li.remove();
    });

    // Add the new task to the "Tasks for the Day" list
    taskList.appendChild(li);

    // Clear input box
    inputBox.value = "";
}

// Optional: Allow adding tasks with Enter key press
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
