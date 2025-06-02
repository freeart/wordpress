const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Node.js Server</title>
    </head>
    <body>
      <h1>Welcome to My Node.js Server, hehe</h1>
      <p>This is a simple server running on Node.js, listening on port 80.</p>
      <p>Enjoy exploring this basic HTML page served from your local server!</p>
    </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
