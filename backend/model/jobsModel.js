const mongoose = require("mongoose");

// Job Schema
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    vacation: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicants: [
      {
        applicantId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        // Add any additional fields related to the applicant here
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
