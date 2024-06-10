// const {
//   addUser,
//   allUser,
//   getUserByMobile,
//   updateUser,
//   deleteUser,
// } = require("../controller/user.controller");
// const userAuth = require("../middleware/authMiddleware");

// userRouter.post("/", userAuth, addUser);
// userRouter.get("/", userAuth, allUser);
// userRouter.get("/:mobile", userAuth, getUserByMobile);
// userRouter.put("/:mobile", userAuth, updateUser);
// userRouter.delete("/:mobile", userAuth, deleteUser);

const express = require("express");
const userAuth = require("../middleware/authMiddleware");
const updateUserController = require("../controller/userController");

const router = express.Router();

router.put("/updateuser", userAuth, updateUserController);

module.exports = router;
