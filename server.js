const FastBootAppServer = require('fastboot-app-server');
const S3Notifier = require('fastboot-s3-notifier');
const S3Downloader = require('fastboot-s3-downloader');
const Creds = {
  distPath: 'dist',
  bucket: 'vanligajavlarecept',
  key: 'dist.zip'
};

let downloader = new S3Downloader(Creds);
let notifier = new S3Notifier(Creds);
let server = new FastBootAppServer({
  downloader,
  notifier
});

server.start();