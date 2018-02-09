var sql = require("mysql");

var con = sql.createConnection({
    database:"demo",
    host: "localhost",
    user:"root",
    password:""
})

con.connect();

exports.getTasks = function (res){
    con.query("SELECT * from task",function(err,data){
        if(err)
        throw err;
        res.send(data)
    })
}

exports.getFamily = function (res){
    con.query("SELECT * from family",function(err,data){
        if(err)
        throw err;
        res.send(data)
    })
}
