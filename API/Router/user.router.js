import express from "express";

const router = express.Router();

import * as usercontroller from "../controller/user.controller.js";

// router.get("/", (req, res) => {
//   res.send("api working");
// });
router.post("/save", usercontroller.save);
//fetch data
router.get("/fetch", usercontroller.fetch);

//for deletion
router.delete("/delete/:id", usercontroller.deleteUser);

//for updating data
router.patch("/update", usercontroller.updateUser);

//for login
router.post("/login", usercontroller.login);

//rouetre
export default router;
