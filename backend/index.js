const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');


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

db.connect((err) => {
    if(err) {
        console.error('MySQL connection error:', err);
    } else{
        console.log('Connected to MySQL database');
    }
});

app.post('/api/storeCheckboxData', (req, res) =>{
    const checkboxData = req.body;

    const sql = "INSERT INTO checkbox_data (`major`,`semester`, `course`, 'selected') VALUES (?)";
    const values = [
        req.body.major,
        req.body.semester,
        req.body.course,
        req.body.selected
    ]

    db.query(sql, [values], (err) => {
        if(err) {
            console.error('Error storing checkbox data in MySQL', err);
            res.status(500).send('internal Server Error');
        } else {
            console.log('Checkbox data stored successfully');
            res.status(500).send('Checkbox data stored successfully');
        }
    });
});


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

app.use(bodyParser.json());


const PORT = 8083; // backend routing port
app.listen(8083, () => {
    console.log(`Server is running on port ${8083}.`);
});

