const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "tracker_db"
});

connection.connect(function (err){
    if(err){
        throw err
    } else{
        console.log("connected as id " + connection.threadId);
        // console.clear();
        startTracker();
    }
});

function startTracker(){
    // console.clear();
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
                console.log("Please enter a valid answer");
                startTracker();
                break;
        }
    })
};

function addDepartments(){
    console.log("Adding department...");
    startTracker();
};

function addRoles(){
    console.log("Adding role...");
    startTracker();
};

function addEmployees(){
    console.log("Adding employee...");
    startTracker();
};

function viewDepartments(){
    console.log("Fetching department data...");
    startTracker();
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