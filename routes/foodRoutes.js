import express from "express";
import { authMiddleWare } from "../middlewares/authMiddleware.js";
import {
  createFoodController,
  deleteFoodController,
  getAllFoodController,
  getFoodByResturantController,
  getSingleFoodController,
  updateFoodController,
} from "../controllers/foodController.js";
const router = express.Router();
router.post("/create", authMiddleWare, createFoodController);
router.get("/getAll", getAllFoodController);
router.get("/getSingle/:id", getSingleFoodController);
router.get("/getByResturant/:id", getFoodByResturantController);
router.put("/update/:id", authMiddleWare, updateFoodController);
router.delete("/delete/:id", authMiddleWare, deleteFoodController);
export default router;
