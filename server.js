import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/testRoutes.js";
import connectDb from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import resturantRoute from "./routes/resturantRoutes.js";
import categoryRoute from "./routes/categoryRoutes.js";
import foodRoute from "./routes/foodRoutes.js";
import orderRoute from "./routes/orderRoutes.js";

const app = express();

// config dotenv
dotenv.config();
// db connection
connectDb();
// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// routes
app.use("/api/v1/test", router);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/resturant", resturantRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/food", foodRoute);
app.use("/api/v1/order", orderRoute);

app.get("/", (req, res) => {
  return res.status(200).send("welcome to server");
});
const PORT = process.env.PORT || 8080;
// listen
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
