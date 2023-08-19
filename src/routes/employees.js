import { Router } from "express";

import { EmployeeControllers } from "@controllers";

const employeeRouter = new Router();

employeeRouter.post(
    "/employees/addEmployee",
    EmployeeControllers.addEmployee
  );
  
employeeRouter.get(
  "/employees/getAllEmployees",
  EmployeeControllers.getAllEmployees
);


export default employeeRouter;
