require("dotenv").config()
require("./../config/dbConnection")
const Company = require("./../models/Company")
const User = require("./../models/User")


const companies =  [
      {
         name: "Monoprix", 
         companyType: "retailer",
         email: "monoprixpubic@monoprix.com",
         vatNb: "1234567890",
         seasonList: ["SS2020", "FW2020", "SS2021"], 
         categoryList: [],
        //  accountOwner: "",
         userList: [], 
         plan: "Enterprise"
      },

      {
         name: "Danone", 
         companyType: "brand",
         email: "danonemedia@issoire.com",
         vatNb: "1234567890",
         seasonList: ["spring/summer 2020", "fall/winter 2020", "spring/summer 2021" ], 
         categoryList: [],
        //  accountOwner: "",
         userList: [], 
         plan: "Professional"
      }

]




function getRandomUser () {
  return Math.floor(Math.random() * Math.floor(users.length));
}
function getRandomCompany(){
  return Math.floor(Math.random() * Math.floor(companies.length)); 
}

Company.deleteMany()
  .then(async () => {
    const users = await User.find()

    for (let i = 0; i < companies.length; i++) {
      companies[i].userList.push(users[getRandomUser()]._id);
      // items[i].category = categories[getRandomCat()]._id;
    }

    // for (let i = 0; i < users.length; i++) {
    //   // companies[i].userList.push(users[getRandomUser()]._id);
    //   users[i].userList.push(users[getRandomUser()]._id);
      // items[i].category = categories[getRandomCat()]._id;
    }



  })
  .then(async () => {
    const insertedCompanies = await Company.insertMany(companies);
    console.log(`ok : ${insertedCompanies.length} companies inserted`);
  })
  .catch((err) => {
    console.log(err);
  });


