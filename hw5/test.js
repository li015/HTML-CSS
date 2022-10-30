// const http = require('http');
// const PORT = process.env.PORT || 3001;
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// });
// server.listen(PORT, function() {
// console.log
// (`Server listening on: http://localhost:${PORT}`);
// });


const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})