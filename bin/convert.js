var convert = require('../src/index.js');

var yargs = require('yargs');

var argv = yargs
    .usage('$0 [args]')
    .options({
      'db': {
        alias: 'database',
        demandOption: true,
        describe: 'SQLite database to convert',
        type: 'string'
      }
    })
    .help()
    .argv
;

convert(argv)
    .then((contacts) => {
        console.log(contacts);
        console.log('Done!');
    })
;
