import orderModel from "../models/orderModel.js";

export const placeOrderController = async (req, res) => {
  try {
    const { cart } = req.body;
    // cal
    if (!cart) {
      return res.status(500).send({
        success: true,
        message: "Please food cart method",
      });
    }
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    const newOrder = new orderModel({
      food: cart,
      payment: total,
      buyer: req.body.id,
    });
    await newOrder.save();
    return res.status(201).send({
      success: true,
      message: "Order placed Successfully",
      newOrder,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in place Order",
      error,
    });
  }
};
// CHANGE ORDER STATUS CONTROLLER
export const orderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;
    if (!orderId) {
      return res.status(404).send({
        success: false,
        message: "Please provide valid order Id",
      });
    }
    const order = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Order Status Updated",
      order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Change Order Status",
      error,
    });
  }
};
