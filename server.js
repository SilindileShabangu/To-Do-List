// Import the http module
const http = require('http');
const express = require('express')
const app = express()

// Sample data to send as JSON
const tasks = [
	{ id: 1, text: "Task 1", dueDate: "2024-11-15" },
	{
		id: 2,
		text: "Task 2",
		dueDate: "2024-11-16"
	},
	{
		id: 3,
		text: "Task 3",
		dueDate: "2024-11-10"
	}
]


// Define the server configuration

const port = 3000;


// Create the server
const server = http.createServer((req, res) => {
  JSON.stringify(tasks)
  
  res.writeHead(200, {'Content-Type':'application/json'})

  // Send a response to the client
  res.end(`${tasks}`);
});

app.get('/api/fetch', (request, response) => {  
  response.json(tasks)
})

app.post('/api/create-task', (request, response) => {
  const toDoList = request.body
  console.log(toDoList)
  response.send({msg: 'New task created'})
})

// Start the server on the specified hostname and port
app.listen(port, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Server running on port: ${port}`);
  
});
