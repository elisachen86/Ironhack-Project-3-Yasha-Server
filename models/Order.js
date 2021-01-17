const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    date: { type: Date },
    brandCompany: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    retailerCompany: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    season: { type: String },
    category: { type: String },
    brandContact: { type: Schema.Types.ObjectId, ref: "User" },
    retailerContact: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    paymentTerms: {
      firstPaymentAmount: { type: Number },
      SecondPaymentAmount: { type: Number },
      firstPaymentDate: { type: Date },
      DatePaymentDate: { type: Date },
    },
    deliveryWindow: {
      startDate: { type: Date },
      endDate: { type: Date },
    },
    currency: { type: String },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        timeStamp: Date,
        message: String,
        user: { type: Schema.Types.ObjectId, ref: "User" },
      },
    ],
    documents: [
      {
        submittedOrder: String,
        confirmedOrder: String,
        packingList: String,
        commercialInvoice: String,
        shippingConfirmation: String,
      },
    ],
    items: [
      {
        itemName: { type: String },
        price: { type: Number },
        quantity: { type: Number },
      },
    ],

    steps: [
      {
        stage: {
          type: String,
          enum: [
            "submitted",
            "confirmed",
            "packed",
            "ready_to_ship",
            "shipped",
            "received",
          ],
        },
        modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
        date: Date,
      },
    ],

    // isSubmitted: {
    //   stageCompleted: { type: Boolean },
    //   modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
    //   timeCompleted: Date,
    // },
    // isConfirmed: {
    //   stageCompleted: { type: Boolean },
    //   modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
    //   timeCompleted: Date,
    // },
    // isReadyToShip: {
    //   stageCompleted: { type: Boolean },
    //   modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
    //   timeCompleted: Date,
    // },
    // isShipped: {
    //   stageCompleted: { type: Boolean },
    //   modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
    //   timeCompleted: Date,
    // },
    // isReceived: {
    //   stageCompleted: { type: Boolean },
    //   modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
    //   timeCompleted: Date,
    // },
    isFirstPaymentDone: {
      paymentCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
      timeCompleted: Date,
    },
    isSecondPaymentDone: {
      paymentCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
      timeCompleted: Date,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
