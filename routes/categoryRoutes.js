import express from "express";
import { authMiddleWare } from "../middlewares/authMiddleware.js";
import {
  createCatController,
  deleteCatController,
  getAllCatController,
  updateCatController,
} from "../controllers/categoryController.js";
const router = express.Router();
router.post("/create", authMiddleWare, createCatController);
router.get("/getAll", getAllCatController);
router.put("/update/:id", authMiddleWare, updateCatController);
router.delete("/delete/:id", authMiddleWare, deleteCatController);
export default router;
