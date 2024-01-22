const { Router } = require("express");
const user = Router();
const { UserValidation } = require("../validation/userValidation");

const {
  getData,
  createUser,
  updateUser,
} = require("../controller/userControll");

user.get("/allUsers", getData);

user.post("/create", [UserValidation], createUser);

user.patch("/update", updateUser);

module.exports = { user };
