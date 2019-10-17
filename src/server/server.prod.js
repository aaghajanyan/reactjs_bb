var path = require("path");
var express = require("express");
var open = require('open');
var PORT = 3001;
var app = express();
var DIST_DIR = path.join(__dirname, "../../build");

app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, '127.0.0.1',function(){
    console.log('Server started...');
    console.log(`Launching the browser on ${PORT} port`);
    open(`http://127.0.0.1:${PORT}`);
});
