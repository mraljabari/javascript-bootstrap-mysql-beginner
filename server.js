//deklaration Express and mysql
const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser")


const app = express()

//declaration body-parser (post form dari index.ejs)
app.use(BodyParser.urlencoded({extended: true}))

//declaration EJS as template engine
app.set("view engine", "ejs")
app.set("views", "views") // set directing to direcotry views template engine

//declaration DBMS
const db = mysql.createConnection({
    host:"localhost",
    database:"school",
    user:"root",
    password:"",
})

//conection Databases
db.connect((err) =>{
    //if error then throw alert error
    if(err) throw err
    console.log("databases connected...!")


    //if not error then  get data
    app.get("/", (req, res) => {
        //query select from db
        const sql = "SELECT * FROM user"
        db.query(sql, (err, result) => {
        const users = JSON.parse(JSON.stringify(result))
        //console.log('show data -> ' ,users)
        // res.send(result)
        res.render("index", {users: users, title: "Daftar Mahasiswa"})
        })
    })            
    

        //for insert data
        app.post("/tambah", (req, res) => {
            const insertSql = `INSERT INTO user (nama, kelas) VALUES ('${req.body.nama}' , '${req.body.kelas}'); `
            db.query(insertSql, (err, result) => {
                //if query error throw error
                if(err) throw err
                //if successfully insert data then go direct to "/"
                res.redirect("/")
        })
    })
  
})



app.listen(8000, () => {
    console.log("Server Ready...")
})