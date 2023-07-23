const mongoose = require("mongoose");
const dbConfigs = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const bodyParser = require("body-parser"); 
// const env = require("dotenv");
const express = require("express");
// const env = 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(dbConfigs.DB_URL,()=>{
    console.log("MONGODB coneected");
});
require('./routes/auth.routes')(app);
// start the express server
app.listen(serverConfig.PORT,()=>{
    console.log("Application is running on port",serverConfig.PORT);    
});



