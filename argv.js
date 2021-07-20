'use strict';

if (require.main == module) {
  main({ argv: process.argv })
}

function main(options) {
  var argv = options.argv
  var name = argv[2]

  console.log('hello, ' + name + '!')
}
