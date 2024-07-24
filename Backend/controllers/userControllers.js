import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Create token 
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// Register user 
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        // Validate password
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Validate name
        if (!name || name.trim().length === 0) {
            return res.status(400).json({ success: false, message: "Name is required" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();

        // Create token
        const token = createToken(user._id);
        res.status(201).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        // Compare passwords
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        // Create token
        const token = createToken(user._id);
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { loginUser, registerUser };
