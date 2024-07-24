import express from "express"

// import  addFood  from "../controllers/foodController"
import {addFood,listFood,removeFood} from "../controllers/foodController.js";
import multer  from "multer"

const foodRouter = express.Router();
// image store 
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(re,file,cb) =>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;