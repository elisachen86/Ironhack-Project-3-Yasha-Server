require("dotenv").config()
require("./../config/dbConnection")

const Company = require("./../models/Company")


const companies =  [
      {
         name: "Yasha", 
         companyType: "retailer",
         email: "yashapublic@yasha.com",
         vatNb: "1234567890",
         seasonList: ["SS2020", "FW2020", "SS2021"], 
         categoryList: [],
        //  accountOwner: "",
         userList: [], 
         plan: "Enterprise"
      },

      {
         name: "Issoire", 
         companyType: "brand",
         email: "issoiremedia@issoire.com",
         vatNb: "1234567890",
         seasonList: ["spring/summer 2020", "fall/winter 2020", "spring/summer 2021" ], 
         categoryList: [],
        //  accountOwner: "",
         userList: [], 
         plan: "Professional"
      }


]


Company.deleteMany()
  .then(async () => {
    const insertedCompanies = await Company.insertMany(companies);
    console.log(`ok : ${insertedCompanies.length} companies inserted`);
  })
  .catch((err) => {
    console.log(err);
  });