// const Job = require("../model/jobsModel");

// async function addJob(req, res) {
//   try {
//     let job = await Job.create(req.body);
//     res.status(201).json(job);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// }

// async function allJobs(req, res) {
//   try {
//     let jobs = await Job.find();
//     res.status(200).json(jobs);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// }

// module.exports = {
//   addJob,
//   allJobs,
// };
const jobModel = require("../model/jobsModel");

const createJobController = async (req, res, next) => {
  try {
    const { title, salary, vacation, jobDescription, recruiter } = req.body;
    if (!title || !salary || !vacation || !jobDescription || !recruiter) {
      throw new Error("Please provide all fields");
    }
    req.body.createdBy = req.user.userId;
    const job = await jobModel.create(req.body);
    res.status(201).json({ job });
  } catch (error) {
    next(error);
  }
};

const getAllJobsController = async (req, res, next) => {
  try {
    const jobs = await jobModel.find();
    res.status(200).json({
      totalJobs: jobs.length,
      jobs,
    });
  } catch (error) {
    next(error);
  }
};

const updateJobsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, salary, vacation, jobDescription, recruiter, applicantId } =
      req.body;

    // Validation
    if (
      !title ||
      !salary ||
      !vacation ||
      !jobDescription ||
      !recruiter ||
      !applicantId
    ) {
      throw new Error("Please provide all fields, including applicantId");
    }

    // Find job
    const job = await jobModel.findOne({ _id: id });
    if (!job) {
      throw new Error(`No job found with id ${id}`);
    }

    // Check authorization
    if (!req.user.userId.toString() == job.recruiter.toString()) {
      throw new Error("You are not authorized to update this job");
    }

    // Update job
    const updateJob = await jobModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updateJob);
  } catch (error) {
    next(error);
  }
};

const deleteJobController = async (req, res, next) => {
  const { id } = req.params;
  const job = await jobModel.findOne({ _id: id });
  if (!job) {
    next(`No job found with this ID ${id}`);
  }
  if (!req.user.userId.toString() == job.recruiter.toString()) {
    throw new Error("You are not authorized to update this job");
  }
  await job.deleteOne();
  res.status(200).json({ message: "Success, Job Deleted!" });
};

module.exports = {
  createJobController,
  getAllJobsController,
  updateJobsController,
  deleteJobController,
};
