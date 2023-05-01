//first guess at this file
const schema = require('../db/schema');
const router = require('express').Router();
const role = require('?');

router.get('/', async (req, res)=>{
const roleData = await role.findAll();

// Return the bookData promise inside of the JSON response
return res.json(roleData);
});

router.post('/', async (req, res) => {
const roleData = await role.create(req.body);

return res.json(roleData);
});

router.get('/role', async (req, res) => {
const roleData = await role.findAll({
  role_title: ['role title'],
  role_salary: ['role salary'],
  role_department_id: ['role department id'],
  where: {
//       is_role: true,   ????
//     },
  },
  
});

return res.json(roleData);
});

router.get('/role', async (req, res) => {
const roleData = await role.findByPk(req.params.id);

return res.json(roleData);
});

router.post('/', async (req, res) => {
const roleData = await role.create(req.body);

return res.json(roleData);
});

router.put('/:role', async (req, res) => {
const roleData = await role.update(
  {
    role_title: req.body.role_title,
    role_salary: req.body.role_salary,
    role_department_id: req.body.role_department_id,
},
{
  where: {
    role_title: req.params.role_title,
    role_salary: req.params.role_salary,
    role_department_id: req.params.role_department_id,
  },
});

return res.json(roleData);
});

router.delete('/:role_id', async (req, res) => {
const roleData = await role.destroy({
  where: {
    role_title: req.params.role_title,
    role_salary: req.params.role_salary,
    role_department_id: req.params.role_department_id,
  },
});

return res.json(roleData);
});

module.exports = role;
