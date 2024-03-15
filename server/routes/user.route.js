const express = require("express");
const router = express.Router();
const { getAllUsersController, getAllInvestorController, getUserByIdController, updateUserDetailsController, deleteUserController } = require("../controllers/user.controller");

router.get('/api/users', getAllUsersController);
router.get('/api/users/:userId', getUserByIdController);
router.get('/api/investors', getAllInvestorController);
router.put('/api/update/:userId', updateUserDetailsController); 
router.delete('/api/delete/:userId', deleteUserController);

module.exports = router;
