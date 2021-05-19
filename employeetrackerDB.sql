DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDb;

USE employee_trackerDB;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dept VARCHAR(30)NOT NULL,  
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary VARCHAR(30),
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);
