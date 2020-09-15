var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mysql'
})

connection.connect()

connection.query('SELECT host,user from mysql.user;', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)
})

connection.end()
