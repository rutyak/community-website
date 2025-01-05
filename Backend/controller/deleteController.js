const User = require("../model/userSchema");

const deleteController = async (req, res) =>{
        const { id } = req.params;
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if(!deletedUser){
                return res.status(404).json({message: "User not found"});
            }
            res.status(200).json({message:"Deleted successfully", deletedUser});
        } catch (error) {
            console.error(error.message);
            res.status(500).json({message: "Internal server error", error: error.message});
        }
}

module.exports = deleteController;