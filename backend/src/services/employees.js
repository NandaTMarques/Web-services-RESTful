const employeesModel = require('../models/employees');

const createEmployee = async ({ DataCad, Cargo, CPF, Nome, UfNasc, Salario, Status }) => {
  const employee = await employeesModel.createEmployee({ DataCad, Cargo, CPF, Nome, UfNasc, Salario, Status });
  return employee;
};

const getAllEmployees = async () => {
  const employees = await employeesModel.getAllEmployees();
  return employees;
};

const getEmployeeByName = async (Nome) => {
  if(!Nome) throw new Error('Invalid entries. Try again.');
  const employee = await employeesModel.getEmployeeByName(Nome);
  return employee;
};

const getEmployeesByCargo = async (Cargo) => {
  if(!Cargo) throw new Error('Invalid entries. Try again.');
  const employees = await employeesModel.getEmployeesByCargo(Cargo);
  return employees;
};

const getEmployeesByData = async (DataCad) => {
  if(!DataCad || DataCad.length !== 10) throw new Error('Invalid entries. Try again.');
  const employees = await employeesModel.getEmployeesByData(DataCad);
  return employees;
};

const getAllEmployeesByUF = async (UfNasc) => {
  const employees = await employeesModel.getAllEmployeesByUF(UfNasc);
  return employees;
};

const getEmployeesBySalario = async (Salario) => {
  if(!Salario) throw new Error('Invalid entries. Try again.');
  const employees = await employeesModel.getEmployeesBySalario(Salario);
  return employees;
};

const getEmployeesByFaixaSalarial = async (min, max) => {
  //if(!min || !max) throw new Error('Invalid entries. Try again.');
  const employees = await employeesModel.getEmployeesByFaixaSalarial(min, max);
  return employees;
};


const getEmployeesByStatus = async (Status) => {
  if(!Status) throw new Error('Invalid entries. Try again.');
  const employees = await employeesModel.getEmployeesByStatus(Status);
  return employees;
};

const getEmployeeByCpf = async (CPF) => {
  if(!CPF || CPF.length !== 11) throw new Error('Invalid entries. Try again.');
  const Employee = await employeesModel.getEmployeeByCpf(CPF);
  return Employee;
};

const updateEmployee = async ({ DataCad, Cargo, CPF, Nome, UfNasc, Salario, Status }) => {
  const employee = await employeesModel.updateEmployee({ DataCad, Cargo, CPF, Nome, UfNasc, Salario, Status });
  return employee;
};

const deleteEmployee = async (CPF) => {
  const getEmployee = await getEmployeeByCpf(CPF);
  if (!getEmployee) throw new Error('Employee already not exists');
  await employeesModel.deleteEmployee(CPF);
  return getEmployee;
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeByName,
  getEmployeeByCpf,
  getEmployeesByCargo,
  getEmployeesByData,
  getAllEmployeesByUF,
  getEmployeesBySalario,
  getEmployeesByFaixaSalarial,
  getEmployeesByStatus,
  updateEmployee,
  deleteEmployee,
}
