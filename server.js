// Add the express framework
const express = require('express');
const path = require('path');

const app = express();

//Create Database Connection
// ****
//db config
// ****

app.use(express.static(path.join(__dirname, 'views')));


// home page
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'views', 'home.html'));
// });

var port = 3000;
app.listen(port);
console.log('listening on port ' + port);