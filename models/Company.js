const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({

                name: String,
                companyType: {type: String, enum: ["retailer", "brand"]},
                email: String,
                phoneNumber: String,
                vatNb: String,
                shippingAddress: String,
                billingAddress: String,
                seasonList:  [String],
                categoryList: [String],
                accountOwner: { type: Schema.Types.ObjectId, ref: "User"},
                userList:[{
                    users: { type: Schema.Types.ObjectId, ref: "User" }
                }], 
                plan: {type: String, enum: ["Stater", "Professional", "Enterprise"]}

},  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;


// Name: String
// companyType: Retailer, brand
// Email: String
// phoneNumber: String
// vatNb: Number
// shippingAddress: String
// billingAddress: String
// seasonList: [ String ]
// categoryList: [ String ]
// accountOwner: [String] / references a user_id in the user db
// userList: [ String ] / referencing the user db (cf. length of the array)
// Plan

