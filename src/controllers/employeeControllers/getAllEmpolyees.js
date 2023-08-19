import EmployeeModel from "@models/employee";

export const getAllEmployees= async (req, res) => {
    try {
      const { dateCreated } = req.query;
      let query = {};
      if (dateCreated) {
        query = { dateCreated: { $gte: new Date(dateCreated) } };
      }
      const employees = await EmployeeModel.find(query);
      
     return res.json({result: employees});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error retrieving employees' });
    }
  }
