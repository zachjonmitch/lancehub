const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

// Socket.io server connection
io.on('connection', (socket) => {
  console.log('made socket connection');
  socket.on('message', (body) => {
    socket.broadcast.emit('message', {
      body,
      from: socket.id.slice(8)
    });
  });
});

http.listen(3001, () => {
  console.log('Listening on port 3001');
});
