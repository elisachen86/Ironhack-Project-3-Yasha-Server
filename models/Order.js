const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    date: { type: Date, required: true },
    brandCompany: {
      type: Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    retailerCompany: {
      type: Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    season: { type: String, required: true },
    collection: { type: String, required: true },
    brandContact: { type: Schema.Types.ObjectId, ref: "user", required: true },
    retailerContact: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    paymentTerms: {
      firstPaymentAmount: { type: Number, required: true },
      SecondPaymentAmount: { type: Number, required: true },
      firstPaymentDate: { type: Date, required: true },
      DatePaymentDate: { type: Date, required: true },
    },
    deliveryWindow: {
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
    },
    currency: { type: String, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: "user" }],
    comments: [
      {
        timeStamp: Date,
        message: String,
        user: { type: Schema.Types.ObjectId, ref: "user" },
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
        itemName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    isSubmitted: {
      stageCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
      timeCompleted: Date,
    },
    isConfirmed: {
      stageCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
      timeCompleted: Date,
    },
    isReadyToShip: {
      stageCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
      timeCompleted: Date,
    },
    isShipped: {
      stageCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
      timeCompleted: Date,
    },
    isReceived: {
      stageCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
      timeCompleted: Date,
    },
    isFirstPaymentDone: {
      paymentCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
      timeCompleted: Date,
    },
    isSecondPaymentDone: {
      paymentCompleted: { type: Boolean },
      modifiedBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
      timeCompleted: Date,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
