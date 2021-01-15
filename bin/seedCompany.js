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
        //  seasonList: ["Jan-2021", "Feb-2021", "Dec-2020"], 
         seasonList: ["Dec 2020", "Jan 2020"], 
         categoryList: ["Food", "Drinks", "Home"],
         userList: [], 
         plan: "Enterprise",
         billingAddress: "8 Avenue du Général Leclerc, 75014 Paris, France"
      },

      {
         name: "Marks and Spencer", 
         companyType: "retailer",
         email: "bonjour@carrefour.com",
         vatNb: "88888888",
        //  seasonList: ["Jan/2021", "Feb/2021", "Dec/2020"], 
        seasonList: ["Dec 2020", "Jan 2020"], 
         categoryList: ["Veggie", "Cheese", "Drinks"],
         userList: [], 
         plan: "Enterprise",
         billingAddress: "458 Oxford St, London W1C 1AP, United Kingdom"
      },
      {
         name: "Danone", 
         companyType: "brand",
         email: "danonevendors@danone.com",
         vatNb: "1234567890",
        //  seasonList: ["20DEC", "21JAN", "21FEB"], 
        seasonList: ["Dec 2020", "Jan 2020"], 
         categoryList: ["Classic", "New", "Season"],
         userList: [], 
         plan: "Professional",
         billingAddress: "458 Oxford St, London W1C 1AP, United Kingdom"

      },
      {
         name: "Coca-Cola", 
         companyType: "brand",
         email: "cocacola-contact@cocacola.com",
         vatNb: "1234567890",
        //  seasonList: ["DEC20", "JAN2021", "FEB2021"], 
        seasonList: ["Dec 2020", "Jan 2020"], 
         categoryList: ["Water", "Sparkling drinks", "Non-sparklings drinks"],
         userList: [], 
         plan: "Professional",
         billingAddress: "24016 Province of Bergamo, Italy"

      }

]



Company.deleteMany()
  .then(async () => {
    const users = await User.find();

    function getRandom(arg) {
      return Math.floor(Math.random() * Math.floor(arg.length));
    }

    function seedByType(arg){
        const filteredUsers = users.filter((arr) => arr.userType == arg)
        const filteredCompanies = companies.filter((arr) => arr.companyType == arg)
        // console.log(filteredUsers, filteredCompanies )

        filteredUsers.forEach((arr) => {
          filteredCompanies[getRandom(filteredCompanies)].userList.push(arr._id)  
        }
        )
          
        filteredCompanies.forEach((arr) => 
              arr.accountOwner == arr.userList[getRandom(arr.userList)]._id
        )    
    }

    seedByType("retailer")
    seedByType("brand")

 })
  .then(async () => {
    const insertedCompanies = await Company.insertMany(companies);
    console.log(`ok : ${insertedCompanies.length} companies inserted`);

    insertedCompanies.forEach((arr) => {
       let companyId = arr._id
        arr.userList.forEach(async (user) => {
            let foundUser = await User.findByIdAndUpdate(user._id, {company: companyId}, {new: true})
        })      
    })
    

  })
  .catch((err) => {
    console.log(err);
  });
