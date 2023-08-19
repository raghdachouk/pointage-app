import EmployeeModel from "@models/employee";

export const addEmployee=  async (req, res) => {
    try {
      const { name, firstName, department } = req.body;
      const newEmployee = new EmployeeModel({  name, firstName, department, dateCreated: new Date() });
      const savedEmployee = await newEmployee.save();
      if(savedEmployee) return  res.status(200).json({ok: true});
    } catch (error) {
      console.error(error);
     return res.status(500).json({ok: false, error: 'Erreur lors de la création de l\'employé' });
    }
  }