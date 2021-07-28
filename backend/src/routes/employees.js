const express = require('express');
const rescue = require('express-rescue');
const employeesController = require('../controllers/employees');
const validateForm = require('../middlewares/validateForms');

const router = express.Router();

router.post('/', validateForm, rescue(employeesController.createEmployee));
router.get('/', rescue(employeesController.getAllEmployees));
router.post('/nome', rescue(employeesController.getEmployeeByName));
router.post('/cpf', rescue(employeesController.getEmployeeByCpf));
router.post('/cargo', rescue(employeesController.getEmployeesByCargo));
router.post('/datacad', rescue(employeesController.getEmployeesByData));
router.post('/uf', rescue(employeesController.getAllEmployeesByUF));
router.post('/salario', rescue(employeesController.getEmployeesBySalario));
router.post('/faixa-salarial', rescue(employeesController.getEmployeesByFaixaSalarial));
router.post('/status', rescue(employeesController.getEmployeesByStatus));
router.delete('/delete', rescue(employeesController.deleteEmployee));

module.exports = router;
