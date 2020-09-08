require('dotenv').config()
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env;

//CONTROLLERS
const authCtrl = require('./authControllers');
// const userCtrl
const boardCtrl = require('./boardControllers');
const groupCtrl = require('./groupControllers');
const taskCtrl = require('./taskController');
 

//MIDDLEWARE
const app = express()

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 48}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db) => {
    app.set('db', db)
    console.log('<---- Database Connected ---->')
}).catch (err => console.log(`database error: ${err}`))

//ENDPOINTS
//auth Endpoints
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//board Endpoints
app.get('/api/boards', boardCtrl.getBoard)
app.post('/api/boards', boardCtrl.newBoard)
app.put('/api/boards/:id', boardCtrl.editBoard)
app.delete('/api/boards/:id', boardCtrl.deleteBoard)

//group Endpoints
app.get('/api/groups', groupCtrl.getGroups)
app.post('/api/groups', groupCtrl.addGroup)
// app.put('/api/groups/:id', groupCtrl)
app.delete('/api/groups/:id', groupCtrl.deleteGroup)

//task Endpoints
app.get('/api/tasks', taskCtrl.getTasks)
app.post('/api/tasks', taskCtrl.addTask)
// app.put('/api/tasks/:id', taskCtrl)
app.delete('/api/tasks/:id', taskCtrl.deleteTask)

//profile Endpoints
// app.get('/api/user', userCtrl)
// app.put('/api/user/:id', userCtrl)
// app.delete('/api/user/:id', userCtrl)



app.listen(SERVER_PORT, ()=> console.log(`<---- Server Connected ----> on port ${SERVER_PORT}`))