// establish psql database connection
// pg promise allows us to connect to our postgres database and use sql to query data out of our database
const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || {
 host: "localhost",
 port: 5432,
 database: "wiki_db"
});

module.exports = db;
