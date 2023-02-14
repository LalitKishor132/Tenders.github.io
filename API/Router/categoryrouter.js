import  express  from "express";

const router=express.Router();

import * as Categorycontroller from "../controller/categorycontroller.js"

router.post("/save",Categorycontroller.save)
//fetch data
router.get("/fetch",Categorycontroller.fetch)

// //for deletion
router.delete("/delete/:id",Categorycontroller.deleteCategory)

// //for updating data
router.patch("/update",Categorycontroller.updateCategory)

//rouetre
export default router;