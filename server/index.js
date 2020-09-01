require('dotenv').config()
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env;
const authCtrl = require('./authControllers');
const boardCtrl = require('./boardControllers');

const app = express()
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 48},
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set('db', db)
    console.log('<---- Database Connected ---->')
}).catch (err => console.log(err))

//ENDPOINTS
//auth Endpoints

//board Endpoints

app.listen(SERVER_PORT, ()=> console.log(`<---- Server Connected ----> on port ${SERVER_PORT}`))