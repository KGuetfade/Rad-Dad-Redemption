var express = require('express');
var router = express.Router();

/*
router.get("/", function(req, res) {
    res.render("splash.ejs", { amountGames: GameStats.amountGames, amountPlayers: GameStats.amountPlayers });
})

router.get("/splash", (req, res) => {
    res.render("splash.ejs", { amountGames: GameStats.amountGames, amountPlayers: GameStats.amountPlayers });
});*/

router.get("/game", function(req, res) {
      res.statusCode = 200;
      res.sendFile("game.html", {root: "./public"});
})
module.exports = router;
