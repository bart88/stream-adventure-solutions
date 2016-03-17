var request = require('request');

var httpRequest = request.post('http://localhost:8099');

process.stdin
  .pipe(httpRequest)
  .pipe(process.stdout);
