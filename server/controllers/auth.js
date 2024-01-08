import connectDB from "../database/connection/mongoose.js";
import User from "../database/models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    await connectDB();

    const reqBody = await req.body;
    const { name, userName, email, password } = await reqBody;

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({ error: "The email is already registered" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    await connectDB();

    const reqBody = await req.body;

    const { email, password } = await reqBody;

    // find user from DB
    const user = await User.findOne({ email });

    // if user not found
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // create token data
    const tokenData = {
      userID: user._id,
    };

    // create token
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // send token
    return res.status(200).json({ token: token, message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
