let mysql = require('mysql');
const redis = require('redis');

const client = redis.createClient( 6379, '127.0.0.1');



let MysqlPoolBooster = require('mysql-pool-booster');
mysql = MysqlPoolBooster(mysql);

let pool = mysql.createPool({
  host: '18.220.136.110',  
  user: 'me',
  password: 'me',
  database: 'recs'
});



pool.getConnection(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
})


let find = (req, res) => {
  let id = req.params.room
  pool.query(`select * from recommendations where roomId = (select roomId from recommendations where id = ${id}) LIMIT 4 `, (err, result) => {
    if (err) res.status(500)

    client.setex(id, 3600, JSON.stringify(result))
    res.send(result)
  })
}


let getCache = (req, res)=>{
  let id = req.params.room
  client.get(id, (err, result)=>{
    if(result){
      res.send(result)
    } else {
      find(req, res)
    }
  })
}


module.exports.getCache = getCache;