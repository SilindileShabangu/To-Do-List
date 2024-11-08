// Import the http module
const http = require('http');

// Define the server configuration
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response to the client
  res.end('Hello, World!\n');
});

// Start the server on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
