const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('Client disconencted');
    })
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});