//dependencies
var path = require("path");

//routing
module.exports = function (app) {

    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};