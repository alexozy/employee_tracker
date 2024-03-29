// import & require mysql & dependencies/packages 
require('dotenv').config();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require('console.table');

const con= mysql.createConnection (
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '4049367619',
        database: 'employee_db',
      }
);

con.connect(err => {
  if(err)throw err
  empStart();
})
// mysql2 code: create the con exposes promise ()
// const con = mysql.createConnection(
//     {host:'localhost', user: 'root', database: 'test'}
//   );
  // con.promise().query("SELECT 1")
  //   .then( ([rows,fields]) => {
  //     console.log(rows);
  //   })
  //   .catch(console.log)
  //   .then( () => con.end());
  
// START
const empStart = (data) => {
  inquirer
  .prompt({
    name:"Start",
    type: 'list',
    message: ' Please select one:',
    choices: [
      'All Departments', 
    'Add Department',
    'All Roles', 
    'Add Role',
    'All Employees',
    'Add Employee',
    'Update Employee',
  ]
  })
  .then((data)=> {
    switch (data.Start){
      case "All Departments":
        allDepartments();
        break;
      case 'Add Department':
          addDepartment();
          break;
      case 'All Roles':
        allRoles();
        break;
      case 'Add Role':
        addRole ();
        break;
      case 'All Employees':
        allEmployees();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'Update Employee':
        updateEmployee();
        break;
    }
    return data;
  });
};




// 'All Departments', 
const allDepartments = () => {
  con.query(
    `SELECT department.department_name, department.id FROM department;`,
    function (err, res){
      if(err) throw err;
      console.table(res);
      empStart()
    }
  );
};

// 'Add Department',
const addDepartment = () =>{
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "Add your department name:",
    },
  ])
  .then((input) => {
    const inputs = input.name;
    const add = `INSERT INTO department (department_name) VALUES (?)`;
    con.query(add, inputs, (err, res) => { 
      if(err) throw err;
      return input;});
  })
  .then(()=> {empStart();});
};

// 'All Roles', 
const allRoles = () => {
  con.query(
    `SELECT roles.id, roles.title, roles.salary, roles.department_id FROM roles;`,
    function (err, res){
      if(err) throw err;
      console.table(res);
      empStart();
    }
  );
};

const addRole = () =>{
  // 'Add Role',
  // inquire prompt for new name/depart then do query inside the inquire
  // inquire.prompt
  // require actual ID 
return inquirer
 .prompt([
  {
  type: 'input',
  name: 'title',
  message: "Enter role name:",
  },
  {
    type: 'input',
    name: 'salary',
    message: "Enter Role Salary amount:",
  },
  {
    type: 'input',
    name: 'department_id',
    message: "Enter department ID:",
  },
 ])
 .then ((input)=> {
  const roleInfo = [input.title, input.salary, input.department_id];
  const add = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
  con.query(add, roleInfo, (err, res) => {
    if (err) throw err;
    return input
  });
 })
  .then(()=> {
    empStart();
  });
};

// 'All Employees',
// askbcs recommends " The suggestion is to use CONCAT with manager name and LEFT JOIN role on role_id and the same on department_id.
// I will come back if I have time to resubmit!

const allEmployees = () =>{
  con.query( 
    `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id FROM employee`,
    function (err, res){
      if (err) throw err;
      console.table(res);
      empStart();
    }
  )
};

// 'Add Employee',
const addEmployee =() =>{
  return inquirer
  .prompt ([
    {
      type: "input",
      name: "first_name",
      message: "First Name:",
    },
    {
      type: "input",
      name: "last_name",
      message: "Last Name:",
    },
    {
      type: "input",
      name: "role_id",
      message: "Select Role ID:",
    },
    {
      type: "list",
        name: "manager_id",
        message: "Select Manager ID:",
        choices: ["1"],
    },
    // {
    //   type: "Input",
    //     name: "department_id",
    //     message: "Select Department: (type number! 1-mgmt, 2-deliv, 3-flor, 4-ov)",
          
    //   },
    // {
    //   type: "input",
    //     name: "salary",
    //     message: "Enter Employee Salary",
    // },
  ])

  .then((input)=>{
    const empInfo = [ input.first_name, input.last_name, input.role_id,input.manager_id,];
    const add = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    con.query (add, empInfo, (err, res)=> {
      if (err) throw err;
      return input;
    });
    // .then((input)=>{
    //   const empInfo = [ input.first_name, input.last_name, input.role_id,input.manager_id, input.department_id, input.salary];
    //   const add = `INSERT INTO employee (first_name, last_name, role_id, manager_id, department_id, salary) VALUES (?,?,?,?,?,?)`;
    //   con.query (add, empInfo, (err, res)=> {
    //     if (err) throw err;
    //     return input;
    //   });
    })
    .then (()=> {
      empStart();
    });
  };

  // 'Update Employee',
  const updateEmployee = () =>{
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: "Current Employee ID:",
      },
      // if i have time, I'd like to learn how to update these in the bb with the confirm
  //     {
  //       type: "confirm",
  //       name: "first_name",
  //       message: "Update first name?",
  //       default: false
  //   },
  //   {
  //     type: "confirm",
  //     name: "last_name",
  //     message: "Update last name?",
  //     default: false
  // },
      {
        type: 'input',
        name: 'role_id',
        message: "Enter New ID:",
      },
    ])
    .then ((input)=> {
      const updateEmp=[ input.role_id, input.id];
      const add = `UPDATE employee SET role_id = ? WHERE id = ?`;
      con.query(add, updateEmp, (err, res)=>{
        if (err) throw err;
        return input;
      })
    })
    .then(()=> {
      empStart();
    });
  };