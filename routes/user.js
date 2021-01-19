// router prefix  /api/user
const express = require("express");
const router = express.Router();
const User = require("../models/User");

///////  GET USER INFO ///////
// tested => TBC : deploying requireAuth
router.get(
  "/me",
  // requireAuth,
  (req, res, next) => {
    User.findById(req.session.currentUser)
      .populate("company")
      .select("-password")
      .then((userDocument) => {
        return res.status(200).json(userDocument);
      })
      .catch(next);
  }
);

/////// PATCH USER INFO  ///////
// tested => TBC : deploying the profile img of the user and requireAuth
router.patch(
  "/me",
  // requireAuth,
  // upload.single("profileImg"),
  (req, res, next) => {
    const userId = req.session.currentUser;

    //   if (req.file) {
    //     req.body.profileImg = req.file.path;
    //   }

    User.findByIdAndUpdate(userId, req.body, { new: true })
      .select("-password") // Remove the password field from the found document.
      .then((userDocument) => {
        res.status(200).json(userDocument);
      })
      .catch(next);
  }
);

module.exports = router;
