const connection = require('../config/connection');

const createEmployee = async ({ DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status }) => {
  const employee = await connection()
    .then((db) => db.collection('employees')
    .insertOne({ DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status }))
    .then(result => result.insertedId);
    
  return {
    id: employee,
    DataCad,
    Cargo,
    Cpf,
    Nome,
    UfNasc,
    Salario,
    Status,
  };
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
//.find({Nome: { $regex: new RegExp(Nome), $options: 'i' }}).toArray());

const  getEmployeeByCpf = async (Cpf) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').findOne({ Cpf: Cpf }));
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

const  getAllEmployeesByUF = async (UfNasc) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').find({ UfNasc: UfNasc }).toArray());
  return employee;
};

const  getEmployeesByFaixaSalarial = async (min, max) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees')
    .find({ $and: [{ Salario: { $gte: min} }, {Salario: { $lte: max}}] })
    .toArray());
  return employee;
};

const  getEmployeesByStatus = async (Status) => {
  const employee = await connection()
    .then((db) =>  db.collection('employees').find({ Status: Status }).toArray());
  return employee;
};

const updateEmployee =async ({ DataCad, Cargo, Cpf, Nome, UfNasc, Salario, Status }) => {
  const employee = await connection()
    .then((db) => db.collection('employees')
      .updateOne(
        { Cpf: Cpf },
        {$set: {  DataCad, Cargo, Cpf: Cpf, Nome, UfNasc, Salario, Status }}))
    .then(() => ({  DataCad, Cargo, Cpf: Cpf, Nome, UfNasc, Salario, Status }));

  return employee;
};

const deleteEmployee = async (Cpf) => {
  const employee = await connection().then((db) =>
    db.collection('employees').deleteOne({ Cpf: Cpf })
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
  getEmployeesByFaixaSalarial,
  getEmployeesByStatus,
  updateEmployee,
  deleteEmployee,
}