import express from 'express'
const router=express.Router()
import * as Subcategorycontroller from '../controller/subcategory.controller.js'

router.post("/save",Subcategorycontroller.save)

router.get("/fetch",Subcategorycontroller.fetch)

router.delete("/delete/:id",Subcategorycontroller.deletesubcategory)

router.patch("/update",Subcategorycontroller.updatesubcategory)

export default router;