import { Router } from "express";

import { EmployeeControllers } from "@controllers";

const employeeRouter = new Router();

// Endpoint pour créer un employé
employeeRouter.post("/employees/addEmployee", EmployeeControllers.addEmployee);

// Endpoint pour récupérer la liste des employés avec filtre par date de création
employeeRouter.get(
  "/employees/getAllEmployees",
  EmployeeControllers.getAllEmployees
);

employeeRouter.post("/employees/check-in", EmployeeControllers.checkIn);

employeeRouter.post("/employees/check-out", EmployeeControllers.checkOut);

export default employeeRouter;
