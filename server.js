const express = require('express');
const serveStatic = require('serve-static');
const socket = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log("Listening to Port: ", port);
});

// Socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log('Connected socket', socket.id);

    socket.on('task', (data) => {
        console.log(data);
        io.sockets.emit('task', data);
    });
});