const User = require("../model/userSchema");

const fetchController = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found for this author" });
    }

    res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ message: "Internl server error", error: error.message });
  }
};

module.exports = fetchController;
