var express = require("express")
var cors = require('cors')
var db = require("./sqldb.js")

var app = express()
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 4200 
app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/api/movie", (req, res, next) => {
   var sql = "select * from scores"
   var params = []
   db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json(rows)
     });

});

app.get("/api/movie/:id", (req, res, next) => {
   var sql = "select * from scores where id = ?"
   var params = [req.params.id]
   db.get(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({"error":err.message});
         return;
      }
      res.json(row)
   });
});

app.post("/api/movie/", (req, res, next) => {
         console.log("Into POST method");
   var errors=[]
   if (!req.body.movie){
      errors.push("No movie specified");
         console.log("No movie specified");
   }
   var data = {
      team : req.body.movie,
      language: req.body.language,
      category: req.body.category,
      cinema : req.body.cinema,
      availableon: req.body.availableon,
      createdOn: req.body.createdOn
   }
   var sql = 'INSERT INTO moviet (movie, language, category, cinema, availableon, createdOn) VALUES (?,?,?,?,?,?)'
   var params =[data.movie, data.language, data.category, data.cinema, data.availableon, data.createdOn]
   db.run(sql, params, function (err, result) {
      if (err){
         res.status(400).json({"error": err.message})
         console.log("Err--"+err.message); 
         return;
      }
      data.id = this.lastID;
      res.json(data);
   });
})

app.put("/api/movie/:id", (req, res, next) => {
   var data = {
      movie : req.body.movie,
      language: req.body.language,
      category: req.body.category,
      cinema : req.body.cinema,
      availableon: req.body.availableon
   }
   db.run(
      `UPDATE moviet SET
         movie = ?, 

         language = ?,
         category = ?, 
         cinema = ?, 

         availableon = ? 
         WHERE id = ?`,
            [data.movie, data.language, data.category, data.cinema, data.availableon, req.params.id],
      function (err, result) {
         if (err){
            console.log(err);
            res.status(400).json({"error": res.message})
            return;
         }
         res.json(data)
   });
})

app.delete("/api/movie/:id", (req, res, next) => {
   db.run(
      'DELETE FROM moviet WHERE id = ?',
      req.params.id,
      function (err, result) {
         if (err){
            res.status(400).json({"error": res.message})
            return;
         }
         res.json({"message":"deleted", changes: this.changes})
   });
})

app.use(function(req, res){
   res.status(404);
});
