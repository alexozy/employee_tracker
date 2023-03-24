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

-- can't get the last three columns to show up in the CLI not sure why
-- i'm able to source the seeds and schema but they are not displaying all data in the cli
-- INSERT INTO employee (first_name, last_name, role_id, manager_id, salary, department_id)
INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Frank', 'Reagan', 1),
('Calvin', 'Chase', 2),
('Mona', 'Lisa',3),
('Lil', 'Wayne', 5),
('Chance','The Rapper', 5),
('J','Cole',4);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id, salary, department_id)
-- VALUES 
-- ('Frank', 'Reagan', 1,1,25000.00,1),
-- ('Calvin', 'Chase', 2,1,65000.00,2),
-- ('Mona', 'Lisa',3,1,85000.00,3),
-- ('Lil', 'Wayne', 5,1,55000.00,3),
-- ('Chance','The Rapper', 5,1,55000.00,3),
-- ('J','Cole',4,1,50000.00,4);

