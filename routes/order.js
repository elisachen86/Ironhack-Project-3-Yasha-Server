// router prefix  /api/order
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");
const uploader = require("../config/cloudinary");
const getGoogleOrder = require("../config/googleSpreadsheet");

console.log("order from google spreadsheets", getGoogleOrder);

///////  GET ALL ORDERS ///////
// tested => TBC : deploying requireAuth
router.get("/", async (req, res, next) => {
  const currentUserId = req.session.currentUser;
  try {
    const orders = await Order.find({
      users: { $in: [currentUserId] },
    }).populate("retailerCompany retailerContact");
    console.log(orders);
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
});

///////  GET ONE ORDER ///////
// tested => TBC : deploying requireAuth
router.get("/:id", async (req, res, next) => {
  const currentUserId = req.session.currentUser;
  try {
    const order = await Order.find({
      users: { $in: [currentUserId] },
      _id: req.params.id,
    }).populate({
      path: "comments",
      populate: { path: "user" },
    });
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
});

///// CREATE AN ORDER ///////////
router.post("/", async (req, res, next) => {
  const currentUserId = req.session.currentUser;
  const stages = [
    "submitted",
    "confirmed",
    "packed",
    "ready_to_ship",
    "shipped",
    "received",
  ];

  try {
    const currentUser = await User.findById(currentUserId);
    const newOrder = await Order.create(req.body);
    const updatedOrder = await Order.findByIdAndUpdate(
      newOrder._id,
      {
        retailerContact: currentUserId,
        retailerCompany: currentUser.company,
        users: [currentUserId],
      },
      { new: true }
    );
    res.status(201).json(updatedOrder);
  } catch (error) {
    console.log(error);
  }
});

///// UPDATE AN ORDER ///////////
const stages = [
  "submitted",
  // "confirmed",
  // "packed",
  // "ready_to_ship",
  "shipped",
  "received",
];

const getStage = (steps, stages) => {
  const currentStep = steps[steps.length - 1];

  const index = stages.findIndex((stage) => {
    return currentStep.stage === stage;
  });

  return stages[index + 1];
};

router.patch("/:id", uploader.single("docUrl"), async (req, res, next) => {
  const updateOrder = { ...req.body };
  updateOrder.documents = {
    docName: req.body.docName,
    docUrl: req.body.docUrl,
  };
  delete updateOrder.docName;
  delete updateOrder.docUrl;

  if (req.file) {
    updateOrder.documents.docUrl = req.file.path;
  }

  const order = await Order.findById(req.params.id);

  // if (order.steps[steps.length - 1].stage !== "received") {
  const currentStage = getStage(order.steps, stages);
  order.steps.push({
    stage: currentStage,
  });
  order.documents.push(updateOrder.documents);
  // }

  await order.save();
  res.status(200).json(order);
  // try {
  //   const updatedOrder = await Order.findByIdAndUpdate(
  //     req.params.id,
  //     req.body,
  //     { new: true }
  //   );
  //   res.status(200).json(updatedOrder);
  // } catch (error) {
  //   console.log(error);
  // }
});

///// DELETE AN ORDER ///////////
//////!!! ROUTE NOT WORKING ////////
router.delete("/:id", async (req, res, next) => {
  Order.findByIdAndDelete(req.params.id)
    .then((order) => {
      res.status(204).json({
        message: "Successfuly deleted",
      });
    })
    .catch((error) => {
      next(error);
    });

  // try {
  //   await Order.findByIdAndDelete(req.params.id);
  //   res.status(204).json({ message: "successfully deleted!" });
  // } catch (error) {
  //   console.log(error);
  // }
});

/////   CREATE AN COMMENT  ///////////
router.patch("/comment/:id", async (req, res, next) => {
  // console.log("comment-reqBody", req.body)
  // console.log("comment-id", req.params.id)

  try {
    res.json(
      await Order.findByIdAndUpdate(
        req.params.id,
        { $push: { comments: req.body } },
        { new: true }
      )
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
