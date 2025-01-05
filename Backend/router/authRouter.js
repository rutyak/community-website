const express = require("express");
const userCreateController = require("../controller/userCreateController");
const userAuthController = require("../controller/userAuthController");
const upload = require("../storage/multer");
const updateController = require("../controller/updateController");
const fetchController = require("../controller/fetchController");
const router = express.Router();

router.post("/register", upload.single("photo"), userCreateController);

router.patch("/profile/:id", upload.single("photo"), updateController);

router.post("/login", userAuthController);

router.get("/fetch/users", fetchController);

module.exports = router;
