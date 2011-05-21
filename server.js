var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('sweet as XYZ 2' + Math.random())
  res.end();

}).listen(8008);


