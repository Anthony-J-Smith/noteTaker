/*
a) get current notes -- app.get
b) make (post) more notes -- app.post
c) delete current notes -- app.delete
*/

var notesData = require("../db/db.json");


 var fs = require("fs");
 var path = require("path");




module.exports = function(app) {

app.get("/api/notes", function(req, res) {
    
    res.json(notesData);
});

app.post("/api/notes", function(req, res) {
    notesData.push(req.body);
    res.json(notesData);
});
app.delete("/api/notes/:id", function(req, res) {
    
    notesData.splice(req.params.id, 1);


console.log(notesData)
console.log("params:", req.params.id)
    // fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesData), function(err){
    //     if (err){
    //         return console.log(err)
    //     }
    // })
    

 res.json(notesData);
    





});


}