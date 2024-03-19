import resturantModel from "../models/resturantmodel.js";

export const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      coords,
    } = req.body;
    // validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "please provide title and coords",
      });
    }
    const newResturant = new resturantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      coords,
    });
    await newResturant.save();
    return res.status(201).send({
      success: true,
      message: "New Resturant Created Successfully",
      newResturant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in create Resturant API",
      error,
    });
  }
};
export const getAllResturantController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Available",
      });
    }
    return res.status(200).send({
      success: true,
      totalCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get All Resturant API",
      error,
    });
  }
};
export const getSingleResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please provide resturant Id",
      });
    }
    const resturant = await resturantModel.findById(resturantId);
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found",
      });
    }
    return res.status(200).send({
      success: true,
      resturant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get single Resturant API",
      error,
    });
  }
};
export const delateResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please provide Resturant Id",
      });
    }
    const resturant = await resturantModel.findByIdAndDelete(resturantId);
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "No resturant Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Resturant Api successfully Deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in delete Resturant API",
      error,
    });
  }
};
