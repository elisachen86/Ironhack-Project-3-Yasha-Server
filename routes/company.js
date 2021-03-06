// router prefix  /api/company
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Company = require("../models/Company");

///////  CREATE A COMPANY ///////

router.post(
  "/mycompany",
  // requireAuth,
  async (req, res, next) => {
    try {
      const currentUserId = req.session.currentUser;
      const companyDocument = await Company.create(req.body);
      const updatedUser = await User.findByIdAndUpdate(
        currentUserId,
        { company: companyDocument._id },
        { new: true }
      );
      const updatedCompany = await Company.findByIdAndUpdate(
        companyDocument._id,
        { $push: { userList: currentUserId } },
        { new: true }
      );
      res.status(200).json(updatedCompany);
    } catch (error) {
      console.log(error);
    }
  }
);

///////  GET USE'S COMPANY INFO ///////
// TBC : deploying the requireAuth, uncomment the line below
router.get(
  "/mycompany",
  // requireAuth,
  async (req, res, next) => {
    try {
      const currentUserId = req.session.currentUser;
      const currentUser = await User.findById(currentUserId);
      const userCompany = await Company.findById(currentUser.company).populate(
        "userList"
      );
      res.status(200).json(userCompany);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/mycompany",
  // requireAuth,
  async (req, res, next) => {
    try {
      const currentUserId = req.session.currentUser;
      const user = await User.findById(currentUserId);
      const companyId = user.company;
      const updatedCompany = await Company.findByIdAndUpdate(
        companyId,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedCompany);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
