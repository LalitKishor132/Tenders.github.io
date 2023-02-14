import '../models/connection.js'
import CategorySchemaModel from '../models/category.model.js'
import url from 'url';
import path from 'path'



const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export var save=async(req,res,next)=>{
     var categoryDetails=req.body.catnm;
    var caticon=req.files.caticon;
    var caticonname=Date.now()+"-"+caticon.name;
    var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/caticons",caticonname);
    caticon.mv(uploadpath);
    var cList = await CategorySchemaModel.find();
    var l=cList.length;
    var _id=l==0?1:cList[l-1]._id+1;
    var categoryDetails={...categoryDetails,"_id":_id,"catnm":categoryDetails,"caticonnm":caticonname};
    var category = await CategorySchemaModel.create(categoryDetails);
    if(category)
      return res.status(201).json({"result":"Category added successfully...."});
    else
      return res.status(500).json({"result": "Server Error"});

};

//for updation
export var updateCategory=async(req,res,next)=>{
  let CategoryDetails = await CategorySchemaModel.findOne({_id:req.body._id});
  if(CategoryDetails)
  {
    let id =req.body._id;
    delete req.body._id;
    let Category=await CategorySchemaModel.updateOne({_id:id},{$set:req.body});
    if(Category)
    return res.status(201).json({"msg":"success"});
    else
    return res.status(500).json({error:"Server Error"});
  }
  else
  return res.status(404).json({error:"Requsted resource not availabel"})
}



// //for deletaion data from database
export var deleteCategory=async(req,res,next)=>{
  var id=req.params.id;
  var Category=await CategorySchemaModel.find({_id:id});
  if(Category.length!=0)
  {
    let result = await CategorySchemaModel.deleteMany({_id:id});
    if(result)
     return res.status(201).json({"msg":"success"});
   else
     return res.status(500).json({error: 'Server Error'}); 
 }
 else
 return res.status(404).json({error:'Resource not found'});
}



// //for fetching data from database
export var fetch=async(req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  // console.log(condition_object)
  var cList = await CategorySchemaModel.find(condition_object);
  var l=cList.length;
   if(l!=0)
     return res.status(201).json(cList);
   else
     return res.status(500).json({error: 'Server Error'}); 
 }; 