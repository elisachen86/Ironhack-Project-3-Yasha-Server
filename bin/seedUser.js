require("dotenv").config()
require("./../config/dbConnection")
const User = require("./../models/User")
const bcrypt = require("bcrypt");

const salt = 10;

const users =  [
    {
    firstName: "Elisa",
    lastName: "Chen", 
    email:  "elisachenririiiiii@gmail.com",
    password: "toto",
    permission: "admin",
    userType: "retailer",
},
{
    firstName: "Marine",
    lastName: "Sanjuan", 
    email:  "pamplemarine@gmail.com",
    password: "toto",
    permission: "editor",
    userType: "retailer",
},

{
    firstName: "Yu",
    lastName: "Miao", 
    email:  "yuuu.miao@gmail.com",
    password: "toto",
    permission: "editor",
    userType: "brand",
},

]



users.forEach((oneUser) => {

  const hashedPassword = bcrypt.hashSync(oneUser.password, salt);
  // console.log(hashedPassword)
  oneUser.password = hashedPassword 
  
})

User.deleteMany()
  .then(async () => {
    const insertedUsers = await User.insertMany(users);
    console.log(`ok : ${insertedUsers.length} users inserted`);
  })
  .catch((err) => {
    console.log(err);
  });