const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value == '') {
    alert("You must write something!");
    } 
    else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";  // The '×' character to delete the task
    li.appendChild(document.createTextNode(inputBox.value));  // Add task text to the li element
    li.appendChild(span);
    listContainer.appendChild(li);

    // Clear input box after adding the task
    inputBox.value = "";
    saveData();
  }
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") { 
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Initialize tasks when the page loads
showTask();

