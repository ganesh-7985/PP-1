const User = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();

const getAllUsersController = async (req, res) => {
    try {
        const allusers = await User.find();
        if (!allusers || allusers.length === 0) {
            return res.status(404).json({ msg: "No Users Exist" });
        }
        res.status(200).json(allusers);
    } catch (error) {
        res.status(500).json({ msg: "Error in fetching Users", err: error });
    }
};

const getUserByIdController = async (req, res) => {
    try {
        const { userId } = req.body;
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ msg: "No user exists with this ID" });
        }
        res.status(200).json(existingUser);
    } catch (error) {
        res.status(500).json({ msg: "Error in fetching User", err: error });
    }
};

const getAllInvestorController = async (req, res) => {
    try {
        const { typeOfUser } = req.body;
        if (typeOfUser === 'Investor') {
            const allInvestors = await User.find({ typeOfUser: "Investor" });
            if (!allInvestors || allInvestors.length === 0) {
                return res.status(404).json({ msg: "No Investors Found" });
            }
            res.status(200).json(allInvestors);
        } else {
            res.status(400).json({ msg: "Invalid request" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error in fetching Investors", err: error });
    }
};

const updateUserDetailsController = async (req, res) => {
    try {
        const { userId, updatedDetails } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, updatedDetails, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ msg: "Error updating user details", err: error });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const { userId } = req.body;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting user", err: error });
    }
};

module.exports = { getAllUsersController, getAllInvestorController, getUserByIdController, updateUserDetailsController, deleteUserController };
