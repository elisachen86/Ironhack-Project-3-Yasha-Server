const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    date: { type: Date },
    brandCompany: {
      // type: String,
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
      secondPaymentAmount: { type: Number },
      firstPaymentDate: { type: Date },
      secondPaymentDate: { type: Date },
    },
    deliveryWindow: {
      startDate: { type: Date },
      endDate: { type: Date },
    },
    currency: { type: String, default: "EUR" },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        timeStamp: Date,
        message: String,
        isRead: {type: Boolean, default: false},
        user: { type: Schema.Types.ObjectId, ref: "User" },
      },
    ],
    documents: [
      {
        docName: String,
        docUrl: String,
        // submittedOrder: String,
        // shippingDocs: String,
        // confirmedOrder: String,
        // packingList: String,
        // commercialInvoice: String,
        // shippingConfirmation: String,
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
            // "confirmed",
            // "packed",
            // "ready_to_ship",
            "shipped",
            "received",
          ],
          default: "submitted",
        },
        modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
        date: {
          type: Date,
          default: new Date(),
        },
      },
    ],

    paymentHistory: [
      {
        payment: {
          type: String,
          enum: ["unpaid", "partially paid", "fully paid"],
          default: "unpaid",
        },
        modifiedBy: { type: Schema.Types.ObjectId, ref: "user" },
        date: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
