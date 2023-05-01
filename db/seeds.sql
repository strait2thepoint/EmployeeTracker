INSERT INTO department (department_name)
VALUES
  ('Housekeeping'),
  ('Nurse Aide'),
  ('Nurse'),
  ('Management');

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
('Jean', 'Strekenghost', 1, 8),
('BethAnn', 'DeLion', 2, 10),
('Cassie', 'Dodge', 2, 10),
('Stephen', 'Napier', 2, 10),
('Jenipher', 'Sera', 3, 9),
('Susan', 'Kind', 3, 9),
('Mark', 'Dewalt', 3, 9),
('Travis', 'Crypt', 3, 11),
('Tracy', 'Dew', 3, 11),
('Andrew', 'Winger', 3, 11),
('Brian', 'Wilson', 3, NULL);

INSERT INTO role (title, salary, department_id)
VALUES
('Housekeeping', 28000, 1),
('Nurse Aide', 40000, 2),
('Nurse', 83000, 3),
('Management', 150000, 4);
