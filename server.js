
const express = require('express');
const path = require('path'); //????

const sequelize = require('./config/connection');
const routes = require('./routes/appstart');

//const inquirer = require('inquirer');
// const department = require('./models/department');
// const employees = require('./models/employees');
// const role = require('./models/role');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
  });
  