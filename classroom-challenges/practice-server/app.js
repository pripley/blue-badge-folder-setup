let express = require("express");
let app = express();
let testController = require("./controllers/testcontroller");
let calcController = require("./controllers/calculatorcontroller");

app.use(express.json());
app.use("/test", testController);
app.use("/calc", calcController);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
