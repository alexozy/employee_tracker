-- DROP
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;


-- CREATE
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY ,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

-- need to add department, salary and manager name
CREATE TABLE employee(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    -- salary INT,
    -- department_id INT
    FOREIGN KEY(role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employee(id)
    -- FOREIGN KEY(department_id) REFERENCES department(id)
);

-- code doesn't seem to like department_id as a VARCHAR only INT, will have to change my server prompts to match INT
    -- department_id VARCHAR(30) NOT NULL,
-- CREATE TABLE employee(
--     id INT PRIMARY KEY  AUTO_INCREMENT,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     role_id INT NOT NULL,
--     manager_id INT,
    -- salary INT,
    -- department_name INT
--     FOREIGN KEY(role_id) REFERENCES roles(id),
--     FOREIGN KEY(manager_id) REFERENCES employee(id)
--     -- FOREIGN KEY(department_name) REFERENCES department(department_name)
-- );
-- USE
