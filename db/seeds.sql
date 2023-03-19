INSERT INTO department (department_name)
VALUES 
('Management'),
('Delivery'),
('Floral'),
('Overnight');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Store Manager',205000.00, 1),
('Driver', 65000.00, 2),
('Florist', 85000.00,3),
('Cleaner',50000.00,4),
('De-thorner', 55000.00,3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Frank', 'Reagan', 1),
('Calvin', 'Chase', 2),
('Mona', 'Lisa',3),
('Lil', 'Wayne', 5),
('Chance','The Rapper', 5),
('J','Cole',4);


UPDATE `employee_db`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');