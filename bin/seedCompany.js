require("dotenv").config();
require("./../config/dbConnection");
const Company = require("./../models/Company");
const User = require("./../models/User");

const companies = [
  {
    name: "Monoprix",
    companyType: "retailer",
    email: "monoprixpubic@monoprix.com",
    vatNb: "1234567890",
    seasonList: ["Jan-2021", "Feb-2021", "Dec-2020"],
    categoryList: ["Food", "Drinks", "Home"],
    userList: [],
    plan: "Enterprise",
  },

  {
    name: "Danone",
    companyType: "brand",
    email: "danonevendors@danone.com",
    vatNb: "1234567890",
    seasonList: ["20DEC", "21JAN", "21FEB"],
    categoryList: ["Classic", "New", "Season"],
    userList: [],
    plan: "Professional",
  },
];

Company.deleteMany()
  .then(async () => {
    const users = await User.find();

    function getRandom(arg) {
      return Math.floor(Math.random() * Math.floor(arg.length));
    }

    for (let i = 0; i < users.length; i++) {
      companies[getRandom(companies)].userList.push(users[i]);
    }

    for (let i = 0; i < companies.length; i++) {
      companies[i].accountOwner =
        companies[i].userList[getRandom(companies[i].userList)];
    }
  })
  .then(async () => {
    const insertedCompanies = await Company.insertMany(companies);
    console.log(`ok : ${insertedCompanies.length} companies inserted`);

    insertedCompanies.forEach((arr) => {
      let companyId = arr._id;

      arr.userList.forEach(async (user) => {
        let foundUser = await User.findByIdAndUpdate(
          user._id,
          { company: companyId },
          { new: true }
        );
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
