import express from "express";
import {
  orderStatusController,
  placeOrderController,
} from "../controllers/orderController.js";
import { authMiddleWare } from "../middlewares/authMiddleware.js";
import { adminMiddleWare } from "../middlewares/adminMiddleware.js";

const router = express.Router();
router.post("/placeOrder", authMiddleWare, placeOrderController);
// orderStatus routes
router.post(
  "/orderStatus/:id",
  authMiddleWare,
  adminMiddleWare,
  orderStatusController
);
export default router;
