//first guess at this file
const schema = require('../db/schema');
const router = require('express').Router();
const department = require('?');

router.get('/', async (req, res)=>{
const departmentData = await department.findAll();

// Return the departmentData promise inside of the JSON response
return res.json(departmentData);
});

router.post('/', async (req, res) => {
const departmentData = await department.create(req.body);

return res.json(departmentData);
});

router.get('/department', async (req, res) => {
const departmentData = await department.findAll({
department_id: ['department id'],
department_name: ['department name'],

  where: {
//       is_department: true,
//     },
  },
});

return res.json(departmentData);
});

router.get('/department', async (req, res) => {
const departmentData = await department.findByPk(req.params.id);

return res.json(departmentData);
});

router.post('/', async (req, res) => {
const departmentData = await department.create(req.body);

return res.json(departmentData);
});

router.put('/:department', async (req, res) => {
const departmentData = await department.update(
  {
    department_id: req.body.department_id,
    department_name: req.body.department_name,
  },
  {
    where: {
      department_id: req.params.department_id,
      department_name: req.params.department_name,
    },
  }
);

return res.json(departmentData);
});

router.delete('/:department_id', async (req, res) => {
const departmentData = await department.destroy({
  where: {
    department_id: req.params.department_id,
    department_name: req.params.department_name,
  },
});

return res.json(departmentData);
});

module.exports = Department;
