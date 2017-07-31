var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var io = require('socket.io')(80);

server.listen(3330, function(){
    console.log('listening on *:3330');
});

app.get('/', function(req, res){
    res.send('hello world!');
});

io.on('connection', function(socket){
	console.log('[%s] connected', socket.id);
    var loop = setInterval(function() {
    	socket.command = Math.floor(Math.random()*5);
    	socket.emit('command', {
    		command: socket.command
    	});
    	console.log('socket.command= [%d] to [%s]',socket.command, socket.id);
    }, 5000);
    socket.on('disconnect', function(){
        console.log('[%s]on disconnect....', socket.id);
        clearInterval(loop);
    });
});
