
const router = require('express').Router();

const deptRoutes = require('../models/departments');

router.use('/department', deptRoutes);

const employees = require('../models/employees');

router.use('/employees', employees);

const role = require('../models/role');

router.use('/role', role);

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;

