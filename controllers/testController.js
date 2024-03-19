export const testController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "test user data api",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "okay",
    });
  }
};
