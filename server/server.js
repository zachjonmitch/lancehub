const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 8080

// Static files
app.use(express.static('build'));

// Serve HTML file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/../build/index.html');
});

// Socket connection
io.on('connection', (socket) => {
    console.log('made socket connection');
});

http.listen(PORT, () => {
    console.log("Listening on port 8080");
});