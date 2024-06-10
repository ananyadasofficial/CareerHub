const userSchema = require("../model/userSchema");

const registerController = async (req, res, next) => {
  const { name, mobile, email, password } = req.body;

  // Validate required fields
  if (!name) {
    next("Name is required");
  }

  if (!mobile) {
    next("Mobile is required");
  }

  if (!email) {
    next("Email is required");
  }

  if (!password) {
    next("Password is required and greater than 6 character");
  }

  const existingUser = await userSchema.findOne({ email });
  if (existingUser) {
    next("Email Already Register Please Login");
  }

  const user = await userSchema.create({
    name,
    mobile,
    email,
    password,
  });
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User Created Successfully",
    user: {
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      role: user.role,
      skillset: user.skillset,
    },
    token,
  });
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      next("Please provide all fields");
    }

    const user = await userSchema.findOne({ email }).select("+password");
    if (!user) {
      next("Invalid Username or Password");
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      next("Invalid Username or Password");
    }

    user.password = undefined;
    const token = user.createJWT();
    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        role: user.role,
        skillset: user.skillset,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerController, loginController };
