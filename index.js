const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'mary',
        password: '12345',
        database: 'employee_trackerDB'
    }
);
connection.connect((error)=> {
    if(error) throw error;
    obtainInfo()
});

console.table("\n THE EMPLOYEE TRACKER \n")

const obtainInfo=()=>{
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to start doing?',
        choices: [
            'View Department',
            'View Role',
            'View Employee',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'EXIT'
         ],
})
    .then((answer)=> {
        console.log(answer.action);

        switch(answer.action) {
            case 'Add Department':
            addDepartment()
            break;
            case 'Add Role':
            addRole()
            break;
            case 'Add Employee':
            addEmployee();
            break;
            case 'View Department':
            viewDepartment()
            break;
            case 'View Role':
            viewRole()
            break;
            case 'View Employee':
            viewEmployee()
            break;
            case 'Updae Employee Role':
            updateEmployeeRole()
            break;
            default: 

            console.log(`invalid action: ${answer.action}`);
            break;           
}});
const updateEmployeeRole=()=>
    inquirer.prompt ([{
        type: 'input',
        name: 'name',
        message: 'Indentify which employee you are updating by last name only.'
    },
    {
        type: 'number',
        name: 'role_id',
        message: 'What is the new role id?'
    }])
    .then(function(answer) {
        const updateEmployeeRole = (answer.name, answer.roleID)
        console.log(answer)
        obtainInfo();
    })
 /*    .then(function(response) {
        connection.query(query, 'UPDATE employee SET role_id=? WHERE last_name=?',
        [response.role_id, response.name], function (error, data){
            console.table(data);
            obtainInfo.info();
        })
    }); */

const viewEmployee=()=> {
    connection.query( 'SELECT * FROM employee',
    function (error, data) {
        console.table(data); 
        obtainInfo();
    })
}
const viewRole=()=> {
    connection.query( 'SELECT * FROM role', 
    function(error, data) {
        console.table(data);
        obtainInfo();
    });
}
const viewDepartment=()=> {
    connection.query('SELECT * FROM department', 
    function(error, data) {
        console.table(data);
        obtainInfo(); 
    });
}
const addEmployee=()=> {
    inquirer.prompt([{
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the new employee?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the new employee?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the role id of the new employee?'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is manager id for this employee?'
    }])
    .then(function(response) {
        connection.query( 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
        [response.first_name, response.last_name, response.role_id, response.manager_id],
        function(error, data) {
            if (error) throw error;
            console.table(data);
            obtainInfo();   
        });
    })
}

const addRole=()=> {
    inquirer.prompt ([{
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },
    {
        type: 'input',
        name: 'wages',
        message: 'What is your salary?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is your role id'
    }])
    .then(function(response) {
        connection.query( 'INSERT INTO role (title, salary, id) VALUES (?,?,?)',
        [response.title, response.salary, response.id],
        function(error, data) {
            if (error) throw error;
            console.table(data);
            obtainInfo();
        });
    });
}
    
const addDepartment=()=>
    inquirer.prompt({
        type: 'input',
        name: 'department',
        message: 'What department are you adding?'
    })
    .then(function(response) {
        connection.query('INSERT INTO department (name) VALUES (?)',
        [response.name],
        function(error, data) {
            if (error) throw error;
            console.table(data);
            obtainInfo();
        });
    })}