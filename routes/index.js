var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get("/", function(req, res) {
      res.statusCode = 200;
      res.sendFile("splash.html", {root: "./public"});
})

router.get("/splash", function(req, res) {
      res.statusCode = 200;
      res.sendFile("splash.html", {root: "./public"});
})

router.get("/game", function(req, res) {
      res.statusCode = 200;
      res.sendFile("game.html", {root: "./public"});
})
module.exports = router;
