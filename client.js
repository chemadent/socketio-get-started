var socket = require('socket.io-client')('http://localhost:3330');

socket.on('connect', function(){
	console.log('[%s]on connect...', socket.id);
});

socket.on('command', function(data) {
	console.log('[%s]on command...', socket.id, data);
})