// startup app
// server side
var express = require('express');
var app = express();
var path = require('path');
var port = 8008;
// start server
var server = app.listen(port, function() {
	console.log('Listening on port: ' + port);
});

// display web page
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('chat');
});

// chat for server-client
var io = require('socket.io').listen(server);
// when client connecting
io.on('connection', function(socket) {
	console.log('user connected');

	// if socket "chat"  had some emit 
    socket.on('chat', function(message) {
        // display to output
        console.log(message);
        io.emit('chat', message);
	});
});

//end ----