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

## How To Run and Build
1. `Install Node JS`
    the version NodeJS is up to you
2. `npm init -y`
    create "package.json"
3. `touch server.js`
    create "file server.js"
4. `npm i express mysql`
    install 2 dependent express and mysql
5. `node server.js`
    running server if show alert "Server Ready...) then server is working
6. acces localhost:8000
