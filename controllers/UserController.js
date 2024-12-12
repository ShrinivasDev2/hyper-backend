const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

const userSignUp = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ error: "User already exists" });

    const user = await User.create({ name, email, phone, password });
    res.status(201).json({ message: "User created successfully!", user });
  } catch (e) {
    res.status(500).json({ error: "User creation failed!" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User doesn't exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    res.status(200).json({ message: "Login Successful" });
  } catch (e) {
    res.status(500).json({ error: "Login failed" });
  }
};

module.exports = {
  userSignUp,
  userLogin,
};
