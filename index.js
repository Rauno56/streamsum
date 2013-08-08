var crypto = require('crypto');

var streamsum = module.exports = function (stream, cb) {
  var shasum = crypto.createHash('sha1');

  stream.on('data', function (data) {
    shasum.update(data);
  });

  stream.on('end', function () {
    cb.call(null, shasum.digest('hex'));
  });
};
