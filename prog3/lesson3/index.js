var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello Samvel </h1>");
});

app.get("/:name", function(req, res){
    var name = req.params.name;
    res.send("<h1>Hello" + name + "</h1>");
});

app.listen(3003, function (){
    console.log("Example is running on port 3003");
});