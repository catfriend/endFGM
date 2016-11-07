var express = require('express');
var io = require('socket.io')();

// Create the app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
} else {
  next();
}
});


io.on('connection', function(socket) {
  console.log("we have a connection");
	socket.on('new-message', function(msg) {
    console.log(msg);
		io.emit('receive-message', msg);
	});
  socket.on("test", function() {
    console.log("mounted");
  })
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is running on port ' + PORT);
});
