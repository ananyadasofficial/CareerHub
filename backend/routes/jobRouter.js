const express = require("express");
const userAuth = require("../middleware/authMiddleware");
const {
  createJobController,
  getAllJobsController,
  updateJobsController,
  deleteJobController,
} = require("../controller/jobController");

const router = express.Router();

router.post("/createjob", userAuth, createJobController);
router.get("/getjob", userAuth, getAllJobsController);
router.patch("/updatejob/:id", userAuth, updateJobsController);
router.delete("/deletejob/:id", userAuth, deleteJobController);

module.exports = router;
