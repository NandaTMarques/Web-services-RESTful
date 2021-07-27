const connection = require('../config/connection');

const createEmployee = async ({ DataCad, Cargo, CPF, Nome, UfNasc, Salario, Status }) => {
  const employee = await connection()
    .then((db) => db.collection('employees')
    .insertOne({ DataCad: DataCad, Cargo, CPF, Nome, UfNasc, Salario, Status }))
    .then(result => result.ops[0]);
  return employee;
};

const getAllEmployees = async () => {
  const allEmployee = await connection().then((db) =>
    db.collection('employees').find().toArray());
  return allEmployee;
};

const  getEmployeeByName = async (Nome) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').findOne({ Nome: Nome }));
  return employee;
};

const  getEmployeeByCpf = async (CPF) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').findOne({ CPF: CPF }));
  return employee;
};

const  getEmployeesByCargo = async (Cargo) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').find({ Cargo: Cargo }).toArray());
  return employee;
};

const  getEmployeesByData = async (DataCad) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').find({ DataCad: DataCad }).toArray());
  return employee;
};

const  getAllEmployeesByUF = async () => {
  const employee = await connection()
    .then((db) =>  db.collection('employees')
    .find().sort({UfNasc: -1}).toArray());
    //.aggregate([{$group: {_id: '$UfNasc', count: {$sum: 1}}}, {$sort:{ count: -1}}]).toArray());
  return employee;
};

const  getEmployeesBySalario = async (Salario) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').find({ Salario: Salario }).toArray());
  return employee;
};

const  getEmployeesByFaixaSalarial = async (min, max) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees')
    .find({ $and: [{ Salario: { $gt: min} }, {Salario: { $lt: max}}] })
    .toArray());
  return employee;
};

const  getEmployeesByStatus = async (Status) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').find({ Status: Status }).toArray());
  return employee;
};

const updateEmployee =async ({ DataCad, Cargo, CPF, Nome, UfNasc, Salario, Status }) => {
  const employee = await connection()
    .then((db) => db.collection('employees')
      .updateOne(
        { CPF: CPF },
        {$set: {  DataCad, Cargo, CPF: CPF, Nome, UfNasc, Salario, Status }}))
    .then(() => ({  DataCad, Cargo, CPF: CPF, Nome, UfNasc, Salario, Status }));

  return employee;
};

const deleteEmployee = async (CPF) => {
  const employee = await connection().then((db) =>
    db.collection('employees').deleteOne({ CPF: CPF })
  );
  return employee;
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