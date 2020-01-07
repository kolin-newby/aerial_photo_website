const express = require('express'); // Add the express framework
let app = express();

app.use(express.static(__dirname + '/public'));

// home page
app.get('/home', (req, res) => {
	response.sendFiles(__dirname + 'views/home.html')
})

var port = 2048;
app.listen(port, () => {
	console.log('listening on port ' + port);
});