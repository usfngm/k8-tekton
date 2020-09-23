var express = require('express');

var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

var app = express();
app.get('/', function (req, res) {
  res.send('<h1>Hello World from tekton</h1>');
});

app.listen(PORT);
console.log(' Application Running on port' + PORT);
