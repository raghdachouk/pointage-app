import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  id: String,
  name: String,
  firstName: String,
  dateCreated: Date,
  department: String,
  checkIn: Date,
  checkInComment: String,
  checkOut: Date,
  checkOutComment: String,
  checkInCheckOutTime: String,
});

const EmployeeModel = mongoose.model("employee", employeeSchema);

export default EmployeeModel;
