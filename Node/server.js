const express = require('express');
const {client} = require("./app/config/db.js")

const path = require('path');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');




client.connect();
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./app/router/router.js');



const cors = require("cors");



app.use(express.json());
app.use(cors());
app.use('/', router);



app.listen(4000, () => console.log("Server started on port 4000"));





