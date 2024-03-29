const express = require("express");
const router = express.Router();
const User = require("../model/user");

// router.post("/register", async (req, res) => {
//   try {
//     const { hrid, password } = req.body;

//     const newUser = new User({
//       hrid,
//       password,
//     });

//     const savedUser = await newUser.save();
//     res.json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

router.post("/login", async (req, res) => {
  try {
    const { hrid, password } = req.body;

    const foundUser = await User.findOne({ hrid });

    if (foundUser && foundUser.password === password) {
      const userData = {
        
        hrid: foundUser.hrid,
        isAdmin: foundUser.isAdmin,
        _id: foundUser._id,
      };
      res.json(userData);
    } else {
      res.status(400).json({ message: "Login Failed: User not found or incorrect password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;