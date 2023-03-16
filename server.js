// import & require mysql & dependencies/packages 
// require('dotenv').config();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require('console.table');

const connection = mysql.createConnection (
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '4049367619',
        database: 'employee_db',
      }
);

connection.connect()
// mysql2 code: create the connection exposes promise ()
const con = mysql.createConnection(
    {host:'localhost', user: 'root', database: 'test'}
  );
  con.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
      console.log(rows);
    })
    .catch(console.log)
    .then( () => con.end());
  
// START
const empStart = (data) => {
  inquirer
  .prompt({
    name:"Start",
    type: 'list',
    message: ' Please select one:',
    choices: ['All Departments', 
    'All Roles', 
    'All Employees',
    'Add Department',
    'Add Role',
    'Update Role',
    'Add Employee',
  ]
  })
  .then((data)=> {
    switch (data.Start){
      case "All Departments":
        allDepartments();
        break;
      case 'All Roles':
        allRoles();
        break;
      case 'Add Departments':
        addDepartment();
      case 'Add Role':
        addRole ();
        break;
      case 'Update Role':
        updateRole();
        break;
      case 'Add Employee':
        addEmployee();
    }
    return data;
  })
};



empStart();