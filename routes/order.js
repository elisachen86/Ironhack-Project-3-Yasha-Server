// router prefix  /api/order
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

///////  GET ALL ORDERS ///////
// tested => TBC : deploying requireAuth
// UPDATE SO THAT IT ONLY SHOWS THE LOGGEDIN USERS ORDERS
router.get(
  "/",
  // requireAuth,
  async (req, res, next) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      console.log(error);
    }
  }
);

///////  GET ONE ORDER ///////
// tested => TBC : deploying requireAuth
// UPDATE SO THAT IT ONLY SHOWS THE LOGGEDIN USERS ORDERS
router.get(
  "/:id",
  // requireAuth,
  async (req, res, next) => {
    try {
      const order = await Order.findById(req.params.id);
      res.status(200).json(order);
    } catch (error) {
      console.log(error);
    }
  }
);

///// CREATE AN ORDER ///////////
router.post("/", async (req, res, next) => {
  try {
    const newOrder = await Order.create({
      ...req.body,
      id_user: req.session.currentUser,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
  }
});

///// UPDATE AN ORDER ///////////
router.patch("/:id", async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
  }
});

///// DELETE AN ORDER ///////////
router.delete("/:id", async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "successfully deleted!" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
