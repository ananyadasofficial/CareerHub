const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/db");
const testRouter = require("./routes/test.router");
const authRouter = require("./routes/authRouter");
const errorMiddleware = require("./middleware/errorMiddleware");
const userRouter = require("./routes/userRouter");
const jobRouter = require("./routes/jobRouter");

require("dotenv").config();
require("express-async-errors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/test", testRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/job", jobRouter);

// Error handling middleware
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello Ananya!!!");
});

dbConnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
