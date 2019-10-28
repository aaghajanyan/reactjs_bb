const express = require('express');
const app = express();
const path = require('path');
const open = require('open');

const BUILD_PATH = '../../build';
const FILE_NAME = 'index.html';
const DIST_DIR = path.join(__dirname, BUILD_PATH);
const configs = require('../config').production;

const log = require('console-log-level')({ level: configs.logLevel })

app.use(express.static(DIST_DIR));
app.get('*', function (req, res) {
  res.sendFile(path.join(DIST_DIR, FILE_NAME));
});

app.listen(configs.port, function() {
    log.info(`\nServer started on ${configs.port} port...`);
    open(`${configs.protocol}${configs.host}:${configs.port}`);
});