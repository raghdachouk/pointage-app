import EmployeeModel from "@models/employee";
import { timeDifference } from "@utils/timeDifference";

export const checkOut = async (req, res) => {
  try {
    const { employeeId, comment } = req.body;
    const employee = await EmployeeModel.findById(employeeId);
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, error: "Employee not found" });
    }
    if (!employee.checkIn) {
      return res
        .status(400)
        .json({ success: false, message: "Employee has not checked in yet" });
    }
    employee.checkOut = new Date();
    employee.checkOutComment = comment;

    employee.checkInCheckOutTime = timeDifference(
      employee.checkIn,
      employee.checkOut
    );

    await employee.save();
    return res.status(200).json({ success: true, result: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error during check-out" });
  }
};
