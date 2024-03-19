import express from "express";
import {
  deleteProfileController,
  resetPasswordController,
  updateController,
  updateUserPassword,
  userController,
} from "../controllers/userController.js";
import { authMiddleWare } from "../middlewares/authMiddleware.js";
const router = express.Router();
router.get("/getUser", authMiddleWare, userController);
router.put("/updateUser", authMiddleWare, updateController);
// update password
router.post("/updatePassword", authMiddleWare, updateUserPassword);
router.post("/resetPassword", authMiddleWare, resetPasswordController);
router.delete("/deleteUser/:id", authMiddleWare, deleteProfileController);

export default router;
