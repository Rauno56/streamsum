Streamsum
=========

Shasum form a stream.

## Install
`npm install streamsum`

## Usage

``` js
var streamsum = require('streamsum');

streamsum(fs.ReadStream('...a path to a file...'), console.log);
```
.. or ..
``` js
var streamsum = require('streamsum');
var request = require('request');

console.log('The shasum of the streamsum master branch:');
streamsum(request('https://github.com/Rauno56/streamsum/tarball/master'), console.log);
```
.. or from the command line(`install -g` required)
```
$ streamsum <PATH>
```
