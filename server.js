'use strict';

const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: 'dist',
  gzip:     true
});

server.listen(8080);

server.start();