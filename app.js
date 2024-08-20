const express = require('express');
const connection = require('./db');
const app = express();

//middleware to parse json request body
app.use(express.json());

app.get('/authors', (req, res) => {
    connection.query('SELECT * FROM authors', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

app.post('/authors', (req, res) => {
    const { id, fname, lname, phone, contract } = req.body;
    connection.query('INSERT INTO authors (au_id, au_fname, au_lname, phone, contract) VALUES (?, ?, ?, ?, ?)', [id, fname,lname, phone,contract], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(201).send('Author created successfully');
    });
});

module.exports = app;