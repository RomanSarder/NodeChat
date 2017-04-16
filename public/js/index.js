let socket = io();

socket.on('connect', function() {
    document.querySelector('p').innerHTML = 'Connected to server';
});
socket.on('disconnect', function() {
    document.querySelector('p').innerHTML = 'Disconnected';
    console.log('Disconnected');
});
socket.on('newMessage', function(message) {
    console.log('New message', message);
    let li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
});