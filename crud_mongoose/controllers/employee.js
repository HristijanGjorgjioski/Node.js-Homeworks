const mongoose = require('mongoose');
const Employee = require('../models/employee');

exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();

    res.status(200).json(employees);
};

exports.getEmployeeById = async (req, res) => {
    const { id } = req.params;

    try {
        const employee = await Employee.findById(id);
        
        res.status(200).json({
            error: null,
            message: 'Employee successfully finded',
            employee
        })
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
};

exports.createEmployee = async (req, res) => {
    const { first_name, last_name, position } = req.body;
    
    try {
        const employee = await Employee.create({ first_name, last_name, position });
        
        res.status(200).json({
            error: null,
            message: 'Employee successfully created',
            employee
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    };
};

exports.updateEmployee = async (req, res) => {
    // const { id } = req.params;
    // const { first_name, last_name, position } = req.body;

    await Employee.findByIdAndUpdate(req.params.id, req.body);
    const employee = await Employee.findById(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(employee._id)) 
        return res.status(404).send(`No post with id: ${employee._id}`);

    // const updatedEmployee = { first_name, last_name, position, _id: id };

    // await Employee.findByIdAndUpdate(id, updatedEmployee);

    // res.json(updatedEmployee);

    res.status(201).send({
        error: null,
        message: `Employee with id #${employee._id} has been updated`,
        employee
    });
}

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No employee with id: ${id}`);

    await Employee.findByIdAndDelete(id);

    res.json({ message: "Employee deleted successfully." });
}
