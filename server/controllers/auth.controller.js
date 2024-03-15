const User = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const jwt_secret = process.env.SECRET;

const registerController = async (req, res, next) => {

}

const loginController = async (req, res, next) => {

}

const logoutController = async (req, res, next) => {

}

module.exports = { registerController, loginController, logoutController }