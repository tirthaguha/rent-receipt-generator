var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/:data", function (req, res, next) {
  res.send("respond with a resource " + req.params.data);
});

module.exports = router;
