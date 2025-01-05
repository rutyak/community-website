const User = require("../model/userSchema");
const cloudinary = require("../storage/cloudinary");
const bcrypt = require("bcrypt");

const userCreateController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check for missing fields
        if (!name || !email || !password || !req.file) {
            return res.status(400).json({ message: "All fields, including profile image, are required!" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Optimize cloudinary and bcrypt operations
        console.time("Upload and Hash");
        const [cloudinaryResult, hashedPassword] = await Promise.all([
            cloudinary.uploader.upload(req.file.path, { resource_type: "auto" }),
            bcrypt.hash(password, 10)
        ]);
        console.timeEnd("Upload and Hash");

        // Create a new user
        const newUser = await User.create({
            name,
            profile: cloudinaryResult.secure_url,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "User created successfully!",
            user: newUser,
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = userCreateController;
