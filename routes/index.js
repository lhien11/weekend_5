/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sigma';

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile('index.html');
});

router.post('/employees', (req, res, next) => {
    const results = [];
    // Grab data from http request
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        employee_id: req.body.employee_id,
        salary: req.body.salary,
        title: req.body.title,
        active: req.body.active
    };
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({
                success: false,
                data: err
            });
        }
        // SQL Query > Insert Data
        client.query('INSERT INTO employees(first_name, last_name, employee_id, salary, title, active) values($1, $2, $3, $4, $5, $6)', [data.first_name, data.last_name, data.employee_id, data.salary, data.title, data.active]);
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM employees ORDER BY id ASC');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

router.get('/employees', (req, res, next) => {
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({
                success: false,
                data: err
            });
        }
        // SQL Query > Select data
        const query = client.query('SELECT * FROM employees ORDER BY id ASC;');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});


router.get('/employees/:id', (req, res, next) => {
    const results = [];
    // Grab data from the URL parameters
    const id = req.params.id;
    console.log("id in employees = ", id);
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({
                success: false,
                data: err
            });
        }

        // SELECT * FROM employees WHERE id=1;

        // SQL Query > Select data
        const query = client.query('SELECT * FROM employees WHERE id=($1)', [id]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });

});

router.put('/employees/:id', (req, res, next) => {
    const results = [];
    // Grab data from the URL parameters
    const id = req.params.id;

    // Grab data from http request
    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      employee_id: req.body.employee_id,
      salary: req.body.salary,
      title: req.body.title,
      active: req.body.active
    };

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({
                success: false,
                data: err
            });
        }
        // SQL Query > Select data
        client.query('UPDATE employees SET first_name=($1), last_name=($2), employee_id=($3), salary=($4), title=($5), active=($6) WHERE id=($7)', [data.first_name, data.last_name, data.employee_id, data.salary, data.title, data.active, id]);

        // SQL Query > Select Data
        const query = client.query('SELECT * FROM employees ORDER BY id ASC');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    }); // end pg.connect

}); // end route put

router.delete('/employees/:id', (req, res, next) => {
    const results = [];

    // Grab data from the URL parameters
    const id = req.params.id;
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({
                success: false,
                data: err
            });
        }
        // SQL Query > Select
        const query = client.query('DELETE FROM employees WHERE id=($1)', [id]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });

});

module.exports = router;
