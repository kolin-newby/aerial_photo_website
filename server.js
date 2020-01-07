const express = require('express'); // Add the express framework
let app = express();

const bodyParser = require('body-parser'); // Add the body-parser tool
app.use(bodyParser.json());              // Add support for JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Add support for URL encoded bodies

const pug = require('pug'); // Add pug

//sets pug as view engine
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/'));

// home page
app.get('/', (req, res) => {
	response.render('home.pug')
})

var port = 2048;
app.listen(port);
console.log('listening on port ' + port);

//test