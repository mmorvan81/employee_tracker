USE employee_trackerDB;

INSERT INTO department (dept) VALUES ('Admin');
INSERT INTO department (dept) VALUES ('Advertising');

INSERT INTO role (title, salary, department_id) VALUES ('Administrator','30000', '1');
INSERT INTO role (title, salary, department_id) VALUES ('Artist', '70000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('Designer', '50000', '2');
INSERT INTO role (title, salary, department_id) VALUES ('Illustrator', '60000', '2');


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jack', 'Johnson', '1', '10');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Smith', '2', '10');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lenny', 'Munch', '2', '10');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Andy', 'Boyd', '2', '10');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joan', 'Jergen', '2', '10');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Andy', 'Picallo', '2', '10');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Susan', 'Sands', '2', '10');



