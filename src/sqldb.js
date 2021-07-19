var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "moviedb.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
      console.error(err.message)
      throw err
   }else{
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE scores (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         team text, 
         player text, 
         over text, 
         ball text, 
         run text, 
         total text 
         )`,
            (err) => {
               if (err) {
                  console.log(err);
               }else{
                  var insert = 'INSERT INTO scores (team, player, over, ball, run, total) VALUES (?,?,?,?,?,?)'

                  db.run(insert, ['India', 'Kohli', '1st', '1', '1', '1'])
    db.run(insert, ['India', 'Kohli', '1st', '2', '2', '3'])
    // db.run(insert, ['Titanic4', 'English', 'Hollywood', 'Alpana', '2021-07-28 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['Meg2', 'English', 'Hollywood', 'PVR', '2021-07-26 10:10', '2020-05-26 10:10'])
    // db.run(insert, ['PK', 'Hindi', 'Hollywood', 'Plaza', '2021-07-26 10:10', '2020-05-26 10:10'])
               }
            }
      );  
   }
});

module.exports = db
