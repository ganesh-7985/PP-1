const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(500).json("You're not authenticated!");
        }
        jwt.verify(token, process.env.SECRET,async(err,data)=>{
            if(err){
                  res.json("Token is not valid!",403)
            }
            req.userId=data._id
            next()
        });
        
    } catch (error) {
        next(error);
    }
};

module.exports = verifyToken;
