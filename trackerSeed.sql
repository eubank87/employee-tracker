USE tracker_db;

INSERT INTO department (name)
VALUES ("Sales"),
("Accounting"),
("Service");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 100000, 1),
("Assistant Manager", 70000, 2),
("Associate", 40000, 3);

INSERT INTO employee (first_name, last_name, roles_id)
VALUES ("Ashley", "Eubank", 1);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Allie", "Miller", 2, 1),
("Victor", "Soto", 3, 1),
("Garth", "McGartherson", 3, 1);
