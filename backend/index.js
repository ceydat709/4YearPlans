const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routesHandler = require('./routes/handler.js');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.json());
app.use('/', routesHandler);
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }else{
            return res.json("Failed");
        }
    })
});

const PORT = 8083; // backend routing port
app.listen(8083, () => {
    console.log(`Server is running on port ${8083}.`);
});

app.get('/api/profile/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = `SELECT * FROM profiles WHERE user_id = ?`;
  
    db.query(sql, [userId], (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    });
  });

app.post('/api/profile', (req, res) => {
    const { userId, name, otherInfo } = req.body;

db.query('SELECT * FROM profiles WHERE user_id = ?', [userId], (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      // Update existing profile
      const updateSql = 'UPDATE profiles SET name = ?, other_info = ? WHERE user_id = ?';
      db.query(updateSql, [name, otherInfo, userId], (updateErr) => {
        if (updateErr) throw updateErr;
        res.json({ message: 'Profile updated successfully' });
      });
    } else {
        // Insert new profile
      const insertSql = 'INSERT INTO profiles (user_id, name, other_info) VALUES (?, ?, ?)';
      db.query(insertSql, [userId, name, otherInfo], (insertErr) => {
        if (insertErr) throw insertErr;
        res.json({ message: 'Profile added successfully' });
      });
    }
  });
});