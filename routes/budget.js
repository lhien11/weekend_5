/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/sigma';


router.get('/', (req, res, next) => {
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
        const query = client.query('SELECT * FROM budget');
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

router.post('/', (req, res, next) => {
  const results = [];
    // console.log("in budget post");
    // Grab data from http request
    var data = {
       month: req.body.month,
       year: req.body.year,
      monthly_budget: req.body_monthly_budget
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
        client.query('INSERT INTO budget(month, year, monthly_budget) values($1, $2, $3)', [data.month, data.year, data.monthly_budget]);
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM budget');
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
