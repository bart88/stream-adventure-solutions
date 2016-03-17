var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(body){
    // split, reverse, glue back.
      process.stdout.write(body.toString().split("").reverse().join(""));
  }));
