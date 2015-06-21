// module for chat resp
exports.chatIO = function (r) {
	var io = require('socket.io').listen(server);

	// when client connecting
	io.on('connection', function(socket) {
		console.log('user connected');
	});
};