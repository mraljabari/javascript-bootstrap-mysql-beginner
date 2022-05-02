const express = require("express");
const mysql = require("mysql");

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    database:"school",
    user:"root",
    password:"",
})

db.connect((err) =>{
    if(err) throw err
    console.log("databases connected...!")
    app.get("/", (req, res) => {
        res.send("OK ROUTE OPEN")
    })
})



app.listen(8000, () => {
    console.log("Server Ready...")
})