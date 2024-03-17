const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const cookieParser = require('cookie-parser');

dotenv.config();

app.use(cookieParser());

app.listen(process.env.PORT || 3000 ,async()=>{
    await connectDB()
    console.log("App is Running",process.env.PORT )
})