const express = require("express");
const testPostController = require("../controller/test.controller");
const userAuth = require("../middleware/authMiddleware");
// const updateUserController = require("../controller/test.controller");

const testRouter = express.Router();
testRouter.post("/testpost", userAuth, testPostController);
// router.put("/update", userAuth, updateUserController);

module.exports = testRouter;
