const mysql = require("mysql");
const inquirer = require("inquirer");

// connecting to mysql server
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "tracker_db"
});

// function for what to do with connection
connection.connect(function (err){
    if(err){
        throw err
    } else{
        console.log("connected as id " + connection.threadId);
        // console.clear();
        startTracker();
    }
});

// function to start program
function startTracker(){
    // console.clear();
    // initial list of options, way to end/exit program and default for invalid option
    inquirer.prompt([
        {
            type: "list",
            message: "What do you want to do?",
            choices: ["Add departments", "Add roles", "Add employees", "View departments", "View roles", "View employees", "Update employee roles", "Exit"],
            name: "start"
        }
    ]).then((ans)=>{
        switch(ans.start){
            case "Add departments":
                addDepartments();
                break;

            case "Add roles":
                addRoles();
                break;

            case "Add employees":
                addEmployees();
                break;

            case "View departments":
                viewDepartments();
                break;

            case "View roles":
                viewRoles();
                break;

            case "View employees":
                viewEmployees();
                break;

            case "Update employee roles":
                updateRoles();
                break;

            case "Exit":
                console.log("Goodbye!");
                connection.end();
                break;

            default:
                console.log("Please enter a valid option");
                startTracker();
                break;
        }
    })
};

// functions for switch case in order they're asked
function addDepartments(){
    // console.log("Adding department...");
    inquirer.prompt([
        {
            type: "input",
            message: "Enter department name",
            name: "depName"
        }
        // pulling user input for name and inserting into department table
    ]).then((ans)=>{
        connection.query("INSERT INTO department (name) VALUES (?)", [ans.depName], function (err, res){
            if(err){
                throw err
            } else{
                console.log(`${ans.depName} added to departments`);
                startTracker();
            }
        })
    })
};

function addRoles(){
    // console.log("Adding role...");
    // empty array to push inquirer object into
    const depArr = []
    connection.query("SELECT id, name FROM department", function (err, depData){
        if(err){
            throw err
        } else{
            // for loop running over data fetched from department table for name & id
            for(let i = 0; i<depData.length; i++){
                const inqObj = {
                    id: depData[i].id,
                    name: depData[i].name
                }
                depArr.push(inqObj);
            }
            // use new department array variable as choices in new prompt
            inquirer.prompt([
                {
                    type: "list",
                    message: "Choose a department:",
                    choices: depArr,
                    name: "depName"
                },
                {
                    type: "input",
                    message: "What is the new role?",
                    name: "newRole"
                },
                {
                    type: "number",
                    message: "Enter salary:",
                    name: "newSal"
                }
            ]).then((ans)=>{
                // each department has unique id auto incremented by sql. Need to fetch associated id for department selected for new role.
                // variable to hold id info
                let depId;
                // for loop running over data fetched from department table
                for(let i = 0; i<depData.length; i++){
                    // conditional to check if selected dept name = dept name in array created above. If they match, set = to new variable for dept id.
                    if(depArr[i].name === ans.depName){
                        depId = depArr[i].id;
                    }
                }
                // insert new role into roles table in sql file
                connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [ans.newRole, ans.newSal, depId], function (err, res){
                    if(err){
                        throw err
                    } else{
                        console.log("New role created");
                        startTracker();
                    }
                })
            })
        }
    })
};

function addEmployees(){
    console.log("Adding employee...");
    startTracker();
};

function viewDepartments(){
    // console.log("Fetching department data...");
    // fetching data from department table with column title added
    connection.query(`SELECT name AS "Department List" FROM department`, function (err, res){
        if(err){
            throw err
        } else{
            console.table(res);
            startTracker();
        }
    })
};

function viewRoles(){
    console.log("Fetching role data...");
    startTracker();
};

function viewEmployees(){
    console.log("Fetching employee data...");
    startTracker();
};

function updateRoles(){
    console.log("Updating role...");
    startTracker();
};