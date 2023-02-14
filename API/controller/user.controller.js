import "../models/connection.js";
import UserSchemaModel from "../models/user.models.js";
import url from "url";
import jwt from "jsonwebtoken";
import rs from "randomstring";
import sendEmail from "../controller/SendMail.js";

//for updation
export var updateUser = async (req, res, next) => {
  let userDetails = await UserSchemaModel.findOne(req.body.condition);
  if (userDetails) {
    // let id = req.body._id;
    // delete req.body._id;
    let user = await UserSchemaModel.updateOne(
      req.body.condition,
      req.body.set
    );
    if (user) return res.status(201).json({ msg: "success" });
    else return res.status(500).json({ error: "Server Error" });
  } else
    return res.status(404).json({ error: "Requsted resource not availabel" });
};

//for deletaion data from database
export var deleteUser = async (req, res, next) => {
  var id = req.params.id;
  var user = await UserSchemaModel.find({ _id: id });
  if (user.length != 0) {
    let result = await UserSchemaModel.deleteMany({ _id: id });
    if (result) return res.status(201).json({ msg: "success" });
    else return res.status(500).json({ error: "Server Error" });
  } else return res.status(404).json({ error: "Resource not found" });
};

//for fetching data from database
export var fetch = async (req, res, next) => {
  var condition_object = url.parse(req.url, true).query;
  console.log(condition_object);
  var userList = await UserSchemaModel.find(condition_object);
  var l = userList.length;
  if (l != 0) return res.status(201).json(userList);
  else return res.status(500).json({ error: "Server Error" });
};

export var save = async (req, res, next) => {
  var userDetails = req.body;
  sendEmail(userDetails.email, userDetails.password);
  var userList = await UserSchemaModel.find();
  var l = userList.length;
  var _id = l == 0 ? 1 : userList[l - 1]._id + 1;
  userDetails = {
    ...userDetails,
    _id: _id,
    status: 0,
    role: "user",
    info: Date(),
  };
  var user = await UserSchemaModel.create(userDetails);
  if (user) return res.status(201).json({ status: true });
  else return res.status(500).json({ status: false });
};

//for login
export var login = async (req, res, next) => {
  var userDetails = req.body;
  userDetails = { ...userDetails, status: 1 };
  var userList = await UserSchemaModel.findOne(userDetails);

  if (userList) {
    let payload = { subject: userList.email };
    let key = rs.generate();
    let token = jwt.sign(payload, key);
    return res.status(201).json({ token: token, userdetails: userList });
  } else return res.status(500).json({ result: "server Error" });
};
