const employeesModel = require('../models/employees');

const createEmployee = async ({ Cargo, Cpf, Nome, UfNasc, Salario }) => {
  const DataCad = new Date().toLocaleDateString();
  const Status = 'ATIVO';
  const findEmployee = await employeesModel.getEmployeeByCpf(Cpf);
  if(findEmployee) {
    const updateEmployee = await employeesModel.updateEmployee({
      DataCad,
      Cargo,
      Cpf,
      Nome,
      UfNasc,
      Salario,
      Status
    });

    return updateEmployee;
  }
  const newEmployee = await employeesModel.createEmployee({
    DataCad,
    Cargo,
    Cpf,
    Nome,
    UfNasc,
    Salario,
    Status
  });
  return newEmployee;
};

const getAllEmployees = async () => {
  const employees = await employeesModel.getAllEmployees();
  return employees;
};

const getEmployeeByName = async (Nome) => {
  if(!Nome) throw new Error('Invalid entries. Try again.');
  const employee = await employeesModel.getEmployeeByName(Nome);
  return [employee];
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
  console.log(min, max);
  //if(!min || !max) throw new Error('Invalid entries. Try again.');
  const employees = await employeesModel.getEmployeesByFaixaSalarial(+min, +max);
  return employees;
};

const getEmployeesByStatus = async (Status) => {
  if(!Status) throw new Error('Invalid entries. Try again.');
  const employees = await employeesModel.getEmployeesByStatus(Status);
  return employees;
};

const getEmployeeByCpf = async (Cpf) => {
  if(!Cpf || Cpf.length !== 11) throw new Error('Invalid entries. Try again.');
  const Employee = await employeesModel.getEmployeeByCpf(Cpf);
  return [Employee];
};

const updateEmployee = async ({ DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status }) => {
  const employee = await employeesModel.updateEmployee({ DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status });
  return employee;
};

const deleteEmployee = async (Cpf) => {
  const getEmployee = await employeesModel.getEmployeeByCpf(Cpf);
  if (!getEmployee) throw new Error('Employee already not exists');
  await employeesModel.deleteEmployee(Cpf);
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
