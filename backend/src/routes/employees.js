const express = require('express');
const rescue = require('express-rescue');
const employeesController = require('../controllers/employees');
const validateForm = require('../middlewares/validateForms');

const router = express.Router();

router.post('/api/employees', validateForm, rescue(employeesController.createEmployee));
router.get('/api/employees', rescue(employeesController.getAllEmployees));
router.get('/api/employees-name', rescue(employeesController.getEmployeeByName));
router.get('/api/employees-cpf', rescue(employeesController.getEmployeeByCpf));
router.get('/api/employees-cargo', rescue(employeesController.getEmployeesByCargo));
router.get('/api/employees-datacad', rescue(employeesController.getEmployeesByData));
router.get('/api/employees-uf', rescue(employeesController.getAllEmployeesByUF));
router.get('/api/employees-salario', rescue(employeesController.getEmployeesBySalario));
router.get('/api/employees-faixa-salarial', rescue(employeesController.getEmployeesByFaixaSalarial));
router.get('/api/employees-status', rescue(employeesController.getEmployeesByStatus));
router.delete('/api/employees-delete', rescue(employeesController.deleteEmployee));

module.exports = router;
