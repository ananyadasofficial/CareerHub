//const User = require("../model/userSchema");

// async function addUser(req, res) {
//   try {
//     let user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// }

// async function allUser(req, res) {
//   try {
//     let users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// }

// async function getUserByMobile(req, res) {
//   try {
//     let { mobile } = req.params;
//     let user = await User.find({ mobile: mobile });
//     if (user.length > 0) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ message: "Data not found" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// }

// async function updateUser(req, res) {
//   try {
//     let { mobile } = req.params;
//     let data = req.body;
//     let user = await User.findOneAndUpdate({ mobile: mobile }, data, {
//       new: true,
//     });
//     res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// }

// async function deleteUser(req, res) {
//   try {
//     let { mobile } = req.params;
//     let user = await User.findOneAndDelete({ mobile: mobile });
//     res.status(200).json(mobile);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// }

// module.exports = {
//   addUser,
//   allUser,
//   getUserByMobile,
//   updateUser,
//   deleteUser,
// };
const userSchema = require("../model/userSchema");

const updateUserController = async (req, res, next) => {
  try {
    const { name, mobile, email, skillset } = req.body;

    if (!name || !mobile || !email || !skillset) {
      return next("Please provide all fields");
    }

    const user = await userSchema.findOne({ _id: req.user.userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.mobile = mobile;
    user.email = email;
    user.skillset = skillset;

    await user.save();

    const token = user.createJWT();
    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserController;
