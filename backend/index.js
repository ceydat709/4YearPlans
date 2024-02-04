const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routesHandler = require('./routes/handler.js');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'savannahhlyles',
    password: 'Lyles2004',
    database: 'my_database',
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.json());
app.use('/', routesHandler);

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
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