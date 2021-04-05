const Pool = require('pg').Pool
const pool = new Pool({
  user: 'conordixon',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

const getDashboard = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM public.api_dashboard', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
};

module.exports = {
    getDashboard,
};