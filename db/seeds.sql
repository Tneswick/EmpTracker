INSERT INTO department(name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Service'),
    ('Legal'),
    ('Administration');

INSERT INTO role(title, salary, department_id)
VALUES
    ('Salesperson', 80000.00, 1),
    ('Software Engineer', 120000.00, 2),
    ('Customer Service', 80000.00, 3),
    ('Legal Team Lead', 250000.00, 4),
    ('Lawyer', 190000.00, 4),
    ('Lead Engineer', 150000.00, 2),
    ('Lead Salesperson', 110000.50, 1),
    ('CEO', 400000.00, 5),
    ('Lead Manager', 300000.00, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 8, NULL),
    ('Jack', 'London', 9, 1),
    ('Robert', 'Bruce', 4, 2),
    ('Peter', 'Greenaway', 5, 3),
    ('John', 'Doe', 6, 2),
    ('Jane', 'Doe', 5, 5),
    ('Bruce', 'Wayne', 7, 2),
    ('Peter', 'Parker', 1, 7);
    