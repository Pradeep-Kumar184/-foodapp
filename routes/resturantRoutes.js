import express from "express";
import { authMiddleWare } from "../middlewares/authMiddleware.js";
import {
  createResturantController,
  delateResturantController,
  getAllResturantController,
  getSingleResturantController,
} from "../controllers/resturantController.js";
const router = express.Router();
router.post("/create", authMiddleWare, createResturantController);
router.get("/getAll", getAllResturantController);
// get resturant by id
router.get("/getSingle/:id", getSingleResturantController);
router.delete("/delete/:id", authMiddleWare, delateResturantController);
export default router;
