const router = require('express').Router();
const department = require('../../models/department');
const employees = require('../../models/employees');
const role = require('../../models/role');
// Change the anonymous callback function to become Asynchronous
router.get('/', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const departmentData = await department.findAll();

  // Return the bookData promise inside of the JSON response
  return res.json(departmentData);
});

router.post('/', async (req, res) => {
  const departmentData = await department.create(req.body);

  return res.json(departmentData);
});

router.get('/department', async (req, res) => {
  const departmentData = await department.findAll({
    department_name: ['department name'],
    where: {
//       is_paperback: true,
//     },
//     attributes: {
//       exclude: ['is_paperback', 'edition'],
    },
  });

  return res.json(departmentData);
});

router.get('/:id', async (req, res) => {
  const departmentData = await department.findByPk(req.params.id);

  return res.json(departmentData);
});

router.post('/', async (req, res) => {
  const departmentData = await department.create(req.body);

  return res.json(departmentData);
});

router.put('/:department_id', async (req, res) => {
  const departmentData = await department.update(
    {
      department_name: req.body.department_name,
    },
    {
      where: {
        department_id: req.params.department_id,
      },
    }
  );

  return res.json(departmentData);
});

router.delete('/:department_id', async (req, res) => {
  const departmentData = await department.destroy({
    where: {
      department_id: req.params.department_id,
    },
  });

  return res.json(departmentData);
});

module.exports = router;