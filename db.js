const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hsbc',
    password: 'hsbc2024',
    database: 'pubs',
    port: '3307'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;