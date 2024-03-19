import userModel from "../models/userModel.js";

export const adminMiddleWare = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.id);
    if (user.userType !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Only Admin Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Un-Authorized Access",
      error,
    });
  }
};
