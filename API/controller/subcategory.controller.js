import "../models/connection.js";
import subcategorySchemaModel from "../models/subcategory.model.js";
import CategorySchemaModel from "../models/category.model.js";
import url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export var save = async (req, res, next) => {
  var subcategoryDetails = req.body;
  var caticon = req.files.caticon;
  var subcaticonname = Date.now() + "-" + caticon.name;
  var uploadpath = path.join(
    __dirname,
    "../../UI/public/assets/uploads/subcaticons",
    subcaticonname
  );
  caticon.mv(uploadpath);
  var scList = await subcategorySchemaModel.find();
  var l = scList.length;
  var _id = l == 0 ? 1 : scList[l - 1]._id + 1;
  var subcategoryDetails = {
    ...subcategoryDetails,
    _id: _id,
    subcaticonnm: subcaticonname,
  };
  var subcategory = await subcategorySchemaModel.create(subcategoryDetails);
  if (subcategory)
    return res
      .status(201)
      .json({ result: "SubCategory added successfully...." });
  else return res.status(500).json({ result: "Server Error" });
};

export var fetch = async (req, res, next) => {
  var condition_object = url.parse(req.url, true).query;
  var scList = await subcategorySchemaModel.find(condition_object);
  var l = scList.length;
  if (l != 0) return res.status(201).json(scList);
  else return res.status(500).json({ result: "Server Error" });
};

export var deletesubcategory = async (req, res, next) => {
  var id = req.params.id;
  var subcategory = await subcategorySchemaModel.find({ _id: id });
  if (subcategory.length != 0) {
    let result = await subcategorySchemaModel.deleteMany({ _id: id });
    if (result) return res.status(201).json({ msg: "success" });
    else return res.status(500).json({ error: "Server Erorr" });
  } else return res.status(501).json({ error: "Resourse not found" });
};

export var updatesubcategory = async (req, res, next) => {
  var subcategoryDetails = await subcategorySchemaModel.findOne({
    _id: req.body._id,
  });
  if (subcategoryDetails) {
    let id = req.body._id;
    delete req.body._id;
    let subcategory = await subcategorySchemaModel.updateOne(
      { _id: id },
      { $set: req.body }
    );
    if (subcategory) return res.status(201).json({ msg: "success" });
    else return res.status(500).json({ error: "server errorr" });
  } else return res.status(404).json({ error: "request resource not found" });
};
