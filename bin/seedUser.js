require("dotenv").config();
require("./../config/dbConnection");
const User = require("./../models/User");
const bcrypt = require("bcrypt");

const salt = 10;

const users = [
  {
    firstName: "Elisa",
    lastName: "Chen",
    email: "elisachenririiiiii@gmail.com",
    password: "toto",
    permission: "editor",
  },
  {
    firstName: "Marine",
    lastName: "Sanjuan",
    email: "pamplemarine@gmail.com",
    password: "toto",
    permission: "editor",
  },
  {
    firstName: "Yu",
    lastName: "Miao",
    email: "yuuu.miao@gmail.com",
    password: "toto",
    permission: "editor",
  },

  {
    firstName: "Frank",
    lastName: "M",
    email: "frank@youtuber.com",
    password: "toto",
    permission: "editor",
  },

  {
    firstName: "Andy",
    lastName: "T",
    email: "andy@hacker.com",
    password: "toto",
    permission: "editor",
  },

  {
    firstName: "Vincent",
    lastName: "P",
    email: "vincent@911.com",
    password: "toto",
    permission: "editor",
  },

  {
    firstName: "Fanny",
    lastName: "Sabin",
    email: "fsabin@iron.com",
    password: "toto",
    permission: "editor",
  },
  {
    firstName: "titi",
    lastName: "titi",
    email: "titi@titi.com",
    password: "toto",
    permission: "editor",
  },

  {
    firstName: "toto",
    lastName: "toto",
    email: "tototo@toto.com",
    password: "toto",
    permission: "editor",
  },

  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@test.com",
    password: "toto",
    permission: "editor",
  },

  {
    firstName: "Mary",
    lastName: "Jane",
    email: "mary.jane@test.com",
    password: "toto",
    permission: "editor",
  },
];

users.forEach((oneUser) => {
  const hashedPassword = bcrypt.hashSync(oneUser.password, salt);
  // console.log(hashedPassword)
  oneUser.password = hashedPassword;
});

User.deleteMany()
  .then(async () => {
    const insertedUsers = await User.insertMany(users);
    console.log(`ok : ${insertedUsers.length} users inserted`);
  })
  .catch((err) => {
    console.log(err);
  });
