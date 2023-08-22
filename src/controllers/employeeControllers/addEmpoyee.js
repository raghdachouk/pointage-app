import EmployeeModel from "@models/employee";

export const addEmployee = async (req, res) => {
  try {
    const { name, firstName, department } = req.body;
    const newEmployee = new EmployeeModel({
      name,
      firstName,
      department,
      dateCreated: new Date(),
    });
    const savedEmployee = await newEmployee.save();
    if (savedEmployee)
      return res
        .status(200)
        .json({ success: true, message: "employee created successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Erreur lors de la création de l'employé",
      });
  }
};
