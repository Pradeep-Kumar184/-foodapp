import foodModel from "../models/foodModel.js";

export const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    } = req.body;
    if (!title || !price || !description || !resturant) {
      return res.status(500).send({
        success: false,
        message: "Please provide All Fields",
      });
    }
    const newFood = new foodModel({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    });
    await newFood.save();
    return res.status(200).send({
      success: true,
      message: "Food created successfully",
      newFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in create Food API",
      error,
    });
  }
};
export const getAllFoodController = async (req, res) => {
  try {
    const food = await foodModel.find({});
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Food not found",
      });
    }
    return res.status(200).send({
      success: true,
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in delete foodAPI",
      error,
    });
  }
};
export const getSingleFoodController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Food Id not Found",
      });
    }
    const food = await foodModel.findById(resturantId);
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please provide Id",
      });
    }
    return res.status(200).send({
      success: true,
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get single food",
      error,
    });
  }
};
export const getFoodByResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Food Id not Found",
      });
    }
    const food = await foodModel.find({ resturant: resturantId });
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please provide Id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Food get from resturant",
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get single food",
      error,
    });
  }
};
export const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      res.status(404).send({
        success: false,
        message: "Food id not Found",
      });
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Error in update food Id",
      });
    }
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    } = req.body;
    const updatedFood = await foodModel.findByIdAndUpdate(foodId, {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
    });
    await updatedFood.save();
    return res.status(200).send({
      success: true,
      message: "Food id updated successfully",
      updatedFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in update Food API",
      error,
    });
  }
};
export const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "Provide Food Id",
      });
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Food id not Found",
      });
    }
    await foodModel.findByIdAndDelete(foodId);
    return res.status(200).send({
      success: true,
      message: "Food API deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in delete FoodAPI",
      error,
    });
  }
};
