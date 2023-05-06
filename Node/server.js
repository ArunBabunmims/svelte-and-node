const express = require('express');
const {client} = require("./app/config/db.js")

const path = require('path');
const app = express();
const cors = require('cors');



client.connect();

// Data Base Connection

const router = require('./app/router/router.js');

app.use(cors());

app.use(cors({
    origin: 'http://localhost:4000/addTodolist'
  }));
  

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json({
    limit: '50mb'
}));

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use('/', router );


app.listen(4000, function(){
    console.log("Server has started Succesflly")
})