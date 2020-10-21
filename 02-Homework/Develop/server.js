//Dependencies

var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//data routes
// app.use(require('./routes/apiRoutes'));

//html routes
app.use(require('./routes/htmlRoutes'));

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);


//listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });