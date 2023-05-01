//first guess at this file
const schema = require('../db/schema');
const router = require('express').Router();
const employee = require('?');

router.get('/', async (req, res)=>{
const employeeData = await employee.findAll();

// Return the employeeData promise inside of the JSON response
return res.json(employeeData);
});

router.post('/', async (req, res) => {
const employeeData = await employee.create(req.body);

return res.json(employeeData);
});

router.get('/employee', async (req, res) => {
const employeeData = await employee.findAll({
  employee_name: ['employee name'],
  
  where: {
//       is_employee: true,
//     },
  },
});

return res.json(employeeData);
});

router.get('/:id', async (req, res) => {
const employeeData = await employee.findByPk(req.params.id);

return res.json(employeeData);
});

router.post('/', async (req, res) => {
const employeeData = await employee.create(req.body);

return res.json(employeeData);
});

router.put('/:employee_id', async (req, res) => {
const employeeData = await employee.update(
  {
    employee_name: req.body.employee_name,
  },
  {
    where: {
      employee_id: req.params.employee_id,
    },
  }
);

return res.json(employeeData);
});

router.delete('/:employee_id', async (req, res) => {
const employeeData = await employee.destroy({
  where: {
    employee_id: req.params.employee_id,
  },
});

return res.json(employeeData);
});

module.exports = employee;
