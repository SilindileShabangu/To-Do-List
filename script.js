const inputBox = document.getElementById("input-box");
const dueDateInput = document.getElementById("due-date");
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

    // Add a delete icon (trash bin using Font Awesome)
    const deleteSpan = document.createElement("span");
    const trashIcon = document.createElement("i");  // Create the <i> element for the icon
    trashIcon.classList.add("fas", "fa-trash");  // Add Font Awesome trash bin icon classes
    deleteSpan.appendChild(trashIcon);  // Append the trash icon to the span
    deleteSpan.classList.add("delete");  // Add 'delete' class for styling
    li.appendChild(deleteSpan);  // Append the delete span to the list item

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

    // Add delete functionality to the task (removes the task when clicked)
    deleteSpan.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent task completion event
        li.remove();  // Remove the task item
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
