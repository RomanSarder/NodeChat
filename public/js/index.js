let socket = io();

socket.on('connect', function() {
    document.querySelector('p').innerHTML = 'Connected to server';
});
socket.on('disconnect', function() {
    document.querySelector('p').innerHTML = 'Disconnected';
    console.log('Disconnected');
});
socket.on('newMessage', function(email) {
    console.log('New message', email);
});