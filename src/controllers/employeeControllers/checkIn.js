import EmployeeModel from "@models/employee";

export const checkIn = async (req, res) => {
  try {
    const { employeeId, comment } = req.body;
    const employee = await EmployeeModel.findById(employeeId);
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    }
    employee.checkIn = new Date();
    employee.checkInComment = comment;
    await employee.save();
    return res.status(200).json({ result: employee, success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error during check-in" });
  }
};
