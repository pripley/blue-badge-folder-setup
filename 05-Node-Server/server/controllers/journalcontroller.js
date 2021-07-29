let express = require("express");
let router = express.Router();

// let validateSession = require("../middleware/validate-session");

router.get("/practice", function (req, res) {
  res.send("This is the practice route");
});

module.exports = router;
