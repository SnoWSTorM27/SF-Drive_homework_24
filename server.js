var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.use('*',  (_req, res)=> {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

app.listen(3000, function() {
  console.log('listening 3000');
});