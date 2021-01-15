const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        "https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png",
    },
    permission: { type: String, enum: ["admin", "editor"] },
    //default:"editor" ???
    userType: { type: String, enum: ["retailer", "brand"] },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
