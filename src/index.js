require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoCon = require('./connections/mongoDB');
mongoCon();

app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const server = http.createServer(app);

const userRouter = require('./router/user');
app.use('/',userRouter);

const port = process.env.PORT || '3000';
server.listen(port,() =>console.log("Server started on..!!",port));

module.exports = app;
