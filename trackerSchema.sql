DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE roles(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(45) NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  roles_id INT NOT NULL,
  manager_id INT NULL,
  FOREIGN KEY (roles_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);