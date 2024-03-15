const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const connectDB = async (req, res) => {
    try {

        if (!process.env.MONGO_URI || !process.env.DBNAME) {
            res.json("MONGO_URI or DBNAME is missing in environment variables");
        }

        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DBNAME}`)
        if (connection) {
            return res.status(200).json({ msg: "DataBase Connected Succesfully !! " })
        }
        else {
            res.json("Database connection failed");
        }
    } catch (error) {
        return res.status(500).json({ msg: "Error In Connecting Database", err: error })
    }
}


module.exports = connectDB