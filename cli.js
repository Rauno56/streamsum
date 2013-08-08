#!/usr/bin/env node
var fs = require('fs');
var streamsum = require('./index');

if (!process.argv[2]) {
  return console.log('Specify a filepath.');
}

streamsum(fs.ReadStream(process.argv[2]), console.log);
