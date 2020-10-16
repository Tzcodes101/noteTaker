//Dependencies

var express = require("express");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//data routes
app.use(require('../routes/apiRoutes'));

//html routes
app.use(require('../routes/htmlRoutes'));


//listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });