const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
  permission: { type: String, enum: ["admin", "editor"] },
  userType: { type: String, enum: ["retailer", "brand"] },
  company: { type: Schema.Types.ObjectId, ref: "company" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
