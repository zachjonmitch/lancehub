const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const Message = require('./server/models/message');

mongoose.Promise = bluebird;
const db = 'mongodb://localhost/lancehub';
mongoose.connect(db);

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

// Socket.io server connection
io.on('connection', (socket) => {
  console.log('made socket connection');
  socket.on('message', (body) => {
    const newMsg = new Message({
      name: socket.id.slice(8),
      message: body,
    });
    newMsg.save((err) => {
      if (err) throw err;
      console.log('message saved');
      socket.broadcast.emit('message', {
        body,
        from: socket.id.slice(8),
      });
    });
  });
});

http.listen(3001, () => {
  console.log('Listening on port 3001');
});
