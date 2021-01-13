require("dotenv").config()
require("./../config/dbConnection")

const User = require("./../models/User")


const users =  [
    {
    firstName: "Elisa",
    lastName: "Chen", 
    email:  "elisachen@gmail.com",
    password: "toto",
    permission: "admin",
    userType: "retailer",
    // company: "Yasha"
},
{
    firstName: "Marine",
    lastName: "Sanjuan", 
    email:  "pamplemarine@gmail.com",
    password: "toto",
    permission: "editor",
    userType: "retailer",
    // company: "Yasha"
},

{
    firstName: "Yu",
    lastName: "Miao", 
    email:  "yuuu.miao@gmail.com",
    password: "toto",
    permission: "editor",
    userType: "brand",
    // company: "Chat"
},

]


User.deleteMany()
  .then(async () => {
    const insertedUsers = await User.insertMany(users);
    console.log(`ok : ${insertedUsers.length} users inserted`);
  })
  .catch((err) => {
    console.log(err);
  });