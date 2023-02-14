import express from 'express';

//Import API router
import userrouter from './Router/user.router.js';
import Categoryrouter from './Router/categoryrouter.js';
import Subcategoryrouter from './Router/subcategory.router.js';

//to resolve  cross origin problem
 import cors from 'cors'

import fileUpload from 'express-fileupload';

// import customer from './Router/customer.router.js'
import bodyParser from 'body-parser';

const app=express();
// app.get("/",(req,res)=>{
//     res.send("<h1>it working");
// })

//to resolve cross origin problem
app.use(cors());


 //to extract file content
 app.use(fileUpload());

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/user",userrouter)

//for category
app.use("/category",Categoryrouter)


//for subcategory
app.use("/subcategory",Subcategoryrouter)


//for customer
// app.use("/customer",customerrouter)

app.listen(3001)
console.log("server invoked at link http://localhost:3001")
