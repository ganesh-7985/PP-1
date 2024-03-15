const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require('cookie-parser')
const connectDB = require("./database/database")

app.use(cookieParser)

app.listen(process.env.PORT || 3000 ,async()=>{
    await connectDB()
    console.log("App is Running",process.env.PORT )
})