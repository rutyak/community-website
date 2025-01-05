const User = require("../model/userSchema");
const cloudinary = require("../storage/cloudinary");

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    console.log("Updating user:", { id, name, email, password });

    if (!id) {
      return res.status(400).json({ message: "User ID is required!" });
    }

    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    let profile;
    if (req.file) {
      console.time("Image Upload");
      const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
      });
      console.timeEnd("Image Upload");
      profile = cloudinaryResult.secure_url;
    } else {
      profile = existingUser.profile;
    }

    const updatedData = {
      name: name || existingUser.name,
      email: email || existingUser.email,
      password: password || existingUser.password,
      profile,
    };

    console.time("User Update");
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    console.timeEnd("User Update");

    res.status(200).json({
      message: "User updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = updateController;
