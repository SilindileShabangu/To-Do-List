1 To-Do List Application
Overview
The To-Do List Application is a simple yet effective web-based tool to help you manage and organize your tasks. With an intuitive interface and core functionalities like adding, completing, and deleting tasks, this app makes it easy to stay on top of your to-do list. Tasks are saved in local storage, meaning that they persist even after refreshing the page, offering a seamless user experience.

2 Features
Add Tasks: Quickly add tasks with an optional due date.
Mark as Completed: Easily mark tasks as completed, which will move them to the completed list.
Delete Tasks: Remove tasks from your list if you no longer need them.
Persistent Data Storage: All tasks are stored in the browser's local storage, so they persist even after page reloads.
Screenshots
Main View (with tasks)

3 Completed Tasks View

4 Table of Contents
Technologies Used
Project Setup
How to Use
File Structure
Contributing
License

5 Technologies Used
This project leverages the following technologies:

HTML: 
Defines the structure of the web application,including the task list, buttons, and input fields.
CSS: Provides styling for the interface, including the clipboard design and task list presentation.
JavaScript: Handles the dynamic functionality of the app, including adding tasks, marking tasks as completed, and removing tasks.
Font Awesome: Used for including icons (e.g., for the "Delete" button and "Complete" button) to enhance user experience.
Project Setup

6 To set up the project locally on your machine, follow these steps:

7 Prerequisites
A web browser (Chrome, Firefox, Safari, etc.)
A basic text editor or IDE (e.g., VS Code, Sublime Text)
Optional: Local server environment (if you want to test via a server)
Steps to Run the Project
Clone the Repository

8 Open your terminal and run the following command to clone the repository:
bash
Copy code
git clone https://github.com/SilindileShabangu/To-Do-List.git
Navigate to Project Folder

9 In your terminal, navigate to the project folder:
bash
Copy code
cd to-do-list
Open the Project

Open the project in your text editor:
bash
Copy code
code .
Open the Application in Your Browser

Open the index.html file directly in your browser:
bash
Copy code
open index.html
Or navigate to the folder where the index.html file is located and double-click to open it in your default browser.
Optional: Run on a Local Server

If you are using a local development server (e.g., using Live Server in VS Code or http-server in Node.js), run it:
bash
Copy code
npm install -g http-server   # If using http-server globally
http-server .
Then open http://localhost:8080 (or another port) in your browser.
How to Use
Add a Task
Open the web application.
You will see an input field at the top of the page with a button labeled "Add Task."
Enter the task description in the input field and optionally set a due date using the date picker.
Press the Add Task button or hit Enter on your keyboard to add the task to your to-do list.
The task will appear in the task list below.
Mark a Task as Completed
Once a task is added, you can mark it as completed by clicking on the "Check" icon next to the task.
The task will then move to the completed list section and will have a strikethrough effect to indicate that it is done.
Delete a Task
If you no longer need a task, you can delete it by clicking the "Trash" icon next to the task.
The task will be removed from the list immediately, and no longer appear when you refresh the page.
Persistent Storage
All tasks (both incomplete and completed) are saved in the browser's local storage.
Even if you refresh the page or close and reopen the browser, the tasks will still be available.
File Structure
bash
Copy code
/to-do-list
├── index.html           # Main HTML file for the app
├── style.css            # CSS styles for the app (clipboard design and task lists)
├── app.js               # JavaScript file for the core functionality (adding, deleting, completing tasks)
├── /assets              # Folder for any external assets (images, icons)
│   └── /font-awesome     # Font Awesome icons
├── README.md            # Project README file (this file)
└── .gitignore            # Git ignore file (for ignoring unnecessary files from version control)
index.html: Contains the structure of the page (input fields, task lists, buttons).
style.css: Contains all the styling rules, including clipboard design, colors, fonts, and layout.
app.js: Contains the JavaScript code to manage the tasks. It includes functions for adding tasks, deleting tasks, marking them as completed, and saving them to local storage.
assets/font-awesome: Directory that includes the Font Awesome icons used for the task actions (add, complete, delete).
Contributing
We welcome contributions! Here’s how you can help improve the project:

Fork the repository: Click the "Fork" button at the top right of the repository page.
Clone your fork: Run git clone to get your local copy.
Create a new branch: Create a new branch using git checkout -b your-feature-name.
Make your changes: Update the code as needed, and don’t forget to add tests if you add new features.
Push your changes: Use git push origin your-feature-name to push your changes to your fork.
Create a Pull Request: Go to the original repository and submit a pull request describing your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Font Awesome for the beautiful icons.
Stack Overflow and MDN Web Docs for valuable resources on JavaScript and web development.
