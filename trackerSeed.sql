USE tracker_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Eubank", 5, 2),
("Victor", "Soto", 3, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Garthie", "McGartherson", 6, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 100000, 1),
("Assistant Manager", 70000, 2);

INSERT INTO department (name)
VALUES ("Sales"),
("Service");