# javascript-bootstrap-mysql-beginner
Simple program made with NodeJS, Bootstrap and Databases MySql 

## Note
Change Configuration on server.js to connect databases MySql

```
const db = mysql.createConnection({
    host:"namehost",
    database:"namedb",
    user:"nameuser",
    password:"password",
})
```

## What to do Install
1. `Install Node JS`
    the version NodeJS is up to you
2. `npm i express mysql`
    install 2 dependent express and mysql for connection mysql
3. `npm i --save nodemon`
    install nodemon for start server.js otomatic
    if install successfuly
    then add in package.json "start": nodemon server.js"
    <br>
    ```
    int "scrpt"
    "start": nodemon server.js",
    ```
4. `npm i body-parser`
    Install body-parser, body parser use for get data from form submit

## How To Run
1. `npm init -y`
    create "package.json"
2. `touch server.js`
    create "file server.js"
3. `node server.js`
    running server if show alert (Server Ready...) then server is working
4. acces localhost:8000
    open browser and search link "localhost:8000" 
5. `npm start`
    for start otomatic server.js (nodemon)

<hr><br>

my referece to made this project [^note].
[^note]:
    DeaAfrizal [Go to](https://www.youtube.com/watch?v=JmwDuKzbkNA).
