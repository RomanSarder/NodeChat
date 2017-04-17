let socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});
socket.on('disconnect', function() {

    console.log('Disconnected');
});
socket.on('newMessage', function(message) {
    let template = jQuery('#message-template').html();
    let formattedTime = moment(message.createdAt).format('h:mm a');
    let html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);

    // let li = jQuery('<li></li>');
    // li.text(`${message.from} ${formattedTime}: ${message.text}`);
    // jQuery('#messages').append(li);
});
socket.on('newLocationMessage', function(message) {
    let template = jQuery('#location-message-template').html();
    let formattedTime = moment(message.createdAt).format('h:mm a');
    let html = Mustache.render(template, {
        url: message.url,
        from: message.from,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);

});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    let messageBox = jQuery('[name=message]');
    socket.emit('createMessage', {
        from: 'User',
        text: messageBox.val()
    }, function() {
        messageBox.val('');
    });
});
let locationButton = jQuery('#send-location');
locationButton.on('click', function() {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser');
    }
    locationButton.attr('disabled', 'disabled').text('Sending location...');
    navigator.geolocation.getCurrentPosition(function(position) {
        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function() {
        alert('Unable to fetch location').text('Send location').removeAttr('disabled');
        locationButton.removeAttr('disabled');
    });
});