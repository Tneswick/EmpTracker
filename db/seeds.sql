INSERT INTO department(name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Service'),
    ('Legal'),
    ('Maintenance'),
    ('Finance'),
    ('Administration');

INSERT INTO role(title, salary, department_id)
VALUES
    ('Salesperson', 80000.00, 1),
    ('Software Engineer', 120000.00, 2),
    ('Customer Service', 80000.00, 3),
    ('Legal Team Lead', 250000.00, 4),
    ('Lawyer', 190000.00, 4),
    ('Account Manager', 160000.00, 6),
    ('Accountant', 125000.00, 6),
    ('Lead Engineer', 150000.00, 2),
    ('Lead Salesperson', 110000.50, 1),
    ('Janitor', 45000.00, 5),
    ('Lead Janitor', 65000.00, 5),
    ('CEO', 400000.00, 7),
    ('Lead Manager', 300000.00, 7);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 12, NULL),
    ('Jack', 'London', 13, 1),
    ('Robert', 'Bruce', 4, 2),
    ('Peter', 'Greenaway', 9, 2);
    