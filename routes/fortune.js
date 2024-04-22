child_process = require('child_process');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var fortune = child_process.execSync('fortune');
  res.send(fortune.toString() + '\n');
//console.log("executing command: " + command);
//child_process.exec('fortune', (error, stdout, stderr) => {
//  if (error) {
//    console.error("Error executing command:", error);
//    res.status(500).send("Error executing command");
//    return;
//  }
//  res.send(stdout + '\n');
//});

});

module.exports = router;
