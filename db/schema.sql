-- DROP
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;


-- CREATE
CREATE TABLE department(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES departments(id)
);


CREATE TABLE employee(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    manager_confirm BOOLEAN
    FOREIGN KEY(role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id)
);


-- USE
