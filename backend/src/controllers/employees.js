const employeesServices = require('../services/employees');

const getAllEmployees = async (_req, res) => {
  try {
    const employee = await employeesServices.getAllEmployees();
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getEmployeeByName = async (req, res) => {
  try {
    const { search } = req.body;
    const employee = await employeesServices.getEmployeeByName(search);
    return res.status(200).json(employee);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const createEmployee = async (req, res) => {
  try {
    const { Cargo, Cpf, Nome, UfNasc, Salario } = req.body;
    const newEmployee = await employeesServices.createEmployee({
      Cargo,
      Cpf,
      Nome,
      UfNasc,
      Salario 
    });
    
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getEmployeeByCpf = async (req, res) => {
  try {
    const { search } = req.body;
    const employee = await employeesServices.getEmployeeByCpf(search);
    return res.status(200).json(employee);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getEmployeesByCargo = async (req, res) => {
  try {
    const { search } = req.body;
    const employees = await employeesServices.getEmployeesByCargo(search);
    return res.status(200).json(employees);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getEmployeesByData = async (req, res) => {
  try {
    const { search } = req.body;
    const employees = await employeesServices.getEmployeesByData(search);
    return res.status(200).json(employees);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAllEmployeesByUF = async (req, res) => {
  const { search } = req.body;
  try {
    const employees = await employeesServices.getAllEmployeesByUF(search);
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getEmployeesByFaixaSalarial = async (req, res) => {
  try {
    const { min, max } = req.body.salario;
    const employees = await employeesServices.getEmployeesByFaixaSalarial(min, max);
    return res.status(200).json(employees);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getEmployeesByStatus = async (req, res) => {
  try {
    const { search } = req.body;
    const employees = await employeesServices.getEmployeesByStatus(search);
    return res.status(200).json(employees);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { cpf } = req.params;
    const employee = await employeesServices.deleteEmployee(cpf);
    res.status(204).json(employee);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeByName,
  getEmployeeByCpf,
  getEmployeesByCargo,
  getEmployeesByData,
  getAllEmployeesByUF,
  getEmployeesByFaixaSalarial,
  getEmployeesByStatus,
  deleteEmployee,
};