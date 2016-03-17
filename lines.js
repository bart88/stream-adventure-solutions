var split = require('split');
var through = require('through2');
var counter = 0;
var transform = through(function(buffer, _, next) {
  var string;
  if( counter % 2 === 0 ) {
    this.push(buffer.toString().toLowerCase() + "\n");
  } else {
    this.push(buffer.toString().toUpperCase() + "\n");
  }
  counter++;
  next();
});


process.stdin
  .pipe(split())
  .pipe(transform)
  .pipe(process.stdout);
