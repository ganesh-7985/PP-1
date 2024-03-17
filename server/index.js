const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const cookieParser = require('cookie-parser');
const verifyToken = require("./middlewares/verifyToken.middleware")

dotenv.config();

const authRoute = require("./routes/auth.route")
const userRoute = require("./routes/user.route")
const postRoute = require("./routes/post.route")

app.use(express.json())
app.use(cookieParser());


app.use("/api/auth",authRoute);
app.use("/api/user",verifyToken,userRoute)
app.use("/api/post",verifyToken,postRoute)

app.listen(process.env.PORT || 3000 ,async()=>{
    await connectDB()
    console.log("App is Running",process.env.PORT )
})