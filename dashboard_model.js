pg = require("pg");
pgp = require("pg-promise");
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'conordixon',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

/*
// DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}
postgres returns dashboard results as JSON
Need to figure out how to route or move it to named JS file
Present the data in D3.js
*/

const getDashboard = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM api_dashboard', (error, results) => {
            if (error) {
                 console.log('Error executing query', reject (error));
            }
            resolve(results.rows);
        });
    })
}

module.exports = {
    getDashboard,
};