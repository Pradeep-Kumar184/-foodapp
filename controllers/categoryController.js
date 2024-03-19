import categoryModel from "../models/categoryModel.js";

export const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "Please provide Category title or ImageUrl",
      });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    return res.status(200).send({
      success: true,
      message: "New category created successfully",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in create cat API",
      error,
    });
  }
};
export const getAllCatController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "category not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Category get successfully",
      category,
      totalCat: category.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all cat API",
      error,
    });
  }
};
export const updateCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updateCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );
    if (!updateCategory) {
      return res.status(500).send({
        success: false,
        message: "No category Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in update API",
      error,
    });
  }
};
export const deleteCatController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    const category = await categoryModel.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found with this Id ",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in  delete category API ",
      error,
    });
  }
};
